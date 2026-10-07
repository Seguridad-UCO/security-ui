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
export type UserIdentitySummary = {
    id: string;
    name: string;
    email: string;
};
export type RoleSummary = {
    id: string;
    name: string;
};
export type ProfileSummary = {
    id: string;
    name: string;
};
export type User = UserIdentitySummary;
export type Administrator = {
    user: UserIdentitySummary;
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
    user: UserIdentitySummary;
    role: RoleSummary;
    validFrom: string;
    validUntil?: string | null;
};
export type ProfileAssignment = {
    id: string;
    user: UserIdentitySummary;
    profile: ProfileSummary;
    validFrom: string;
    validUntil?: string | null;
};
export type UserAssignmentsResponse = {
    user: UserIdentitySummary;
    roleAssignments: PageResponse<RoleAssignment>;
    profileAssignments: PageResponse<ProfileAssignment>;
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
