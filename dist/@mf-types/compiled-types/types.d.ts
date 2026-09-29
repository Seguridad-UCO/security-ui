export type SecurityUiTheme = {
    accent?: string;
    fontFamily?: string;
    radius?: string;
};
/** Stable, framework-neutral public contract for host applications. */
export type SecurityUiOptions = {
    applicationId?: string;
    applicationName?: string;
    apiBaseUrl: string;
    theme?: SecurityUiTheme;
    /** Enables PATCH application metadata; deletion is never rendered. */ allowApplicationLifecycleManagement?: boolean;
};
export type Page = {
    page?: number;
    size?: number;
    offset?: number;
    limit?: number;
};
export type PageResponse<T> = {
    content: T[];
    total: number;
    page: number;
    offset: number;
    limit: number;
};
export type PaginatedState<T> = {
    content: T[];
    total: number;
    page: number;
    limit: number;
    loading: boolean;
    error: string | null;
    loaded: boolean;
    abortController?: AbortController;
};
export type SecuritySummary = {
    application: {
        id: string;
        name: string;
        description?: string | null;
        baseUrl?: string | null;
    };
    counts: {
        resources: number;
        roles: number;
        profiles: number;
        administrators: number;
        roleAssignments: number;
        profileAssignments: number;
    };
};
export type User = {
    id: string;
    name: string;
    email: string;
};
export type Administrator = {
    userId: string;
    validFrom: string;
    validUntil?: string | null;
};
export type Resource = {
    id: string;
    path: string;
    method: string;
    registeredAt?: string;
};
export type Role = {
    id: string;
    name: string;
    resourceCount?: number;
    registeredAt?: string;
};
export type Profile = {
    id: string;
    name: string;
    roleCount?: number;
    registeredAt?: string;
};
export type RoleAssignment = {
    id: string;
    userId: string;
    roleId: string;
    validFrom: string;
    validUntil?: string | null;
};
export type ProfileAssignment = {
    id: string;
    userId: string;
    profileId: string;
    validFrom: string;
    validUntil?: string | null;
};
export type ApiFieldError = {
    field?: string;
    message: string;
    code?: string;
};
export type SecurityUiHandle = {
    element: SecurityAdministrationElement;
    refresh: () => Promise<void>;
    unmount: () => void;
};
export interface SecurityAdministrationElement extends HTMLElement {
    configure(options: SecurityUiOptions): void;
    refresh(): Promise<void>;
}
