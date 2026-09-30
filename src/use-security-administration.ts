import { computed, onScopeDispose, reactive, ref, watch, type Ref } from "vue";
import { SecurityApi } from "./security-api";
import type {
  Administrator,
  PageResponse,
  PaginatedState,
  Profile,
  ProfileAssignment,
  Resource,
  Role,
  RoleAssignment,
  SecuritySummary,
  SecurityUiOptions,
  User,
} from "./types";

type Collection =
  | "resources"
  | "roles"
  | "profiles"
  | "administrators"
  | "roleAssignments"
  | "profileAssignments";
type Loader<T> = (
  api: SecurityApi,
  applicationId: string,
  page: number,
  limit: number,
  signal: AbortSignal,
) => Promise<PageResponse<T>>;
const EMPTY = <T>(): PaginatedState<T> => ({
  content: [],
  total: 0,
  page: 0,
  limit: 20,
  loading: false,
  error: null,
  loaded: false,
});

/** Application-scoped, independently cached collections. The browser never filters global catalogs. */
export function useSecurityAdministration(options: Ref<SecurityUiOptions>) {
  const applicationId = ref("");
  const summary = ref<SecuritySummary>();
  const summaryLoading = ref(false);
  const error = ref("");
  const saving = ref(false);
  const mutations = reactive(new Set<string>());
  const resources = reactive(EMPTY<Resource>()),
    roles = reactive(EMPTY<Role>()),
    profiles = reactive(EMPTY<Profile>()),
    administrators = reactive(EMPTY<Administrator>()),
    roleAssignments = reactive(EMPTY<RoleAssignment>()),
    profileAssignments = reactive(EMPTY<ProfileAssignment>()),
    users = reactive(EMPTY<User>());
  const roleResources = reactive(EMPTY<Resource>()),
    profileRoles = reactive(EMPTY<Role>()),
    userAssignments = reactive(EMPTY<RoleAssignment | ProfileAssignment>()),
    userRoleAssignments = reactive(EMPTY<RoleAssignment>()),
    userProfileAssignments = reactive(EMPTY<ProfileAssignment>()),
    assignmentsForRole = reactive(EMPTY<RoleAssignment>()),
    assignmentsForProfile = reactive(EMPTY<ProfileAssignment>());
  const cache = new Map<string, PageResponse<unknown>>();
  let summaryController: AbortController | undefined;
  const api = computed(() => new SecurityApi(options.value));
  const ready = computed(() => Boolean(summary.value) && !summaryLoading.value);
  const loaders: Record<Collection, Loader<any>> = {
    resources: (client, id, page, limit, signal) =>
      client.getResources(id, { page, size: limit }, signal),
    roles: (client, id, page, limit, signal) =>
      client.getRoles(id, { page, size: limit }, signal),
    profiles: (client, id, page, limit, signal) =>
      client.getProfiles(id, { page, size: limit }, signal),
    administrators: (client, id, page, limit, signal) =>
      client.getAdministrators(id, { page, size: limit }, signal),
    roleAssignments: (client, id, page, limit, signal) =>
      client.getRoleAssignments(id, { page, size: limit }, signal),
    profileAssignments: (client, id, page, limit, signal) =>
      client.getProfileAssignments(id, { page, size: limit }, signal),
  };
  const states: Record<Collection, PaginatedState<any>> = {
    resources,
    roles,
    profiles,
    administrators,
    roleAssignments,
    profileAssignments,
  };
  const key = (kind: string, page: number, limit: number) =>
    `${applicationId.value}:${kind}:${page}:${limit}`;
  function reset() {
    cache.clear();
    summary.value = undefined;
    for (const state of Object.values(states))
      Object.assign(state, EMPTY(), { limit: state.limit });
    Object.assign(users, EMPTY<User>());
    Object.assign(roleResources, EMPTY<Resource>());
    Object.assign(profileRoles, EMPTY<Role>());
    Object.assign(userAssignments, EMPTY<RoleAssignment | ProfileAssignment>());
    Object.assign(userRoleAssignments, EMPTY<RoleAssignment>());
    Object.assign(userProfileAssignments, EMPTY<ProfileAssignment>());
    Object.assign(assignmentsForRole, EMPTY<RoleAssignment>());
    Object.assign(assignmentsForProfile, EMPTY<ProfileAssignment>());
  }
  async function loadSummary() {
    summaryController?.abort();
    summaryController = new AbortController();
    summaryLoading.value = true;
    error.value = "";
    try {
      const id = await api.value.resolveApplicationId(summaryController.signal);
      applicationId.value = id;
      summary.value = await api.value.getSummary(id, summaryController.signal);
    } catch (cause) {
      if (!aborted(cause)) error.value = message(cause);
    } finally {
      summaryLoading.value = false;
    }
  }
  async function load(
    kind: Collection,
    page = states[kind].page,
    force = false,
  ) {
    if (!applicationId.value) return;
    const state = states[kind];
    const cacheKey = key(kind, page, state.limit);
    state.abortController?.abort();
    state.error = null;
    const cached =
      !force && (cache.get(cacheKey) as PageResponse<any> | undefined);
    if (cached) {
      apply(state, cached);
      return;
    }
    const controller = new AbortController();
    state.abortController = controller;
    state.loading = true;
    try {
      const response = await loaders[kind](
        api.value,
        applicationId.value,
        page,
        state.limit,
        controller.signal,
      );
      if (state.abortController !== controller) return;
      cache.set(cacheKey, response as unknown as PageResponse<unknown>);
      apply(state, response);
    } catch (cause) {
      if (!aborted(cause) && state.abortController === controller)
        state.error = message(cause);
    } finally {
      if (state.abortController === controller) state.loading = false;
    }
  }
  async function searchUsers(query: string, page = 0) {
    if (!applicationId.value || !query.trim()) {
      Object.assign(users, EMPTY<User>());
      return;
    }
    users.abortController?.abort();
    const controller = new AbortController();
    users.abortController = controller;
    users.loading = true;
    users.error = null;
    try {
      const response = await api.value.searchUsers(
        applicationId.value,
        query.trim(),
        { page, size: users.limit },
        controller.signal,
      );
      if (users.abortController !== controller) return;
      apply(users, response);
    } catch (cause) {
      if (!aborted(cause)) users.error = message(cause);
    } finally {
      if (users.abortController === controller) users.loading = false;
    }
  }
  async function loadRoleResources(
    roleId: string,
    page = roleResources.page,
    force = false,
  ) {
    return loadRelation(
      "role-resources",
      roleId,
      roleResources,
      (signal) =>
        api.value.getRoleResources(
          applicationId.value,
          roleId,
          { page, size: roleResources.limit },
          signal,
        ),
      page,
      force,
    );
  }
  async function loadProfileRoles(
    profileId: string,
    page = profileRoles.page,
    force = false,
  ) {
    return loadRelation(
      "profile-roles",
      profileId,
      profileRoles,
      (signal) =>
        api.value.getProfileRoles(
          applicationId.value,
          profileId,
          { page, size: profileRoles.limit },
          signal,
        ),
      page,
      force,
    );
  }
  async function loadUserAssignments(userId: string, page = userRoleAssignments.page, force = false) {
    if (!applicationId.value) return;
    const cacheKey = `${applicationId.value}:${userId}:user-assignments:${page}:${userRoleAssignments.limit}`;
    userRoleAssignments.abortController?.abort();
    const cached = !force ? cache.get(cacheKey) as { roleAssignments: PageResponse<RoleAssignment>; profileAssignments: PageResponse<ProfileAssignment> } | undefined : undefined;
    if (cached) { apply(userRoleAssignments, cached.roleAssignments); apply(userProfileAssignments, cached.profileAssignments); return; }
    const controller = new AbortController();
    userRoleAssignments.abortController = controller; userProfileAssignments.abortController = controller;
    userRoleAssignments.loading = userProfileAssignments.loading = true;
    try {
      const response = await api.value.getUserAssignments(applicationId.value, userId, { page, size: userRoleAssignments.limit }, controller.signal);
      if (userRoleAssignments.abortController !== controller) return;
      cache.set(cacheKey, response as unknown as PageResponse<unknown>);
      apply(userRoleAssignments, response.roleAssignments); apply(userProfileAssignments, response.profileAssignments);
    } catch (cause) { if (!aborted(cause)) { const detail = message(cause); userRoleAssignments.error = userProfileAssignments.error = detail; } }
    finally { if (userRoleAssignments.abortController === controller) userRoleAssignments.loading = userProfileAssignments.loading = false; }
  }
  async function loadAssignmentsForRole(roleId: string, page = assignmentsForRole.page, force = false) {
    return loadRelation("role-assignments", roleId, assignmentsForRole, (signal) =>
      api.value.getAssignmentsForRole(applicationId.value, roleId, { page, size: assignmentsForRole.limit }, signal), page, force);
  }
  async function loadAssignmentsForProfile(profileId: string, page = assignmentsForProfile.page, force = false) {
    return loadRelation("profile-assignments", profileId, assignmentsForProfile, (signal) =>
      api.value.getAssignmentsForProfile(applicationId.value, profileId, { page, size: assignmentsForProfile.limit }, signal), page, force);
  }
  async function loadRelation<T>(
    kind: string,
    entityId: string,
    state: PaginatedState<T>,
    request: (signal: AbortSignal) => Promise<PageResponse<T>>,
    page: number,
    force: boolean,
  ) {
    if (!applicationId.value) return;
    const cacheKey = `${applicationId.value}:${entityId}:${kind}:${page}:${state.limit}`;
    state.abortController?.abort();
    state.error = null;
    const cached = !force
      ? (cache.get(cacheKey) as PageResponse<T> | undefined)
      : undefined;
    if (cached) {
      apply(state, cached);
      return;
    }
    const controller = new AbortController();
    state.abortController = controller;
    state.loading = true;
    try {
      const response = await request(controller.signal);
      if (state.abortController !== controller) return;
      cache.set(cacheKey, response);
      apply(state, response);
    } catch (cause) {
      if (!aborted(cause) && state.abortController === controller)
        state.error = message(cause);
    } finally {
      if (state.abortController === controller) state.loading = false;
    }
  }
  function invalidate(...kinds: Array<Collection | "summary">) {
    for (const kind of kinds) {
      if (kind === "summary") {
        summary.value = undefined;
        continue;
      }
      for (const cacheKey of cache.keys())
        if (cacheKey.startsWith(`${applicationId.value}:${kind}:`))
          cache.delete(cacheKey);
      states[kind].loaded = false;
    }
  }
  function invalidateRelation(
    kind: "role-resources" | "profile-roles",
    entityId: string,
  ) {
    for (const cacheKey of cache.keys())
      if (cacheKey.startsWith(`${applicationId.value}:${entityId}:${kind}:`))
        cache.delete(cacheKey);
  }
  async function refresh() {
    reset();
    await loadSummary();
  }
  function isMutating(key?: string) {
    return key ? mutations.has(key) : mutations.size > 0;
  }
  async function mutate(
    action: (client: SecurityApi, id: string) => Promise<unknown>,
    invalidateKinds: Array<Collection | "summary">,
    mutationKey = "global",
    moveBackIfEmpty = false,
  ) {
    if (!applicationId.value || mutations.has(mutationKey)) return false;
    mutations.add(mutationKey);
    saving.value = true;
    error.value = "";
    try {
      // Mutations deliberately receive no AbortSignal: once started they must reach the PDP.
      await action(api.value, applicationId.value);
      invalidate(...invalidateKinds);
      const collections = invalidateKinds.filter(
        (kind): kind is Collection => kind !== "summary",
      );
      await Promise.all(
        collections.map((kind) => load(kind, states[kind].page, true)),
      );
      if (moveBackIfEmpty)
        await Promise.all(
          collections
            .filter(
              (kind) =>
                states[kind].page > 0 && states[kind].content.length === 0,
            )
            .map((kind) => load(kind, states[kind].page - 1, true)),
        );
      if (invalidateKinds.includes("summary")) await loadSummary();
      return true;
    } catch (cause) {
      error.value = message(cause);
      return false;
    } finally {
      mutations.delete(mutationKey);
      saving.value = mutations.size > 0;
    }
  }
  watch(
    options,
    () => {
      reset();
      void loadSummary();
    },
    { immediate: true, deep: true },
  );
  onScopeDispose(() => {
    summaryController?.abort();
    for (const state of Object.values(states)) state.abortController?.abort();
    users.abortController?.abort();
    roleResources.abortController?.abort();
    profileRoles.abortController?.abort();
    userAssignments.abortController?.abort();
    userRoleAssignments.abortController?.abort();
    userProfileAssignments.abortController?.abort();
    assignmentsForRole.abortController?.abort();
    assignmentsForProfile.abortController?.abort();
  });
  return {
    applicationId,
    summary,
    summaryLoading,
    loading: summaryLoading,
    saving,
    mutations,
    isMutating,
    error,
    ready,
    resources,
    roles,
    profiles,
    administrators,
    roleAssignments,
    profileAssignments,
    roleResources,
    profileRoles,
    userAssignments,
    userRoleAssignments,
    userProfileAssignments,
    assignmentsForRole,
    assignmentsForProfile,
    users,
    load,
    loadSummary,
    loadRoleResources,
    loadProfileRoles,
    loadUserAssignments,
    loadAssignmentsForRole,
    loadAssignmentsForProfile,
    searchUsers,
    refresh,
    mutate,
    invalidate,
    invalidateRelation,
  };
}

/** Named collection composables keep templates and future feature slices independent. */
export type SecurityAdministrationStore = ReturnType<
  typeof useSecurityAdministration
>;
export function useSecuritySummary(store: SecurityAdministrationStore) {
  return {
    summary: store.summary,
    loading: store.summaryLoading,
    load: store.loadSummary,
  };
}
export function usePaginatedResources(store: SecurityAdministrationStore) {
  return store.resources;
}
export function usePaginatedRoles(store: SecurityAdministrationStore) {
  return store.roles;
}
export function usePaginatedProfiles(store: SecurityAdministrationStore) {
  return store.profiles;
}
export function usePaginatedAdministrators(store: SecurityAdministrationStore) {
  return store.administrators;
}
export function usePaginatedRoleAssignments(
  store: SecurityAdministrationStore,
) {
  return store.roleAssignments;
}
export function usePaginatedProfileAssignments(
  store: SecurityAdministrationStore,
) {
  return store.profileAssignments;
}
export function useUserSearch(store: SecurityAdministrationStore) {
  return { state: store.users, search: store.searchUsers };
}
function apply<T>(state: PaginatedState<T>, response: PageResponse<T>) {
  state.content = response.content;
  state.total = response.total;
  state.page = response.page;
  state.limit = response.limit;
  state.loaded = true;
}
function aborted(cause: unknown) {
  return cause instanceof DOMException && cause.name === "AbortError";
}
function message(cause: unknown) {
  return cause instanceof Error
    ? cause.message
    : "No fue posible cargar la seguridad.";
}
