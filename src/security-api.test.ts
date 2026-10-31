import { afterEach, describe, expect, it, vi } from "vitest";
import { ApiError, SecurityApi } from "./security-api";

const options = { applicationId: "app id", apiBaseUrl: "https://pdp.test/" };
describe("SecurityApi", () => {
  afterEach(() => vi.unstubAllGlobals());
  const browser = () => vi.stubGlobal("document", { cookie: "" });
  it("uses the exact encoded PATCH resource URL, JSON and CSRF", async () => {
    browser();
    (document as { cookie: string }).cookie = "XSRF-TOKEN=csrf%20value";
    const fetch = vi
      .fn()
      .mockResolvedValue(
        new Response(JSON.stringify({ data: {} }), { status: 200 }),
      );
    vi.stubGlobal("fetch", fetch);
    await new SecurityApi(options).updateResource("app id", "resource/id", {
      path: "/notes",
      method: "PATCH",
    });
    expect(fetch).toHaveBeenCalledWith(
      "https://pdp.test/api/v1/applications/app%20id/resources/resource%2Fid",
      expect.objectContaining({ method: "PATCH", credentials: "include" }),
    );
    const init = fetch.mock.calls[0][1];
    expect(init.headers.get("X-XSRF-TOKEN")).toBe("csrf value");
    expect(init.body).toBe('{"path":"/notes","method":"PATCH"}');
  });
  it("shows the name of what each identifier in a server message refers to, and omits unknown ones", async () => {
    browser();
    const user = "54cc7a8f-419f-4bce-8053-7867000ab1d3", role = "5141683b-3c07-4b62-9cd4-11b8b5f1f4ab";
    const unknown = "11111111-2222-4333-8444-555555555555";
    const fetch = vi
      .fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ data: { content: [{ id: user, name: "Ana Pérez", email: "ana@example.test" }, { id: role, name: "Editor" }] } }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ code: "ASSIGNMENT_ALREADY_ACTIVE", detail: `El usuario ${user} ya tiene una asignación activa del rol ${role} en la aplicación ${unknown}` }), { status: 409 }));
    vi.stubGlobal("fetch", fetch);
    const api = new SecurityApi(options);
    await api.searchUsers("app", "ana", { page: 0, size: 20 });
    const failure = await api.deleteRole("role").catch((cause: ApiError) => cause);
    expect(failure).toMatchObject({ status: 409, code: "ASSIGNMENT_ALREADY_ACTIVE" });
    expect((failure as ApiError).message).toBe("El usuario Ana Pérez ya tiene una asignación activa del rol Editor en la aplicación");
  });
  it("tells the host when the bearer token it just handed over is about to expire, without breaking the request", async () => {
    browser();
    const exp = Math.floor(Date.now() / 1000) + 30;
    const token = `h.${btoa(JSON.stringify({ exp })).replace(/=+$/, "")}.s`;
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ data: { content: [], total: 0, page: 0, offset: 0, limit: 20 } }), { status: 200 })));
    const onSessionExpiring = vi.fn(() => { throw new Error("falla del host"); });
    const onExpiring = vi.fn();
    const api = new SecurityApi({ ...options, getAccessToken: () => token, onSessionExpiring, sessionWarningSeconds: 60 }, { onExpiring });
    await expect(api.getRoles("app", { page: 0, size: 20 })).resolves.toBeTruthy();
    expect(onSessionExpiring).toHaveBeenCalledTimes(1);
    expect(onSessionExpiring.mock.calls[0]).toEqual([{ secondsLeft: expect.any(Number) }]);
    expect(onExpiring).toHaveBeenCalledWith(exp * 1000);
    api.dispose();
  });
  it("explains the protected ADMIN role without identifiers", async () => {
    browser();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ code: "PROTECTED_ROLE", detail: "No se puede modificar el rol protegido ADMIN 5141683b-3c07-4b62-9cd4-11b8b5f1f4ab" }), { status: 409 })));
    const failure = await new SecurityApi(options).deleteRole("role").catch((cause: ApiError) => cause);
    expect((failure as ApiError).message).toBe("El rol ADMIN administra la aplicación y no se puede modificar ni eliminar.");
  });
  it("omits identifiers of entities it has never seen", async () => {
    browser();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ code: "ROLE_NOT_FOUND", detail: "No existe el rol 5141683b-3c07-4b62-9cd4-aaaaaaaaaaaa para este inquilino" }), { status: 404 })));
    const failure = await new SecurityApi(options).deleteRole("role").catch((cause: ApiError) => cause);
    expect((failure as ApiError).message).toBe("No existe el rol para este inquilino");
  });
  it("maps a PDP conflict without masking its business message", async () => {
    browser();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            code: "ROLE_HAS_ASSIGNMENTS",
            message: "El rol tiene asignaciones",
          }),
          { status: 409 },
        ),
      ),
    );
    await expect(
      new SecurityApi(options).deleteRole("role"),
    ).rejects.toMatchObject({
      status: 409,
      code: "ROLE_HAS_ASSIGNMENTS",
      message: "El rol tiene asignaciones",
    } satisfies Partial<ApiError>);
  });
  it("classifies access denial and validation errors from the PDP", async () => {
    browser();
    const fetch = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ message: "ignored" }), { status: 403 }),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            code: "INVALID_PATH",
            message: "La ruta no es válida",
            fieldErrors: [{ field: "path", message: "Debe comenzar con /" }],
          }),
          { status: 400 },
        ),
      );
    vi.stubGlobal("fetch", fetch);
    await expect(
      new SecurityApi(options).deleteResource("app", "resource"),
    ).rejects.toMatchObject({
      status: 403,
      message:
        "No tiene permisos para administrar la seguridad de esta aplicación.",
    } satisfies Partial<ApiError>);
    await expect(
      new SecurityApi(options).updateResource("app", "resource", {
        path: "bad",
      }),
    ).rejects.toMatchObject({
      status: 400,
      code: "INVALID_PATH",
      fields: [{ field: "path", message: "Debe comenzar con /" }],
    } satisfies Partial<ApiError>);
  });
  it("explains a 403 by its code without echoing the PDP body", async () => {
    browser();
    const forbidden = (code: string) =>
      new Response(JSON.stringify({ code, detail: "texto interno" }), {
        status: 403,
      });
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValueOnce(forbidden("MFA_REQUIRED"))
        .mockResolvedValueOnce(
          forbidden("NOT_AUTHORIZED_TO_ADMINISTER_TENANT_CATALOG"),
        ),
    );
    await expect(
      new SecurityApi(options).deleteRole("role"),
    ).rejects.toMatchObject({
      status: 403,
      code: "MFA_REQUIRED",
      message:
        "Esta operación requiere verificación en dos pasos. Vuelva a autenticarse con su segundo factor e inténtelo de nuevo.",
    } satisfies Partial<ApiError>);
    await expect(
      new SecurityApi(options).deleteRole("role"),
    ).rejects.toMatchObject({
      status: 403,
      code: "NOT_AUTHORIZED_TO_ADMINISTER_TENANT_CATALOG",
      message:
        "Para definir o modificar roles y perfiles de todo el inquilino debe administrar al menos una aplicación.",
    } satisfies Partial<ApiError>);
  });
  describe("bearer channel (ADR-031)", () => {
    it("sends a fresh bearer on every request and no cookie or CSRF", async () => {
      browser();
      (document as { cookie: string }).cookie = "XSRF-TOKEN=csrf";
      const fetch = vi
        .fn()
        .mockImplementation(
          async () => new Response(null, { status: 204 }),
        );
      vi.stubGlobal("fetch", fetch);
      const getAccessToken = vi
        .fn()
        .mockResolvedValueOnce("token-1")
        .mockResolvedValueOnce("token-2");
      const api = new SecurityApi({ ...options, getAccessToken });
      await api.deleteRole("role");
      await api.deleteRole("role");
      expect(getAccessToken).toHaveBeenCalledTimes(2);
      const [first, second] = fetch.mock.calls.map(([, init]) => init);
      expect(first.headers.get("Authorization")).toBe("Bearer token-1");
      expect(second.headers.get("Authorization")).toBe("Bearer token-2");
      expect(first.credentials).toBe("omit");
      expect(first.headers.get("X-XSRF-TOKEN")).toBeNull();
    });
    it("keeps the cookie channel when the host gives no token function", async () => {
      browser();
      const fetch = vi
        .fn()
        .mockResolvedValue(new Response(null, { status: 204 }));
      vi.stubGlobal("fetch", fetch);
      await new SecurityApi(options).deleteRole("role");
      const init = fetch.mock.calls[0][1];
      expect(init.credentials).toBe("include");
      expect(init.headers.get("Authorization")).toBeNull();
    });
    it("reports unauthenticated and never retries when the PDP answers 401", async () => {
      browser();
      const fetch = vi
        .fn()
        .mockResolvedValue(new Response("{}", { status: 401 }));
      vi.stubGlobal("fetch", fetch);
      const onError = vi.fn();
      await expect(
        new SecurityApi({
          ...options,
          getAccessToken: () => "t",
          onError,
        }).deleteRole("role"),
      ).rejects.toMatchObject({ status: 401 });
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(onError).toHaveBeenCalledWith({
        cause: "unauthenticated",
        status: 401,
        code: undefined,
      });
    });
    it("does not call the PDP when the host cannot provide a token", async () => {
      browser();
      const fetch = vi.fn();
      vi.stubGlobal("fetch", fetch);
      const onError = vi.fn();
      await expect(
        new SecurityApi({
          ...options,
          getAccessToken: () => Promise.reject(new Error("expired")),
          onError,
        }).deleteRole("role"),
      ).rejects.toMatchObject({ status: 401, code: "UNAUTHENTICATED" });
      expect(fetch).not.toHaveBeenCalled();
      expect(onError).toHaveBeenCalledWith(
        expect.objectContaining({ cause: "unauthenticated" }),
      );
    });
    it.each([
      [403, "MFA_REQUIRED", "mfa_required"],
      [403, "NOT_AUTHORIZED_TO_ADMINISTER", "forbidden"],
      [429, undefined, "unavailable"],
      [503, "BFF_SESSION_UNAVAILABLE", "unavailable"],
    ])("classifies %s %s as %s for the host", async (status, code, cause) => {
      browser();
      vi.stubGlobal(
        "fetch",
        vi
          .fn()
          .mockResolvedValue(new Response(JSON.stringify({ code }), { status })),
      );
      const onError = vi.fn();
      await expect(
        new SecurityApi({
          ...options,
          getAccessToken: () => "t",
          onError,
        }).deleteRole("role"),
      ).rejects.toMatchObject({ status });
      expect(onError).toHaveBeenCalledWith({ cause, status, code });
    });
    it("does not let a failing host callback mask the API error", async () => {
      browser();
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue(new Response("{}", { status: 503 })),
      );
      await expect(
        new SecurityApi({
          ...options,
          getAccessToken: () => "t",
          onError: () => {
            throw new Error("host bug");
          },
        }).deleteRole("role"),
      ).rejects.toMatchObject({ status: 503 });
    });
  });
  it("does not attach an AbortSignal to mutations", async () => {
    browser();
    const fetch = vi
      .fn()
      .mockResolvedValue(new Response(null, { status: 204 }));
    vi.stubGlobal("fetch", fetch);
    await new SecurityApi(options).revokeRoleAssignment("role", "assignment");
    expect(fetch.mock.calls[0][1].signal).toBeUndefined();
  });
  it("identifies a network failure separately from PDP validation", async () => {
    browser();
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("offline")));
    await expect(
      new SecurityApi(options).deleteProfile("profile"),
    ).rejects.toMatchObject({
      status: 0,
      code: "NETWORK_ERROR",
    } satisfies Partial<ApiError>);
  });
  it("reports an unavailable PDP as retryable, not as an expired session", async () => {
    browser();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(null, { status: 503, headers: { "Retry-After": "5" } }),
      ),
    );
    await expect(
      new SecurityApi(options).deleteProfile("profile"),
    ).rejects.toMatchObject({
      status: 503,
      message: expect.stringContaining("no está disponible temporalmente"),
    } satisfies Partial<ApiError>);
  });
  it("uses the application-scoped paged relation URLs", async () => {
    browser();
    const fetch = vi.fn().mockImplementation(() =>
      Promise.resolve(
        new Response(
          JSON.stringify({
            data: { content: [], total: 0, page: 0, offset: 0, limit: 20 },
          }),
          { status: 200 },
        ),
      ),
    );
    vi.stubGlobal("fetch", fetch);
    const api = new SecurityApi(options);
    await api.getRoleResources("app", "role/id", { page: 2, size: 10 });
    await api.getProfileRoles("app", "profile/id", { page: 1, size: 20 });
    expect(fetch.mock.calls[0][0]).toBe(
      "https://pdp.test/api/v1/applications/app/security/roles/role%2Fid/resources?page=2&size=10",
    );
    expect(fetch.mock.calls[1][0]).toBe(
      "https://pdp.test/api/v1/applications/app/security/profiles/profile%2Fid/roles?page=1&size=20",
    );
  });
  it("uses scoped assignment-detail routes and preserves enriched identities", async () => {
    browser();
    const payload = { data: {
      user: { id: "internal-user", name: "Ana Gómez", email: "ana@uco.edu.co" },
      roleAssignments: { content: [{ id: "assignment", user: { id: "internal-user", name: "Ana Gómez", email: "ana@uco.edu.co" }, role: { id: "role", name: "Editor" }, validFrom: "2026-09-25T00:00:00Z" }], total: 1, page: 0, offset: 0, limit: 20 },
      profileAssignments: { content: [], total: 0, page: 0, offset: 0, limit: 20 },
    } };
    const fetch = vi.fn().mockImplementation(() => Promise.resolve(new Response(JSON.stringify(payload), { status: 200 })));
    vi.stubGlobal("fetch", fetch);
    const api = new SecurityApi(options);
    const detail = await api.getUserAssignments("app", "internal/user", { page: 0, size: 20 });
    await api.getAssignmentsForRole("app", "role/id", { page: 0, size: 20 });
    await api.getAssignmentsForProfile("app", "profile/id", { page: 0, size: 20 });
    expect(detail.roleAssignments.content[0]?.user).toMatchObject({ name: "Ana Gómez", email: "ana@uco.edu.co" });
    expect(fetch.mock.calls.map(([url]) => url)).toEqual([
      "https://pdp.test/api/v1/applications/app/security/users/internal%2Fuser/assignments?page=0&size=20",
      "https://pdp.test/api/v1/applications/app/security/roles/role%2Fid/assignments?page=0&size=20",
      "https://pdp.test/api/v1/applications/app/security/profiles/profile%2Fid/assignments?page=0&size=20",
    ]);
  });
  it("only uses the explicit application PATCH route for lifecycle metadata", async () => {
    browser();
    const fetch = vi
      .fn()
      .mockResolvedValue(
        new Response(JSON.stringify({ data: {} }), { status: 200 }),
      );
    vi.stubGlobal("fetch", fetch);
    await new SecurityApi(options).updateApplication("app/id", {
      name: "Notas",
      description: "Académica",
      baseUrl: "https://notas.test",
    });
    expect(fetch).toHaveBeenCalledWith(
      "https://pdp.test/api/v1/applications/app%2Fid",
      expect.objectContaining({
        method: "PATCH",
        body: '{"name":"Notas","description":"Académica","baseUrl":"https://notas.test"}',
      }),
    );
  });
  it("builds every destructive role, profile and assignment route exactly", async () => {
    browser();
    const fetch = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
    vi.stubGlobal("fetch", fetch);
    const api = new SecurityApi(options);
    await api.unlinkRoleResource("role/id", "resource/id");
    await api.unlinkProfileRole("profile/id", "role/id");
    await api.revokeRoleAssignment("role/id", "assignment/id");
    await api.revokeProfileAssignment("profile/id", "assignment/id");
    await api.deleteResource("app/id", "resource/id");
    await api.updateRole("role/id", { name: "Operador" });
    await api.updateProfile("profile/id", { name: "Docente" });
    expect(fetch.mock.calls.map(([url, init]) => [url, init.method, init.body])).toEqual([
      ["https://pdp.test/api/v1/roles/role%2Fid/resources/resource%2Fid", "DELETE", undefined],
      ["https://pdp.test/api/v1/profiles/profile%2Fid/roles/role%2Fid", "DELETE", undefined],
      ["https://pdp.test/api/v1/roles/role%2Fid/assignments/assignment%2Fid", "DELETE", undefined],
      ["https://pdp.test/api/v1/profiles/profile%2Fid/assignments/assignment%2Fid", "DELETE", undefined],
      ["https://pdp.test/api/v1/applications/app%2Fid/resources/resource%2Fid", "DELETE", undefined],
      ["https://pdp.test/api/v1/roles/role%2Fid", "PATCH", '{"name":"Operador"}'],
      ["https://pdp.test/api/v1/profiles/profile%2Fid", "PATCH", '{"name":"Docente"}'],
    ]);
  });
  it("builds creation, association and administrator payloads without component-owned paths", async () => {
    browser();
    const fetch = vi.fn().mockImplementation(() =>
      Promise.resolve(new Response(JSON.stringify({ data: {} }), { status: 200 })),
    );
    vi.stubGlobal("fetch", fetch);
    const api = new SecurityApi(options);
    await api.addAdministrator("app/id", "user/id");
    await api.removeAdministrator("app/id", "user/id");
    await api.createResource("app/id", { path: "/notes", method: "GET" });
    await api.createRole("app/id", "Editor");
    await api.createProfile("app/id", "Docentes");
    await api.assignAccess("app/id", "role", "role/id", "user/id");
    await api.assignAccess("app/id", "profile", "profile/id", "user/id");
    await api.linkRoleResource("role/id", "resource/id");
    await api.linkProfileRole("profile/id", "role/id");
    expect(fetch.mock.calls.map(([url, init]) => [url, init.method, init.body])).toEqual([
      ["https://pdp.test/api/v1/applications/app%2Fid/administrators", "POST", '{"userId":"user/id"}'],
      ["https://pdp.test/api/v1/applications/app%2Fid/administrators/user%2Fid", "DELETE", undefined],
      ["https://pdp.test/api/v1/applications/app%2Fid/resources", "POST", '{"path":"/notes","method":"GET"}'],
      ["https://pdp.test/api/v1/roles", "POST", '{"name":"Editor","scope":"APPLICATION","applicationId":"app/id"}'],
      ["https://pdp.test/api/v1/profiles", "POST", '{"name":"Docentes","scope":"APPLICATION","applicationId":"app/id"}'],
      ["https://pdp.test/api/v1/roles/role%2Fid/assignments", "POST", '{"userId":"user/id","applicationId":"app/id"}'],
      ["https://pdp.test/api/v1/profiles/profile%2Fid/assignments", "POST", '{"userId":"user/id","applicationId":"app/id"}'],
      ["https://pdp.test/api/v1/roles/role%2Fid/resources", "POST", '{"resourceId":"resource/id"}'],
      ["https://pdp.test/api/v1/profiles/profile%2Fid/roles", "POST", '{"roleId":"role/id"}'],
    ]);
  });
});
