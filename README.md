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
persiste tokens y soporta dos canales, según quién sea dueño de la sesión:

| Canal | Cuándo | Qué envía |
|---|---|---|
| **Bearer** (`getAccessToken`) | Aplicación externa con su propio login OIDC (ADR-031). **Es el canal de integración.** | `Authorization: Bearer <token>` pedido al host antes de **cada** petición; sin cookies ni CSRF |
| **Cookie BFF** (por omisión) | El panel propio del PDP, mismo sitio | Cookie de sesión con `credentials: "include"` y `X-XSRF-TOKEN` en escrituras |

```ts
mount(document.querySelector("#security")!, {
  applicationId: "018f4d8b-7c69-7a6d-ae2c-9b2f8d0da77d",
  apiBaseUrl: "https://pdp.example.edu",
  // El host es dueño de la sesión: devuelve un token vigente (renovado por su cliente OIDC) con audiencia del PDP.
  getAccessToken: () => auth.getValidAccessToken(),
  // El componente informa y no reintenta; el host decide.
  onError: ({ cause, status, code }) => {
    if (cause === "unauthenticated") auth.login();       // 401 o sin token
    if (cause === "mfa_required") auth.stepUpWithMfa();  // 403 MFA_REQUIRED
    // "forbidden" (403) y "unavailable" (429/503, reintentable) normalmente solo se muestran.
  },
  // Opcional: aviso antes de que venza el token que el host entregó (por omisión 60 s antes).
  onSessionExpiring: ({ secondsLeft }) => auth.refreshNow(), // o avisar a la persona
  // sessionWarningSeconds: 90,   // antelación del aviso
  // sessionNotice: true,         // además, un aviso con cuenta regresiva dentro del panel
});
```

### Apariencia

El panel usa el mismo sistema de diseño que la consola de seguridad (verde institucional, IBM Plex Sans/Mono, botones, tablas y diálogos equivalentes). Para que la tipografía coincida, el componente agrega **una sola vez** la hoja de Google Fonts de IBM Plex al `<head>`; si tu página ya la carga o tu política de contenido no permite ese origen, pasa `loadFonts: false` (se usa una fuente de sistema parecida). `theme: { accent, fontFamily, radius }` sigue permitiendo ajustar el acento, la fuente y el radio.

### Aviso de sesión por vencer (opcional)

Solo aplica al canal Bearer. El componente lee el `exp` de cada token que el host le entrega con `getAccessToken` (solo lo
lee: no lo valida ni lo guarda) y, cuando faltan `sessionWarningSeconds` (60 por omisión) o menos, llama **una vez por token** a
`onSessionExpiring({ secondsLeft })`. No renueva ni hace peticiones nuevas: el host decide (renovar ya, avisar a la persona).
Si el siguiente `getAccessToken` entrega un token nuevo, el aviso integrado se retira solo. Las tres opciones son opcionales:
sin ellas el comportamiento es el de siempre.

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
