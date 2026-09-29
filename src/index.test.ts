import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { mount } from "./index";

const server = setupServer(
  http.get("https://pdp.test/api/v1/applications/app/security/summary", () =>
    HttpResponse.json({
      data: {
        application: { id: "app", name: "Notas" },
        counts: {
          resources: 0,
          roles: 0,
          profiles: 0,
          administrators: 1,
          roleAssignments: 0,
          profileAssignments: 0,
        },
      },
    }),
  ),
);
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => {
  server.resetHandlers();
  document.body.replaceChildren();
});
afterAll(() => server.close());

describe("public embedding contract", () => {
  it("mounts the custom element in Shadow DOM and unmounts cleanly", async () => {
    const container = document.createElement("div");
    document.body.append(container);
    const handle = mount(container, {
      applicationId: "app",
      apiBaseUrl: "https://pdp.test",
    });
    expect(handle.element.tagName.toLowerCase()).toBe(
      "uco-security-administration",
    );
    expect(handle.element.shadowRoot).not.toBeNull();
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(handle.element.shadowRoot?.textContent).toContain(
      "Control de acceso",
    );
    handle.unmount();
    expect(container.children).toHaveLength(0);
  });
});
