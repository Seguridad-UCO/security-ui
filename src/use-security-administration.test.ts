import { effectScope, ref } from "vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useSecurityAdministration } from "./use-security-administration";

const envelope = (data: unknown) => new Response(JSON.stringify({ data }));
const page = (content: unknown[], current: number, total: number) => ({ content, page: current, offset: current * 20, limit: 20, total });

describe("useSecurityAdministration", () => {
  afterEach(() => vi.unstubAllGlobals());
  it("invalidates only the affected collection and returns from an empty deleted page", async () => {
    const fetch = vi.fn(async (url: string) => {
      if (url.endsWith("/summary")) return envelope({ application: { id: "app", name: "Notas" }, counts: { resources: 1, roles: 7, profiles: 0, administrators: 1, roleAssignments: 0, profileAssignments: 0 } });
      if (url.includes("/security/resources?page=1")) return envelope(page([], 1, 21));
      if (url.includes("/security/resources?page=0")) return envelope(page([{ id: "r1", path: "/notes", method: "GET" }], 0, 1));
      throw new Error(`unexpected ${url}`);
    });
    vi.stubGlobal("fetch", fetch);
    const scope = effectScope();
    const store = scope.run(() => useSecurityAdministration(ref({ applicationId: "app", apiBaseUrl: "https://pdp.test" })))!;
    await store.loadSummary();
    await store.load("resources", 1, true);
    const changed = await store.mutate(async () => undefined, ["resources", "summary"], "resource:r2", true);
    expect(changed).toBe(true);
    expect(store.resources.page).toBe(0);
    expect(store.resources.content).toHaveLength(1);
    const urls = fetch.mock.calls.map(([url]) => String(url));
    expect(urls.some((url) => url.includes("/security/roles"))).toBe(false);
    expect(urls.filter((url) => url.includes("/security/resources?page=0"))).toHaveLength(1);
    scope.stop();
  });
  it("ignores an obsolete page response after fast pagination", async () => {
    let resolveFirst: ((value: Response) => void) | undefined;
    const fetch = vi.fn((url: string) => {
      if (url.endsWith("/summary")) return Promise.resolve(envelope({ application: { id: "app", name: "Notas" }, counts: { resources: 2, roles: 0, profiles: 0, administrators: 1, roleAssignments: 0, profileAssignments: 0 } }));
      if (url.includes("/security/resources?page=0")) return new Promise<Response>((resolve) => { resolveFirst = resolve; });
      return Promise.resolve(envelope(page([{ id: "new", path: "/new", method: "GET" }], 1, 21)));
    });
    vi.stubGlobal("fetch", fetch);
    const scope = effectScope();
    const store = scope.run(() => useSecurityAdministration(ref({ applicationId: "app", apiBaseUrl: "https://pdp.test" })))!;
    await store.loadSummary();
    const first = store.load("resources", 0, true);
    await store.load("resources", 1, true);
    resolveFirst!(envelope(page([{ id: "old", path: "/old", method: "GET" }], 0, 21)));
    await first;
    expect(store.resources.page).toBe(1);
    expect(store.resources.content[0]?.id).toBe("new");
    scope.stop();
  });
  it("keeps only the latest deferred user search", async () => {
    let resolveOld: ((value: Response) => void) | undefined;
    const fetch = vi.fn((url: string) => {
      if (url.endsWith("/summary")) return Promise.resolve(envelope({ application: { id: "app", name: "Notas" }, counts: { resources: 0, roles: 0, profiles: 0, administrators: 1, roleAssignments: 0, profileAssignments: 0 } }));
      if (url.includes("query=ana")) return new Promise<Response>((resolve) => { resolveOld = resolve; });
      return Promise.resolve(envelope(page([{ id: "u2", name: "Bea", email: "bea@example.test" }], 0, 1)));
    });
    vi.stubGlobal("fetch", fetch);
    const scope = effectScope();
    const store = scope.run(() => useSecurityAdministration(ref({ applicationId: "app", apiBaseUrl: "https://pdp.test" })))!;
    await store.loadSummary();
    const old = store.searchUsers("ana");
    await store.searchUsers("bea");
    resolveOld!(envelope(page([{ id: "u1", name: "Ana", email: "ana@example.test" }], 0, 1)));
    await old;
    expect(store.users.content[0]?.id).toBe("u2");
    scope.stop();
  });
});
