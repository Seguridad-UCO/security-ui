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
} from "./types";
type Envelope<T> = { data: T };
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
  private async request<T = void>(
    path: string,
    init: Omit<RequestInit, "body"> & { body?: unknown } = {},
  ): Promise<T> {
    const headers = new Headers(init.headers);
    headers.set("Accept", "application/json");
    const csrf = document.cookie
      .split("; ")
      .find((value) => value.startsWith("XSRF-TOKEN="));
    if (csrf && init.method && init.method !== "GET")
      headers.set(
        "X-XSRF-TOKEN",
        decodeURIComponent(csrf.slice("XSRF-TOKEN=".length)),
      );
    if (init.body !== undefined)
      headers.set("Content-Type", "application/json");
    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}${path}`, {
        ...init,
        body: init.body === undefined ? undefined : JSON.stringify(init.body),
        credentials: "include",
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
          ? "No tiene permisos para administrar la seguridad de esta aplicación."
          : response.status === 404
            ? "El elemento ya no existe o no pertenece a esta aplicación."
            : response.status === 409
              ? "La operación entra en conflicto con el estado actual."
              : response.status === 400
                ? "Revise los datos ingresados."
                : `El servicio respondió ${response.status}.`;
      throw new ApiError(
        response.status,
        error?.code,
        response.status === 403
          ? fallback
          : (error?.detail ?? error?.message ?? fallback),
        error?.fieldErrors ?? error?.errors ?? [],
      );
    }
    if (response.status === 204) return undefined as T;
    return ((await response.json()) as Envelope<T>).data;
  }
}
