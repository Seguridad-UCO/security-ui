import { afterEach, describe, expect, it, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import SecurityAdministration from "./SecurityAdministration.vue";

const summary = { data: { application: { id: "app", name: "Notas" }, counts: { resources: 1, roles: 0, profiles: 0, administrators: 1, roleAssignments: 0, profileAssignments: 0 } } };
const page = (content: unknown[], page = 0, total = content.length) => ({ data: { content, page, offset: page * 20, limit: 20, total } });

describe("SecurityAdministration", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });
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

  it("lists people alphabetically as soon as the dialog opens, filters from the first letter and keeps the selected identity out of technical text", async () => {
    vi.useFakeTimers();
    const userId = "9c7f6d4c-6431-4f39-9ab3-0b2440f9a1e1";
    const fetch = vi.fn(async (url: string) => {
      if (url.endsWith("/summary")) return new Response(JSON.stringify(summary));
      if (url.includes("/security/roles")) return new Response(JSON.stringify(page([])));
      if (url.includes("/security/profiles")) return new Response(JSON.stringify(page([])));
      if (url.includes("/security/users?query=ana") || url.includes("/security/users?query=a&"))
        return new Response(JSON.stringify(page([{ id: userId, name: "Ana Gómez", email: "ana@uco.edu.co" }])));
      if (url.includes("/security/users?query=&")) return new Response(JSON.stringify(page([{ id: "u0", name: "Aldo Ruiz", email: "aldo@uco.edu.co" }, { id: userId, name: "Ana Gómez", email: "ana@uco.edu.co" }])));
      throw new Error(`unexpected ${url}`);
    });
    vi.stubGlobal("fetch", fetch);
    const wrapper = mount(SecurityAdministration, { props: { options: { applicationId: "app", apiBaseUrl: "https://pdp.test" } } });
    await flushPromises();
    await wrapper.get("button.primary").trigger("click");
    await flushPromises();

    // Sin escribir nada ya hay una lista (el servidor la entrega ordenada por nombre).
    expect(wrapper.findAll(".user-result").map((item) => item.text())).toEqual([expect.stringContaining("Aldo Ruiz"), expect.stringContaining("Ana Gómez")]);
    expect(wrapper.text()).toContain("Escriba para filtrar");

    // Filtra desde la primera letra, con una breve espera.
    const search = wrapper.get('input[placeholder="Nombre o correo"]');
    await search.setValue("a");
    await vi.advanceTimersByTimeAsync(200);
    await flushPromises();
    expect(fetch.mock.calls.some(([url]) => String(url).includes("/security/users?query=a&"))).toBe(true);

    await search.setValue("ana");
    await vi.advanceTimersByTimeAsync(200);
    await flushPromises();
    expect(wrapper.text()).toContain("Ana Gómez");
    expect(wrapper.text()).toContain("ana@uco.edu.co");
    expect(wrapper.text()).not.toContain(userId);

    await wrapper.get(".user-result").trigger("click");
    expect(wrapper.text()).toContain("Persona seleccionada");
    expect(wrapper.text()).toContain("Ana Gómez");
    vi.useRealTimers();
  });
});
