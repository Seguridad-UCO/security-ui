import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import AccessAdministrationPanel from "./AccessAdministrationPanel.vue";

const state = <T>(content: T[]) => ({ content, total: content.length, page: 0, limit: 20, loading: false, error: null, loaded: true });

describe("AccessAdministrationPanel", () => {
  it("renders the enriched identity without exposing internal UUIDs", async () => {
    const userId = "d6bca99f-8ea1-4dd6-b1f6-b1e4c72a9d38";
    const wrapper = mount(AccessAdministrationPanel, {
      props: {
        users: state([{ id: userId, name: "Ana Gómez", email: "ana.gomez@uco.edu.co" }]),
        roles: state([{ id: "b3d1f146-4d23-450a-8240-e54ac2f8c161", name: "Editor de notas" }]), profiles: state([]),
        personRoleAssignments: state([{ id: "44fe9363-bd7f-48ad-a5a2-040c3535426b", user: { id: userId, name: "Ana Gómez", email: "ana.gomez@uco.edu.co" }, role: { id: "b3d1f146-4d23-450a-8240-e54ac2f8c161", name: "Editor de notas" }, validFrom: "2026-09-25T00:00:00Z" }]),
        personProfileAssignments: state([]), roleAssignments: state([]), profileAssignments: state([]),
      },
    });
    await wrapper.get('input[placeholder="Nombre o correo"]').setValue("Ana");
    await wrapper.get(".choice").trigger("click");
    expect(wrapper.text()).toContain("Ana Gómez");
    expect(wrapper.text()).toContain("ana.gomez@uco.edu.co");
    expect(wrapper.text()).toContain("Editor de notas");
    expect(wrapper.text()).not.toContain(userId);
    expect(wrapper.text()).not.toContain("44fe9363-bd7f-48ad-a5a2-040c3535426b");
  });
});
