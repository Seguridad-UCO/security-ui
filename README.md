# Security UI

Microfrontend Vue 3, agnóstico del host, para administrar la seguridad de una aplicación. Conserva
el custom element con Shadow DOM, distribución ESM y Module Federation.

## Integración

```ts
import { mount } from "https://security-ui.example.edu/v1/security-administration.js";

mount(document.querySelector("#security")!, {
  applicationId: "018f4d8b-7c69-7a6d-ae2c-9b2f8d0da77d",
  applicationName: "Notas",
  apiBaseUrl: "https://pdp.example.edu",
  allowApplicationLifecycleManagement: false,
  theme: { accent: "#087443", fontFamily: "Inter, sans-serif", radius: "12px" },
});
```

También puede configurarse `<uco-security-administration>` directamente. El componente nunca
persiste tokens: envía cookies con `credentials: "include"` y adjunta `X-XSRF-TOKEN` en escrituras.

## API que consume

Todas las lecturas están bajo `/api/v1/applications/{applicationId}/security` y son autorizadas por
el PDP como administrador de esa misma aplicación:

- `GET /summary`
- `GET /resources`, `/roles`, `/profiles`, `/administrators`
- `GET /role-assignments`, `/profile-assignments`
- `GET /roles/{roleId}/resources`, `/profiles/{profileId}/roles`
- `GET /users?query=ana`

Las colecciones aceptan exclusivamente uno de `page`/`size` o `offset`/`limit`; mezclarlos es un
`400`. La UI usa `page=0&size=20` y nunca consume ni filtra catálogos globales en el navegador.
No existe ni se publica `security-overview`.

El resumen se carga al montar. Roles, perfiles, recursos, administradores y asignaciones se cargan
al abrir su pestaña; los usuarios solo se buscan al abrir un formulario. Cada colección conserva
su contenido mientras llega una página nueva, cancela la petición obsoleta y mantiene caché por
`applicationId + colección + página + límite`. Las mutaciones invalidan únicamente la colección y
el resumen afectados.

## Capacidades administrativas

| Dominio | Operaciones |
| --- | --- |
| Administradores | agregar y retirar; el PDP rechaza retirar el último administrador |
| Recursos | crear, editar ruta/método y eliminar |
| Roles y perfiles | crear, renombrar y eliminar |
| Asignaciones | crear y revocar |
| Relaciones | agregar y retirar recurso de rol o rol de perfil con detalle específico paginado |

Las eliminaciones y revocaciones piden confirmación. Un `400` muestra el error de validación del PDP,
`403` informa acceso denegado, `404` que el elemento ya no existe y `409` que hay dependencias o un
conflicto. No se reintentan escrituras. `allowApplicationLifecycleManagement` habilita la edición de
metadatos de aplicación: Security UI no renderiza eliminación de aplicación.

Las rutas de escritura son `PATCH /api/v1/applications/{applicationId}` (solo con autorización explícita del host), `PATCH`/`DELETE` de recursos, roles y perfiles, `DELETE` de asociaciones
y asignaciones, además de los `POST` ya documentados. Todas usan cookies, `Accept: application/json`,
CSRF cuando existe `XSRF-TOKEN`, y nunca reciben un `AbortSignal`.

## Desarrollo

```sh
npm install
npm run build
npm run test
npm run preview
```

El bundle ESM es `dist/security-administration.js`. Para Module Federation se publica
`dist/remoteEntry.js`, con la exposición `security_ui/security-administration`. Ningún host debe
importar componentes internos ni compartir el runtime de Vue.
