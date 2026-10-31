import type {
  Administrator,
  ApiFieldError,
  Page,
  PageResponse,
  Profile,
  ProfileAssignment,
  Resource,
  Role,
  RoleAssignment,
  SecuritySummary,
  SecurityUiOptions,
  User,
  UserAssignmentsResponse,
} from "./types";
type Envelope<T> = { data: T };

// El texto de un 403 sale del código y no del `detail` del PDP: el cuerpo de una denegación no se muestra tal cual.
function forbiddenMessageFor(code?: string): string {
  if (code === "MFA_REQUIRED")
    return "Esta operación requiere verificación en dos pasos. Vuelva a autenticarse con su segundo factor e inténtelo de nuevo.";
  if (code === "NOT_AUTHORIZED_TO_ADMINISTER_TENANT_CATALOG")
    return "Para definir o modificar roles y perfiles de todo el inquilino debe administrar al menos una aplicación.";
  return "No tiene permisos para administrar la seguridad de esta aplicación.";
}

// El `detail` de estos conflictos trae identificadores internos; la persona usuaria debe ver una frase legible.
const MESSAGES_WITHOUT_IDS: Record<string, string> = {
  ASSIGNMENT_ALREADY_ACTIVE: "Esta persona ya tiene ese rol vigente en la aplicación.",
  PROFILE_ASSIGNMENT_ALREADY_ACTIVE: "Esta persona ya tiene ese perfil vigente en la aplicación.",
  PROTECTED_ROLE: "El rol ADMIN administra la aplicación y no se puede modificar ni eliminar.",
};

// Última defensa: ningún texto del servidor llega a la pantalla con un identificador interno (UUID).
const UUID = /\s*\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi;
function withoutIds(message?: string): string | undefined {
  return message ? message.replace(UUID, "").replace(/\s{2,}/g, " ").trim() || undefined : undefined;
}

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly code?: string,
    message = "No fue posible completar la solicitud.",
    public readonly fields: ApiFieldError[] = [],
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export class SecurityApi {
  private readonly baseUrl: string;
  constructor(private readonly options: SecurityUiOptions) {
    this.baseUrl = options.apiBaseUrl.replace(/\/$/, "");
  }
  async resolveApplicationId(signal?: AbortSignal) {
    if (this.options.applicationId) return this.options.applicationId;
    const name = this.options.applicationName!;
    const page = await this.request<{
      content: Array<{ id: string; name: string }>;
    }>(`/api/v1/applications?name=${encodeURIComponent(name)}&limit=100`, {
      signal,
    });
    const matches = page.content.filter(
      (application) => application.name === name,
    );
    if (matches.length !== 1)
      throw new Error(
        matches.length
          ? "El nombre de aplicación no es único."
          : "No existe la aplicación en este tenant.",
      );
    return matches[0].id;
  }
  getSummary(id: string, signal?: AbortSignal) {
    return this.request<SecuritySummary>(this.security(id, "summary"), {
      signal,
    });
  }
  getResources(id: string, page: Page, signal?: AbortSignal) {
    return this.page<Resource>(id, "resources", page, signal);
  }
  getRoles(id: string, page: Page, signal?: AbortSignal) {
    return this.page<Role>(id, "roles", page, signal);
  }
  getProfiles(id: string, page: Page, signal?: AbortSignal) {
    return this.page<Profile>(id, "profiles", page, signal);
  }
  getAdministrators(id: string, page: Page, signal?: AbortSignal) {
    return this.page<Administrator>(id, "administrators", page, signal);
  }
  getRoleAssignments(id: string, page: Page, signal?: AbortSignal) {
    return this.page<RoleAssignment>(id, "role-assignments", page, signal);
  }
  getProfileAssignments(id: string, page: Page, signal?: AbortSignal) {
    return this.page<ProfileAssignment>(
      id,
      "profile-assignments",
      page,
      signal,
    );
  }
  getUserAssignments(id: string, userId: string, page: Page, signal?: AbortSignal) {
    const query = new URLSearchParams({ page: String(page.page ?? 0), size: String(page.size ?? 20) });
    return this.request<UserAssignmentsResponse>(
      `${this.security(id, `users/${encodeURIComponent(userId)}/assignments`)}?${query}`, { signal },
    );
  }
  getAssignmentsForRole(id: string, roleId: string, page: Page, signal?: AbortSignal) {
    return this.page<RoleAssignment>(id, `roles/${encodeURIComponent(roleId)}/assignments`, page, signal);
  }
  getAssignmentsForProfile(id: string, profileId: string, page: Page, signal?: AbortSignal) {
    return this.page<ProfileAssignment>(id, `profiles/${encodeURIComponent(profileId)}/assignments`, page, signal);
  }
  getRoleResources(
    applicationId: string,
    roleId: string,
    page: Page,
    signal?: AbortSignal,
  ) {
    return this.page<Resource>(
      applicationId,
      `roles/${encodeURIComponent(roleId)}/resources`,
      page,
      signal,
    );
  }
  getProfileRoles(
    applicationId: string,
    profileId: string,
    page: Page,
    signal?: AbortSignal,
  ) {
    return this.page<Role>(
      applicationId,
      `profiles/${encodeURIComponent(profileId)}/roles`,
      page,
      signal,
    );
  }
  searchUsers(id: string, query: string, page: Page, signal?: AbortSignal) {
    return this.page<User>(
      id,
      `users?query=${encodeURIComponent(query)}`,
      page,
      signal,
    );
  }
  addAdministrator(applicationId: string, userId: string) {
    return this.request(
      `/api/v1/applications/${encodeURIComponent(applicationId)}/administrators`,
      { method: "POST", body: { userId } },
    );
  }
  updateApplication(
    applicationId: string,
    patch: { name?: string; description?: string; baseUrl?: string },
  ) {
    return this.request(
      `/api/v1/applications/${encodeURIComponent(applicationId)}`,
      { method: "PATCH", body: patch },
    );
  }
  removeAdministrator(applicationId: string, userId: string) {
    return this.request(
      `/api/v1/applications/${encodeURIComponent(applicationId)}/administrators/${encodeURIComponent(userId)}`,
      { method: "DELETE" },
    );
  }
  createResource(
    applicationId: string,
    body: { path: string; method: string },
  ) {
    return this.request(
      `/api/v1/applications/${encodeURIComponent(applicationId)}/resources`,
      { method: "POST", body },
    );
  }
  createRole(applicationId: string, name: string) {
    return this.request("/api/v1/roles", {
      method: "POST",
      body: { name, scope: "APPLICATION", applicationId },
    });
  }
  createProfile(applicationId: string, name: string) {
    return this.request("/api/v1/profiles", {
      method: "POST",
      body: { name, scope: "APPLICATION", applicationId },
    });
  }
  assignAccess(
    applicationId: string,
    kind: "role" | "profile",
    targetId: string,
    userId: string,
  ) {
    return this.request(
      `/api/v1/${kind}s/${encodeURIComponent(targetId)}/assignments`,
      { method: "POST", body: { userId, applicationId } },
    );
  }
  linkRoleResource(roleId: string, resourceId: string) {
    return this.request(
      `/api/v1/roles/${encodeURIComponent(roleId)}/resources`,
      { method: "POST", body: { resourceId } },
    );
  }
  linkProfileRole(profileId: string, roleId: string) {
    return this.request(
      `/api/v1/profiles/${encodeURIComponent(profileId)}/roles`,
      { method: "POST", body: { roleId } },
    );
  }
  updateResource(
    applicationId: string,
    resourceId: string,
    patch: { path?: string; method?: string },
  ) {
    return this.request(
      `/api/v1/applications/${encodeURIComponent(applicationId)}/resources/${encodeURIComponent(resourceId)}`,
      { method: "PATCH", body: patch },
    );
  }
  deleteResource(applicationId: string, resourceId: string) {
    return this.request(
      `/api/v1/applications/${encodeURIComponent(applicationId)}/resources/${encodeURIComponent(resourceId)}`,
      { method: "DELETE" },
    );
  }
  updateRole(roleId: string, patch: { name?: string }) {
    return this.request(`/api/v1/roles/${encodeURIComponent(roleId)}`, {
      method: "PATCH",
      body: patch,
    });
  }
  deleteRole(roleId: string) {
    return this.request(`/api/v1/roles/${encodeURIComponent(roleId)}`, {
      method: "DELETE",
    });
  }
  unlinkRoleResource(roleId: string, resourceId: string) {
    return this.request(
      `/api/v1/roles/${encodeURIComponent(roleId)}/resources/${encodeURIComponent(resourceId)}`,
      { method: "DELETE" },
    );
  }
  updateProfile(profileId: string, patch: { name?: string }) {
    return this.request(`/api/v1/profiles/${encodeURIComponent(profileId)}`, {
      method: "PATCH",
      body: patch,
    });
  }
  deleteProfile(profileId: string) {
    return this.request(`/api/v1/profiles/${encodeURIComponent(profileId)}`, {
      method: "DELETE",
    });
  }
  unlinkProfileRole(profileId: string, roleId: string) {
    return this.request(
      `/api/v1/profiles/${encodeURIComponent(profileId)}/roles/${encodeURIComponent(roleId)}`,
      { method: "DELETE" },
    );
  }
  revokeRoleAssignment(roleId: string, assignmentId: string) {
    return this.request(
      `/api/v1/roles/${encodeURIComponent(roleId)}/assignments/${encodeURIComponent(assignmentId)}`,
      { method: "DELETE" },
    );
  }
  revokeProfileAssignment(profileId: string, assignmentId: string) {
    return this.request(
      `/api/v1/profiles/${encodeURIComponent(profileId)}/assignments/${encodeURIComponent(assignmentId)}`,
      { method: "DELETE" },
    );
  }
  private security(id: string, suffix: string) {
    return `/api/v1/applications/${encodeURIComponent(id)}/security/${suffix}`;
  }
  private page<T>(
    id: string,
    collection: string,
    page: Page,
    signal?: AbortSignal,
  ) {
    const query = new URLSearchParams();
    if (page.offset !== undefined || page.limit !== undefined) {
      query.set("offset", String(page.offset ?? 0));
      query.set("limit", String(page.limit ?? 20));
    } else {
      query.set("page", String(page.page ?? 0));
      query.set("size", String(page.size ?? 20));
    }
    return this.request<PageResponse<T>>(
      `${this.security(id, collection)}${collection.includes("?") ? "&" : "?"}${query}`,
      { signal },
    );
  }
  private async accessToken(
    getAccessToken: NonNullable<SecurityUiOptions["getAccessToken"]>,
  ): Promise<string> {
    let token: string | undefined;
    try {
      token = await getAccessToken();
    } catch {
      token = undefined;
    }
    if (token) return token;
    const failure = new ApiError(
      401,
      "UNAUTHENTICATED",
      "No hay una sesión vigente. Inicie sesión de nuevo.",
    );
    this.report(failure);
    throw failure;
  }
  // El host decide qué hacer (login, reautenticar con MFA, reintentar); el componente solo informa y nunca reintenta.
  private report(failure: ApiError) {
    const cause =
      failure.status === 401
        ? "unauthenticated"
        : failure.status === 403 && failure.code === "MFA_REQUIRED"
          ? "mfa_required"
          : failure.status === 403
            ? "forbidden"
            : failure.status === 429 || failure.status === 503
              ? "unavailable"
              : undefined;
    if (!cause) return;
    try {
      this.options.onError?.({
        cause,
        status: failure.status,
        code: failure.code,
      });
    } catch {
      /* un callback del host no debe romper la petición */
    }
  }
  private async request<T = void>(
    path: string,
    init: Omit<RequestInit, "body"> & { body?: unknown } = {},
  ): Promise<T> {
    const headers = new Headers(init.headers);
    headers.set("Accept", "application/json");
    // Canal bearer (ADR-031): el host entrega un token vigente por petición; no se cachea ni se persiste y no
    // hay CSRF que enviar porque no viaja ninguna cookie. Sin `getAccessToken` rige el canal de cookie BFF.
    const bearer = Boolean(this.options.getAccessToken);
    if (this.options.getAccessToken) {
      const token = await this.accessToken(this.options.getAccessToken);
      headers.set("Authorization", `Bearer ${token}`);
    } else {
      const csrf = document.cookie
        .split("; ")
        .find((value) => value.startsWith("XSRF-TOKEN="));
      if (csrf && init.method && init.method !== "GET")
        headers.set(
          "X-XSRF-TOKEN",
          decodeURIComponent(csrf.slice("XSRF-TOKEN=".length)),
        );
    }
    if (init.body !== undefined)
      headers.set("Content-Type", "application/json");
    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}${path}`, {
        ...init,
        body: init.body === undefined ? undefined : JSON.stringify(init.body),
        credentials: bearer ? "omit" : "include",
        headers,
      });
    } catch (cause) {
      if (cause instanceof DOMException && cause.name === "AbortError")
        throw cause;
      throw new ApiError(
        0,
        "NETWORK_ERROR",
        "No fue posible conectar con el PDP.",
      );
    }
    if (!response.ok) {
      const error = (await response.json().catch(() => null)) as {
        code?: string;
        detail?: string;
        message?: string;
        errors?: ApiFieldError[];
        fieldErrors?: ApiFieldError[];
      } | null;
      const fallback =
        response.status === 403
          ? forbiddenMessageFor(error?.code)
          : response.status === 404
            ? "El elemento ya no existe o no pertenece a esta aplicación."
            : response.status === 409
              ? "La operación entra en conflicto con el estado actual."
              : response.status === 400
                ? "Revise los datos ingresados."
                : response.status === 429
                  ? "Demasiadas solicitudes. Espere unos segundos e inténtelo de nuevo."
                  : response.status === 503
                    ? "El servicio no está disponible temporalmente. Inténtelo de nuevo en unos segundos."
                    : `El servicio respondió ${response.status}.`;
      const failure = new ApiError(
        response.status,
        error?.code,
        response.status === 403
          ? fallback
          : ((error?.code ? MESSAGES_WITHOUT_IDS[error.code] : undefined) ?? withoutIds(error?.detail ?? error?.message) ?? fallback),
        error?.fieldErrors ?? error?.errors ?? [],
      );
      this.report(failure);
      throw failure;
    }
    if (response.status === 204) return undefined as T;
    return ((await response.json()) as Envelope<T>).data;
  }
}
