<script setup lang="ts">
import { computed, ref, toRef, watch } from "vue";
import {
  usePaginatedAdministrators,
  usePaginatedProfileAssignments,
  usePaginatedProfiles,
  usePaginatedResources,
  usePaginatedRoleAssignments,
  usePaginatedRoles,
  useSecurityAdministration,
  useSecuritySummary,
  useUserSearch,
} from "./use-security-administration";
import type {
  PaginatedState,
  Profile,
  Resource,
  Role,
  SecurityUiOptions,
} from "./types";
import ConfirmDangerDialog from "./components/ConfirmDangerDialog.vue";
import PaginationControls from "./components/PaginationControls.vue";
import SecuritySummaryPanel from "./components/SecuritySummaryPanel.vue";
import ResourceList from "./components/ResourceList.vue";
import RoleList from "./components/RoleList.vue";
import ProfileList from "./components/ProfileList.vue";
import AdministratorList from "./components/AdministratorList.vue";
import AssignmentList from "./components/AssignmentList.vue";

const props = defineProps<{ options: SecurityUiOptions }>();
const administration = useSecurityAdministration(toRef(props, "options"));
const { summary, loading: summaryLoading } = useSecuritySummary(administration);
const resources = usePaginatedResources(administration),
  roles = usePaginatedRoles(administration),
  profiles = usePaginatedProfiles(administration),
  administrators = usePaginatedAdministrators(administration),
  roleAssignments = usePaginatedRoleAssignments(administration),
  profileAssignments = usePaginatedProfileAssignments(administration);
const { state: users, search: searchUsers } = useUserSearch(administration);
const {
  saving,
  error,
  ready,
  load,
  refresh,
  mutate,
  roleResources,
  profileRoles,
  loadRoleResources,
  loadProfileRoles,
  invalidateRelation,
} = administration;
defineExpose({ refresh });
type Tab = "summary" | "people" | "roles" | "profiles" | "resources" | "admins";
type Dialog =
  | "admin"
  | "resource"
  | "role"
  | "profile"
  | "access"
  | "role-resource"
  | "profile-role"
  | "application"
  | "confirm"
  | null;
type Selected = Role | Profile | Resource;
const activeTab = ref<Tab>("summary"),
  dialog = ref<Dialog>(null),
  selected = ref<Selected>(),
  confirmAction = ref<() => Promise<boolean>>();
const form = ref({
  userId: "",
  userQuery: "",
  description: "",
  baseUrl: "",
  path: "",
  method: "GET",
  name: "",
  targetId: "",
  accessKind: "role" as "role" | "profile",
});
const tabs: Array<{ id: Tab; label: string }> = [
  { id: "summary", label: "Resumen" },
  { id: "people", label: "Personas" },
  { id: "roles", label: "Roles" },
  { id: "profiles", label: "Perfiles" },
  { id: "resources", label: "Recursos" },
  { id: "admins", label: "Administradores" },
];
const titles: Record<Tab, string> = {
  summary: "Resumen de seguridad",
  people: "Personas y asignaciones",
  roles: "Roles de aplicación",
  profiles: "Perfiles de acceso",
  resources: "Recursos protegidos",
  admins: "Administradores",
};
const actions: Record<Tab, string> = {
  summary: "Configurar accesos",
  people: "Asignar acceso",
  roles: "Definir rol",
  profiles: "Definir perfil",
  resources: "Registrar recurso",
  admins: "Agregar administrador",
};
const counts = computed(() => ({
  people:
    (summary.value?.counts.roleAssignments ?? 0) +
    (summary.value?.counts.profileAssignments ?? 0),
  roles: summary.value?.counts.roles ?? 0,
  profiles: summary.value?.counts.profiles ?? 0,
  resources: summary.value?.counts.resources ?? 0,
  admins: summary.value?.counts.administrators ?? 0,
}));
const primaryAction = computed(() =>
  activeTab.value === "summary" &&
  props.options.allowApplicationLifecycleManagement
    ? "Editar aplicación"
    : actions[activeTab.value],
);
const state = computed<PaginatedState<any> | undefined>(
  () =>
    (({ roles, profiles, resources, admins: administrators }) as const)[
      activeTab.value as "roles" | "profiles" | "resources" | "admins"
    ],
);
const theme = computed(() => ({
  "--accent": props.options.theme?.accent ?? "#295181",
  "--font": props.options.theme?.fontFamily ?? "Inter, system-ui, sans-serif",
  "--radius": props.options.theme?.radius ?? "14px",
}));
watch(
  activeTab,
  (tab) => {
    if (tab === "people") {
      void load("roleAssignments");
      void load("profileAssignments");
      return;
    }
    const collection = (
      {
        roles: "roles",
        profiles: "profiles",
        resources: "resources",
        admins: "administrators",
      } as const
    )[tab as "roles" | "profiles" | "resources" | "admins"];
    if (collection) void load(collection);
  },
  { immediate: true },
);
watch(
  () => form.value.accessKind,
  (kind) => {
    if (dialog.value === "access")
      void load(kind === "role" ? "roles" : "profiles");
  },
);
function open(kind?: Dialog, entity?: Selected) {
  dialog.value =
    kind ??
    (activeTab.value === "summary"
      ? props.options.allowApplicationLifecycleManagement
        ? "application"
        : "access"
      : activeTab.value === "people"
        ? "access"
        : activeTab.value === "roles"
          ? "role"
          : activeTab.value === "profiles"
            ? "profile"
            : activeTab.value === "resources"
              ? "resource"
              : "admin");
  selected.value = entity;
  form.value = {
    userId: "",
    userQuery: "",
    description: "",
    baseUrl: "",
    path: "",
    method: "GET",
    name: "",
    targetId: "",
    accessKind: "role",
  };
  if (entity && "path" in entity) {
    form.value.path = entity.path;
    form.value.method = entity.method;
  }
  if (entity && "name" in entity) form.value.name = entity.name;
  if (dialog.value === "application" && summary.value) {
    form.value.name = summary.value.application.name;
    form.value.description = summary.value.application.description ?? "";
    form.value.baseUrl = summary.value.application.baseUrl ?? "";
  }
  if (dialog.value === "admin" || dialog.value === "access")
    void searchUsers("");
  if (dialog.value === "access" || dialog.value === "profile-role")
    void load("roles");
  if (dialog.value === "role-resource") void load("resources");
  if (entity && dialog.value === "role-resource")
    void loadRoleResources(entity.id);
  if (entity && dialog.value === "profile-role")
    void loadProfileRoles(entity.id);
}
function close() {
  dialog.value = null;
  selected.value = undefined;
}
async function submit() {
  const value = form.value,
    kind = dialog.value;
  if (!kind || kind === "confirm") return;
  const editing = Boolean(selected.value);
  const invalidations =
    kind === "application"
      ? (["summary"] as const)
      : kind === "admin"
        ? (["administrators", "summary"] as const)
        : kind === "resource"
          ? (["resources", "summary"] as const)
          : kind === "role"
            ? (["roles", "summary"] as const)
            : kind === "profile"
              ? (["profiles", "summary"] as const)
              : kind === "access"
                ? ([
                    value.accessKind === "role"
                      ? "roleAssignments"
                      : "profileAssignments",
                    "summary",
                  ] as const)
                : kind === "role-resource"
                  ? (["roles"] as const)
                  : (["profiles"] as const);
  const ok = await mutate(
    (api, applicationId) =>
      kind === "application"
        ? api.updateApplication(applicationId, {
            name: value.name,
            description: value.description,
            baseUrl: value.baseUrl,
          })
        : kind === "admin"
          ? api.addAdministrator(applicationId, value.userId)
          : kind === "resource"
            ? editing
              ? api.updateResource(applicationId, selected.value!.id, {
                  path: value.path,
                  method: value.method,
                })
              : api.createResource(applicationId, {
                  path: value.path,
                  method: value.method,
                })
            : kind === "role"
              ? editing
                ? api.updateRole(selected.value!.id, { name: value.name })
                : api.createRole(applicationId, value.name)
              : kind === "profile"
                ? editing
                  ? api.updateProfile(selected.value!.id, { name: value.name })
                  : api.createProfile(applicationId, value.name)
                : kind === "access"
                  ? api.assignAccess(
                      applicationId,
                      value.accessKind,
                      value.targetId,
                      value.userId,
                    )
                  : kind === "role-resource"
                    ? api.linkRoleResource(selected.value!.id, value.targetId)
                    : api.linkProfileRole(selected.value!.id, value.targetId),
    [...invalidations],
    `${kind}:${selected.value?.id ?? value.userId}`,
  );
  if (ok) close();
}
function confirm(text: string, action: () => Promise<boolean>) {
  confirmText.value = text;
  confirmAction.value = action;
  dialog.value = "confirm";
}
const confirmText = ref("");
async function executeConfirm() {
  const action = confirmAction.value;
  if (!action || (await action())) close();
}
function removeAdmin(userId: string) {
  confirm(
    "Retirar este administrador puede dejar la aplicación sin administración. El PDP impedirá retirar el último administrador.",
    async () => {
      return mutate(
        (api, applicationId) => api.removeAdministrator(applicationId, userId),
        ["administrators", "summary"],
        `admin:${userId}`,
        true,
      );
    },
  );
}
function removeResource(id: string) {
  confirm(
    "Eliminar este recurso revoca su protección y puede estar bloqueado si tiene dependencias.",
    async () => {
      return mutate(
        (api, applicationId) => api.deleteResource(applicationId, id),
        ["resources", "summary"],
        `resource:${id}`,
        true,
      );
    },
  );
}
function removeRole(id: string) {
  confirm(
    "Eliminar este rol requiere que no tenga perfiles ni asignaciones dependientes.",
    async () => {
      return mutate(
        (api) => api.deleteRole(id),
        ["roles", "summary"],
        `role:${id}`,
        true,
      );
    },
  );
}
function removeProfile(id: string) {
  confirm(
    "Eliminar este perfil requiere que no tenga asignaciones dependientes.",
    async () => {
      return mutate(
        (api) => api.deleteProfile(id),
        ["profiles", "summary"],
        `profile:${id}`,
        true,
      );
    },
  );
}
function revokeAssignment(item: {
  id: string;
  roleId?: string;
  profileId?: string;
}) {
  confirm(
    "Revocar este acceso retira el permiso vigente del usuario.",
    async () => {
      return mutate(
        (api) =>
          item.roleId
            ? api.revokeRoleAssignment(item.roleId, item.id)
            : api.revokeProfileAssignment(item.profileId!, item.id),
        [item.roleId ? "roleAssignments" : "profileAssignments", "summary"],
        `assignment:${item.id}`,
        true,
      );
    },
  );
}
function unlinkResource(resourceId: string) {
  const roleId = selected.value!.id;
  confirm(
    "Retirar este recurso elimina el permiso que este rol concede sobre él.",
    async () => {
      const ok = await mutate(
        (api) => api.unlinkRoleResource(roleId, resourceId),
        ["roles"],
        `role-resource:${roleId}:${resourceId}`,
      );
      if (ok) {
        invalidateRelation("role-resources", roleId);
        await loadRoleResources(roleId, roleResources.page, true);
        if (roleResources.page > 0 && !roleResources.content.length)
          await loadRoleResources(roleId, roleResources.page - 1, true);
      }
      return ok;
    },
  );
}
function unlinkRole(roleId: string) {
  const profileId = selected.value!.id;
  confirm(
    "Retirar este rol cambia los permisos heredados por este perfil.",
    async () => {
      const ok = await mutate(
        (api) => api.unlinkProfileRole(profileId, roleId),
        ["profiles"],
        `profile-role:${profileId}:${roleId}`,
      );
      if (ok) {
        invalidateRelation("profile-roles", profileId);
        await loadProfileRoles(profileId, profileRoles.page, true);
        if (profileRoles.page > 0 && !profileRoles.content.length)
          await loadProfileRoles(profileId, profileRoles.page - 1, true);
      }
      return ok;
    },
  );
}
function relationPage(direction: -1 | 1) {
  if (!selected.value) return;
  const state = dialog.value === "role-resource" ? roleResources : profileRoles;
  const page = state.page + direction;
  if (page < 0 || page * state.limit >= state.total) return;
  if (dialog.value === "role-resource")
    void loadRoleResources(selected.value.id, page);
  else if (dialog.value === "profile-role")
    void loadProfileRoles(selected.value.id, page);
}
function next() {
  const item = state.value;
  if (item && (item.page + 1) * item.limit < item.total)
    void load(
      (
        {
          roles: "roles",
          profiles: "profiles",
          resources: "resources",
          admins: "administrators",
        } as const
      )[activeTab.value as "roles" | "profiles" | "resources" | "admins"],
      item.page + 1,
    );
}
function previous() {
  const item = state.value;
  if (item && item.page > 0)
    void load(
      (
        {
          roles: "roles",
          profiles: "profiles",
          resources: "resources",
          admins: "administrators",
        } as const
      )[activeTab.value as "roles" | "profiles" | "resources" | "admins"],
      item.page - 1,
    );
}
function assignmentPage(
  kind: "roleAssignments" | "profileAssignments",
  direction: -1 | 1,
) {
  const item =
    kind === "roleAssignments" ? roleAssignments : profileAssignments;
  const page = item.page + direction;
  if (page >= 0 && page * item.limit < item.total) void load(kind, page);
}
function date(value: string) {
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
    new Date(value),
  );
}
</script>

<template>
  <section class="shell" :style="theme" aria-live="polite">
    <header>
      <div>
        <p class="eyebrow">Seguridad · aplicación actual</p>
        <h2>Control de acceso</h2>
        <p>La información y las acciones están acotadas a esta aplicación.</p>
      </div>
      <span class="chip">{{
        summary?.application.name ?? options.applicationName ?? "Cargando"
      }}</span>
    </header>
    <div class="grid">
      <nav aria-label="Secciones de seguridad">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :aria-current="activeTab === tab.id"
          @click="activeTab = tab.id"
        >
          {{ tab.label
          }}<template v-if="tab.id !== 'summary'">
            · {{ counts[tab.id] }}</template
          >
        </button>
      </nav>
      <main>
        <div class="title">
          <div>
            <h3>{{ titles[activeTab] }}</h3>
            <p class="sub">Alcance exclusivo de la aplicación abierta.</p>
          </div>
          <div class="actions">
            <button
              class="quiet"
              :disabled="summaryLoading || saving"
              @click="refresh"
            >
              Actualizar</button
            ><button
              class="primary"
              :disabled="!ready || saving"
              @click="open()"
            >
              {{ primaryAction }}
            </button>
          </div>
        </div>
        <p v-if="error" class="error">{{ error }}</p>
        <SecuritySummaryPanel v-if="activeTab === 'summary'" :summary="summary" :loading="summaryLoading" :assignment-count="counts.people" />
        <template v-else-if="activeTab === 'people'">
          <AssignmentList :state="roleAssignments" kind="role" :busy="saving" @revoke="revokeAssignment" @previous="assignmentPage('roleAssignments', -1)" @next="assignmentPage('roleAssignments', 1)" />
          <AssignmentList :state="profileAssignments" kind="profile" :busy="saving" @revoke="revokeAssignment" @previous="assignmentPage('profileAssignments', -1)" @next="assignmentPage('profileAssignments', 1)" />
        </template>
        <template v-else>
          <ResourceList v-if="activeTab === 'resources'" :state="resources" :busy="saving" @edit="open('resource', $event)" @remove="removeResource($event.id)" @previous="previous" @next="next" />
          <RoleList v-else-if="activeTab === 'roles'" :state="roles" :busy="saving" @manage="open('role-resource', $event)" @edit="open('role', $event)" @remove="removeRole($event.id)" @previous="previous" @next="next" />
          <ProfileList v-else-if="activeTab === 'profiles'" :state="profiles" :busy="saving" @manage="open('profile-role', $event)" @edit="open('profile', $event)" @remove="removeProfile($event.id)" @previous="previous" @next="next" />
          <AdministratorList v-else :state="administrators" :busy="saving" @remove="removeAdmin" @previous="previous" @next="next" />
        </template>
      </main>
    </div>
    <div v-if="dialog" class="backdrop" @click.self="close">
      <form v-if="dialog !== 'confirm'" class="dialog" @submit.prevent="submit">
        <h3>
          {{
            dialog === "role-resource"
              ? "Administrar recursos del rol"
              : dialog === "profile-role"
                ? "Administrar roles del perfil"
                : actions[activeTab]
          }}
        </h3>
        <p class="sub">La acción se aplica solo a esta aplicación.</p>
        <template v-if="dialog === 'admin'">
          <label
            >Buscar usuario<input
              v-model.trim="form.userQuery"
              placeholder="Nombre o correo"
              @input="searchUsers(form.userQuery)"
          /></label>
          <label
            >Usuario<select v-model="form.userId" required>
              <option disabled value="">Seleccione una coincidencia</option>
              <option
                v-for="item in users.content"
                :key="item.id"
                :value="item.id"
              >
                {{ item.name || item.email }} · {{ item.email }}
              </option>
            </select></label
          > </template
        ><template v-else-if="dialog === 'application'"
          ><label>Nombre<input v-model.trim="form.name" required /></label
          ><label>Descripción<textarea v-model.trim="form.description" /></label
          ><label
            >URL base<input
              v-model.trim="form.baseUrl"
              type="url" /></label></template
        ><template v-else-if="dialog === 'resource'"
          ><label
            >Ruta<input
              v-model.trim="form.path"
              placeholder="/api/v1/notas"
              required /></label
          ><label
            >Método<select v-model="form.method">
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </select></label
          ></template
        ><label v-else-if="dialog === 'role' || dialog === 'profile'"
          >Nombre<input v-model.trim="form.name" required /></label
        ><template v-else-if="dialog === 'access'"
          ><label
            >Buscar usuario<input
              v-model.trim="form.userQuery"
              placeholder="Nombre o correo"
              @input="searchUsers(form.userQuery)" /></label
          ><label
            >Usuario<select v-model="form.userId" required>
              <option disabled value="">Seleccione una coincidencia</option>
              <option
                v-for="item in users.content"
                :key="item.id"
                :value="item.id"
              >
                {{ item.name || item.email }} · {{ item.email }}
              </option>
            </select></label
          ><label
            >Tipo<select v-model="form.accessKind">
              <option value="role">Rol</option>
              <option value="profile">Perfil</option>
            </select></label
          ><label
            >Acceso<select v-model="form.targetId" required>
              <option disabled value="">Seleccione un acceso</option>
              <option
                v-for="item in form.accessKind === 'role'
                  ? roles.content
                  : profiles.content"
                :key="item.id"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select></label
          ></template
        ><template v-else
          ><label
            >{{ dialog === "role-resource" ? "Agregar recurso" : "Agregar rol"
            }}<select v-model="form.targetId" required>
              <option disabled value="">Seleccione una opción</option>
              <option
                v-for="item in dialog === 'role-resource'
                  ? resources.content
                  : roles.content"
                :key="item.id"
                :value="item.id"
              >
                {{
                  "path" in item ? `${item.method} · ${item.path}` : item.name
                }}
              </option>
            </select></label
          >
          <div
            class="relation-list"
            :aria-busy="
              dialog === 'role-resource'
                ? roleResources.loading
                : profileRoles.loading
            "
          >
            <p class="sub">Relaciones vigentes</p>
            <div
              v-for="item in dialog === 'role-resource'
                ? roleResources.content
                : profileRoles.content"
              :key="item.id"
              class="row"
            >
              <div class="grow">
                <strong>{{
                  "path" in item ? `${item.method} · ${item.path}` : item.name
                }}</strong>
              </div>
              <button
                class="quiet danger"
                type="button"
                :disabled="saving"
                @click="
                  dialog === 'role-resource'
                    ? unlinkResource(item.id)
                    : unlinkRole(item.id)
                "
              >
                Retirar
              </button>
            </div>
            <p
              v-if="
                !(
                  dialog === 'role-resource'
                    ? roleResources.content
                    : profileRoles.content
                ).length
              "
              class="empty"
            >
              No hay relaciones en esta página.
            </p>
            <PaginationControls
              :page="dialog === 'role-resource' ? roleResources.page : profileRoles.page"
              :limit="dialog === 'role-resource' ? roleResources.limit : profileRoles.limit"
              :total="dialog === 'role-resource' ? roleResources.total : profileRoles.total"
              :loading="dialog === 'role-resource' ? roleResources.loading : profileRoles.loading"
              label="Paginación de relaciones"
              @previous="relationPage(-1)"
              @next="relationPage(1)"
            />
          </div></template
        ><datalist id="security-users">
          <option v-for="item in users.content" :key="item.id" :value="item.id">
            {{ item.name || item.email }}
          </option>
        </datalist>
        <div class="actions bottom">
          <button class="quiet" type="button" :disabled="saving" @click="close">
            Cancelar</button
          ><button class="primary" :disabled="saving">
            {{ saving ? "Guardando…" : "Guardar" }}
          </button>
        </div>
      </form>
      <ConfirmDangerDialog
        v-else
        :open="true"
        :message="confirmText"
        :busy="saving"
        @cancel="close"
        @confirm="executeConfirm"
      />
    </div>
  </section>
</template>
