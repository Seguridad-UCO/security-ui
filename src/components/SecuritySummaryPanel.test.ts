import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SecuritySummaryPanel from "./SecuritySummaryPanel.vue";

const summary = (resources: number, roles: number) =>
  ({ application: { id: "a", name: "Notas" }, counts: { resources, roles, profiles: 0, administrators: 1, roleAssignments: 1, profileAssignments: 0 } }) as never;

describe("SecuritySummaryPanel", () => {
  it("guides a brand-new application (only the ADMIN role and its administrator)", () => {
    const wrapper = mount(SecuritySummaryPanel, { props: { summary: summary(0, 1), loading: false, assignmentCount: 1 } });
    expect(wrapper.text()).toContain("Cómo empezar");
    expect(wrapper.findAll(".next-steps li.done")).toHaveLength(0);
  });
  it("marks finished steps and hides the guide once everything is configured", () => {
    const partial = mount(SecuritySummaryPanel, { props: { summary: summary(3, 1), loading: false, assignmentCount: 1 } });
    expect(partial.findAll(".next-steps li.done")).toHaveLength(1);
    const full = mount(SecuritySummaryPanel, { props: { summary: summary(3, 2), loading: false, assignmentCount: 2 } });
    expect(full.text()).not.toContain("Cómo empezar");
  });
});
