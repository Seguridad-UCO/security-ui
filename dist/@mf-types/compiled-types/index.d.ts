import type { SecurityUiHandle, SecurityUiOptions } from "./types";
export type { SecurityUiHandle, SecurityUiOptions, SecurityUiTheme, } from "./types";
export declare class SecurityAdministrationElement extends HTMLElement {
    private readonly root;
    private readonly options;
    private app?;
    private component?;
    configure(options: SecurityUiOptions): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    refresh(): Promise<void>;
    destroy(): void;
    private start;
}
export declare function mount(container: Element, options: SecurityUiOptions): SecurityUiHandle;
