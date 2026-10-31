import { createApp, h, shallowRef, type App } from "vue";
import SecurityAdministration from "./SecurityAdministration.vue";
import shadowCss from "./shadow.css?inline";
import type { SecurityUiHandle, SecurityUiOptions } from "./types";
export type {
  SecurityUiHandle,
  SecurityUiOptions,
  SecurityUiError,
  SecurityUiTheme,
} from "./types";

const tag = "uco-security-administration";
const FONT_LINK_ID = "uco-security-fonts";
// Las @font-face no funcionan dentro de un shadow root: la hoja debe estar en el documento. Se agrega una sola vez.
function ensureFonts() {
  if (typeof document === "undefined" || document.getElementById(FONT_LINK_ID)) return;
  const link = document.createElement("link");
  link.id = FONT_LINK_ID;
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap";
  document.head.appendChild(link);
}
export class SecurityAdministrationElement extends HTMLElement {
  private readonly root = this.attachShadow({ mode: "open" });
  private readonly options = shallowRef<SecurityUiOptions>();
  private app?: App;
  private component?: { refresh: () => Promise<void> };
  configure(options: SecurityUiOptions) {
    if (
      (!options.applicationId && !options.applicationName) ||
      !options.apiBaseUrl
    )
      throw new TypeError(
        "applicationId o applicationName y apiBaseUrl son obligatorios.",
      );
    this.options.value = {
      ...options,
      apiBaseUrl: options.apiBaseUrl.replace(/\/$/, ""),
    };
    this.start();
  }
  connectedCallback() {
    this.start();
  }
  disconnectedCallback() {
    /* Explicit unmount owns teardown; hosts may move the element. */
  }
  async refresh() {
    await this.component?.refresh();
  }
  destroy() {
    this.app?.unmount();
    this.app = undefined;
    this.component = undefined;
    this.root.replaceChildren();
  }
  private start() {
    if (this.app || !this.options.value) return;
    if (this.options.value.loadFonts !== false) ensureFonts();
    const style = document.createElement("style");
    style.textContent = shadowCss;
    const point = document.createElement("div");
    this.root.replaceChildren(style, point);
    this.app = createApp({
      setup: () => () =>
        h(SecurityAdministration, {
          options: this.options.value!,
          ref: (value) => {
            this.component = value as unknown as {
              refresh: () => Promise<void>;
            };
          },
        }),
    });
    this.app.mount(point);
  }
}
export function mount(
  container: Element,
  options: SecurityUiOptions,
): SecurityUiHandle {
  if (!(container instanceof HTMLElement))
    throw new TypeError("El contenedor debe ser un HTMLElement.");
  const element = new SecurityAdministrationElement();
  element.configure(options);
  container.replaceChildren(element);
  return {
    element,
    refresh: () => element.refresh(),
    unmount: () => {
      if (element.parentElement === container) container.replaceChildren();
      element.destroy();
    },
  };
}
if (!customElements.get(tag))
  customElements.define(tag, SecurityAdministrationElement);
