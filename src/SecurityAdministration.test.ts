import { afterEach, describe, expect, it, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import SecurityAdministration from "./SecurityAdministration.vue";

const summary = { data: { application: { id: "app", name: "Notas" }, counts: { resources: 1, roles: 0, profiles: 0, administrators: 1, roleAssignments: 0, profileAssignments: 0 } } };
const page = (content: unknown[], page = 0, total = content.length) => ({ data: { content, page, offset: page * 20, limit: 20, total } });

describe("SecurityAdministration", () => {
  afterEach(() => vi.unstubAllGlobals());
  it("loads a collection only after its tab is opened and requires confirmation before deletion", async () => {
    const fetch = vi.fn(async (url: string, init?: RequestInit) => {
      if (url.endsWith("/summary")) return new Response(JSON.stringify(summary));
      if (url.includes("/security/resources")) return new Response(JSON.stringify(page([{ id: "r1", path: "/notes", method: "GET" }])));
      if (url.endsWith("/resources/r1") && init?.method === "DELETE") return new Response(null, { status: 204 });
      throw new Error(`unexpected ${url}`);
    });
    vi.stubGlobal("fetch", fetch);
    const wrapper = mount(SecurityAdministration, { props: { options: { applicationId: "app", apiBaseUrl: "https://pdp.test" } } });
    await flushPromises();
    expect(fetch.mock.calls.some(([url]) => String(url).includes("/resources?"))).toBe(false);
    await wrapper.get("button:nth-child(5)").trigger("click");
    await flushPromises();
    expect(wrapper.text()).toContain("/notes");
    await wrapper.get("button.danger").trigger("click");
    expect(wrapper.text()).toContain("Eliminar este recurso");
    expect(fetch.mock.calls.some(([url, init]) => String(url).endsWith("/resources/r1") && init?.method === "DELETE")).toBe(false);
    await wrapper.get('[data-testid="confirm-danger"]').trigger("click");
    await flushPromises();
    expect(fetch.mock.calls.some(([url, init]) => String(url).endsWith("/resources/r1") && init?.method === "DELETE")).toBe(true);
  });
});
