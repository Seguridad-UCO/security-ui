export type SecurityUiTheme = {
  accent?: string;
  fontFamily?: string;
  radius?: string;
};
/** Stable, framework-neutral public contract for host applications. */
export type SecurityUiOptions = {
  applicationId?: string;
  applicationName?: string;
  apiBaseUrl: string;
  theme?: SecurityUiTheme;
  /**
   * Carga IBM Plex Sans/Mono (la tipografía de la consola de seguridad) desde Google Fonts, una sola vez por página.
   * Por defecto `true`. Ponlo en `false` si tu página ya las carga o tu política de contenido no permite ese origen: el
   * panel usa una fuente de sistema equivalente.
   */
  loadFonts?: boolean;
  /** Enables PATCH application metadata; deletion is never rendered. */ allowApplicationLifecycleManagement?: boolean;
  /**
   * Canal bearer (ADR-031). Devuelve un access token vigente con audiencia del PDP; se invoca antes de cada
   * petición y el componente nunca lo guarda. Si se omite, se usa la cookie de sesión BFF.
   */
  getAccessToken?: () => string | Promise<string>;
  /** Avisa al host de fallos que le corresponden (login, MFA, indisponibilidad). El componente no reintenta. */
  onError?: (error: SecurityUiError) => void;
  /**
   * Opcional (canal bearer). Se llama una vez por token cuando faltan `sessionWarningSeconds` o menos para que venza el
   * que el host entregó con `getAccessToken`. El componente no renueva: el host decide (renovar ya, avisar a la persona).
   */
  onSessionExpiring?: (info: { secondsLeft: number }) => void;
  /** Segundos de antelación del aviso. Por defecto 60. */
  sessionWarningSeconds?: number;
  /** Opcional. Muestra dentro del panel un aviso discreto con la cuenta regresiva. Por defecto `false`. */
  sessionNotice?: boolean;
};
export type SecurityUiError = {
  cause: "unauthenticated" | "mfa_required" | "forbidden" | "unavailable";
  status: number;
  code?: string;
};
export type Page = {
  page?: number;
  size?: number;
  offset?: number;
  limit?: number;
};
export type PageResponse<T> = {
  content: T[];
  total: number;
  page: number;
  offset: number;
  limit: number;
};
export type PaginatedState<T> = {
  content: T[];
  total: number;
  page: number;
  limit: number;
  loading: boolean;
  error: string | null;
  loaded: boolean;
  abortController?: AbortController;
};
export type SecuritySummary = {
  application: {
    id: string;
    name: string;
    description?: string | null;
    baseUrl?: string | null;
  };
  counts: {
    resources: number;
    roles: number;
    profiles: number;
    administrators: number;
    roleAssignments: number;
    profileAssignments: number;
  };
};
export type UserIdentitySummary = { id: string; name: string; email: string };
export type RoleSummary = { id: string; name: string };
export type ProfileSummary = { id: string; name: string };
export type User = UserIdentitySummary;
export type Administrator = {
  user: UserIdentitySummary;
  validFrom: string;
  validUntil?: string | null;
};
export type Resource = {
  id: string;
  path: string;
  method: string;
  registeredAt?: string;
};
export type Role = {
  id: string;
  name: string;
  resourceCount?: number;
  registeredAt?: string;
};
export type Profile = {
  id: string;
  name: string;
  roleCount?: number;
  registeredAt?: string;
};
export type RoleAssignment = {
  id: string;
  user: UserIdentitySummary;
  role: RoleSummary;
  validFrom: string;
  validUntil?: string | null;
};
export type ProfileAssignment = {
  id: string;
  user: UserIdentitySummary;
  profile: ProfileSummary;
  validFrom: string;
  validUntil?: string | null;
};
export type UserAssignmentsResponse = {
  user: UserIdentitySummary;
  roleAssignments: PageResponse<RoleAssignment>;
  profileAssignments: PageResponse<ProfileAssignment>;
};
export type ApiFieldError = { field?: string; message: string; code?: string };
export type SecurityUiHandle = {
  element: SecurityAdministrationElement;
  refresh: () => Promise<void>;
  unmount: () => void;
};
export interface SecurityAdministrationElement extends HTMLElement {
  configure(options: SecurityUiOptions): void;
  refresh(): Promise<void>;
}
