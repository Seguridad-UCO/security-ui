# Estándar de integración de Security UI v1

## Frontera pública

Security UI se publica como custom element con Shadow DOM y como módulo ESM/Module Federation. El
único contrato público es:

```ts
mount(container, {
  applicationId: "018f4d8b-7c69-7a6d-ae2c-9b2f8d0da77d",
  applicationName: "Notas",
  apiBaseUrl: "https://pdp.example.edu",
  theme: { accent: "#087443", fontFamily: "Inter, sans-serif", radius: "12px" },
});
```

El host es dueño de navegación e identidad; Security UI es dueña de su interfaz y ciclo de datos.
No se importan componentes internos ni se comparte Vue/React con el host.

`allowApplicationLifecycleManagement` es opcional y por defecto `false`. Permite al host autorizar
edición de nombre, descripción y URL base mediante `PATCH /api/v1/applications/{applicationId}`;
nunca habilita borrar una aplicación en este MFE.

## Lecturas administrativas

El PDP expone, exclusivamente para administradores de la aplicación:

| Ruta | Carga de la UI |
| --- | --- |
| `GET .../security/summary` | al montar; solo nombre y conteos |
| `GET .../security/resources` | pestaña Recursos |
| `GET .../security/roles` | pestaña Roles |
| `GET .../security/profiles` | pestaña Perfiles |
| `GET .../security/administrators` | pestaña Administradores |
| `GET .../security/role-assignments` | pestaña Personas |
| `GET .../security/profile-assignments` | pestaña Personas |
| `GET .../security/roles/{roleId}/resources` | diálogo de relaciones del rol |
| `GET .../security/profiles/{profileId}/roles` | diálogo de relaciones del perfil |
| `GET .../security/users?query=...` | selector de usuario abierto |

La URL base es `/api/v1/applications/{applicationId}/security`. Todas las colecciones responden
`PageResponse` dentro de `ApiResponse` y aceptan `page`/`size` o `offset`/`limit`, sin mezclarlos.
El valor de `tenantId` nunca viene del host: el PDP lo resuelve desde la aplicación y autoriza antes
de consultar SurrealDB. `security-overview` no forma parte de ningún contrato.

```json
{
  "code": "APPLICATION_SECURITY_ROLES_LISTED",
  "message": "...",
  "data": { "content": [], "total": 3400, "page": 0, "offset": 0, "limit": 20 },
  "timestamp": "...",
  "requestId": "...",
  "correlationId": "..."
}
```

`summary` no usa este contenedor de página: entrega `application.id`, `application.name`,
`application.description`, `application.baseUrl` y los seis conteos. Nunca entrega colecciones.

## Seguridad operativa

1. El host debe comprobar la sesión BFF antes de montar y redirigir `401` al login central usando un
   `returnTo` permitido.
2. Configure el origen exacto en `pdp.security.cors.allowed-origins`; nunca `*` con credenciales.
3. Permita `credentials`, `Accept` y `X-XSRF-TOKEN` en CORS. El token antifalsificación debe estar
   disponible para JavaScript en la cookie `XSRF-TOKEN`; la cookie de sesión sigue siendo `HttpOnly`.
4. Aplique CSP con `script-src` para el CDN y `connect-src` para el PDP. Versione artefactos por
   major y use SRI cuando la publicación genere hashes estables.
5. Ocultar un botón no autoriza nada: cada consulta y mutación es validada nuevamente por el PDP.

Las páginas se pueden cambiar rápidamente: Security UI cancela la solicitud anterior y deja visible
el último resultado correcto hasta recibir la siguiente página. La caché es local a la instancia y
se invalida de manera granular después de cada mutación.

| Mutación | Invalidación |
| --- | --- |
| recurso | recursos, resumen |
| rol o perfil | su colección, resumen |
| asociación | detalle paginado y colección dueña |
| asignación | colección de asignaciones correspondiente, resumen |
| administrador | administradores, resumen |

Las claves de página son `applicationId:collection:page:limit`; los detalles de relaciones incluyen
además el id de rol o perfil. Tras eliminar, se recarga la página actual sin borrar su contenido
previo; si el PDP responde error el contenido correcto permanece visible. Todas las mutaciones se
vuelven a autorizar en el PDP: la visibilidad de un control no representa un permiso.
