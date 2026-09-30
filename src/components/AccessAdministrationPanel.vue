<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { PaginatedState, Profile, ProfileAssignment, Role, RoleAssignment, User } from "../types";
import PaginationControls from "./PaginationControls.vue";

type Assignment = RoleAssignment | ProfileAssignment;
type View = "person" | "role" | "profile";
const props = defineProps<{
  users: PaginatedState<User>; roles: PaginatedState<Role>; profiles: PaginatedState<Profile>;
  personRoleAssignments: PaginatedState<RoleAssignment>; personProfileAssignments: PaginatedState<ProfileAssignment>; roleAssignments: PaginatedState<RoleAssignment>; profileAssignments: PaginatedState<ProfileAssignment>; busy?: boolean;
}>();
const emit = defineEmits<{
  searchUsers: [query: string]; selectPerson: [user: User]; selectRole: [role: Role]; selectProfile: [profile: Profile];
  personPage: [direction: -1 | 1]; rolePage: [direction: -1 | 1]; profilePage: [direction: -1 | 1]; revoke: [item: Assignment];
}>();
const view = ref<View>("person"), query = ref(""), selectedPerson = ref<User>(), selectedRole = ref<Role>(), selectedProfile = ref<Profile>();
watch(query, value => emit("searchUsers", value));
const current = computed<PaginatedState<Assignment>>(() => view.value === "role" ? props.roleAssignments : props.profileAssignments);
function choosePerson(user: User) { selectedPerson.value = user; emit("selectPerson", user); }
function chooseRole(role: Role) { selectedRole.value = role; emit("selectRole", role); }
function chooseProfile(profile: Profile) { selectedProfile.value = profile; emit("selectProfile", profile); }
function access(item: Assignment) { return "role" in item ? `Rol · ${item.role.name}` : `Perfil · ${item.profile.name}`; }
function date(value: string) { return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(value)); }
function page(direction: -1 | 1) { if (view.value === "person") emit("personPage", direction); else if (view.value === "role") emit("rolePage", direction); else emit("profilePage", direction); }
</script>

<template>
  <section class="access-workbench" aria-label="Administración de personas y accesos">
    <header class="access-heading">
      <div><p class="kicker">Consultar y ajustar</p><h4>Personas y accesos</h4><p>Encuentre una relación vigente y actúe desde el mismo lugar.</p></div>
      <span class="scope-mark">Aplicación actual</span>
    </header>
    <div class="perspective-tabs" role="tablist" aria-label="Perspectiva de consulta">
      <button v-for="item in [{ id: 'person', label: 'Por persona', hint: 'Ver sus accesos' }, { id: 'role', label: 'Por rol', hint: 'Ver quién lo tiene' }, { id: 'profile', label: 'Por perfil', hint: 'Ver quién lo tiene' }]" :key="item.id" type="button" role="tab" :aria-selected="view === item.id" :class="{ active: view === item.id }" @click="view = item.id as View"><strong>{{ item.label }}</strong><small>{{ item.hint }}</small></button>
    </div>

    <div class="access-layout">
      <aside class="access-query">
        <template v-if="view === 'person'">
          <label for="person-search">Buscar una persona</label>
          <div class="search-field"><span aria-hidden="true">⌕</span><input id="person-search" v-model.trim="query" autocomplete="off" placeholder="Nombre o correo" /></div>
          <p class="query-help">Los resultados pertenecen al tenant actual.</p>
          <div v-if="query" class="choices" aria-label="Resultados de personas">
            <button v-for="user in users.content" :key="user.id" type="button" class="choice" :class="{ selected: selectedPerson?.id === user.id }" @click="choosePerson(user)"><span class="avatar">{{ user.name.slice(0, 1) }}</span><span><strong>{{ user.name }}</strong><small>{{ user.email }}</small></span></button>
            <p v-if="users.loaded && !users.content.length" class="empty compact">No se encontraron personas.</p>
          </div>
        </template>
        <template v-else-if="view === 'role'">
          <p class="query-label">Elija un rol</p><p class="query-help">Muestra únicamente roles de esta aplicación.</p>
          <div class="option-grid"><button v-for="role in roles.content" :key="role.id" type="button" :class="{ selected: selectedRole?.id === role.id }" @click="chooseRole(role)">{{ role.name }}</button><p v-if="roles.loaded && !roles.content.length" class="empty compact">No hay roles disponibles.</p></div>
        </template>
        <template v-else>
          <p class="query-label">Elija un perfil</p><p class="query-help">Muestra únicamente perfiles de esta aplicación.</p>
          <div class="option-grid"><button v-for="profile in profiles.content" :key="profile.id" type="button" :class="{ selected: selectedProfile?.id === profile.id }" @click="chooseProfile(profile)">{{ profile.name }}</button><p v-if="profiles.loaded && !profiles.content.length" class="empty compact">No hay perfiles disponibles.</p></div>
        </template>
      </aside>

      <div class="access-results">
        <div v-if="view === 'person' && !selectedPerson" class="empty-state"><span aria-hidden="true">⌁</span><strong>Seleccione una persona</strong><p>Busque por nombre o correo para consultar sus accesos vigentes.</p></div>
        <template v-else-if="view === 'person' && selectedPerson">
          <div class="identity-strip"><span class="avatar large">{{ selectedPerson.name.slice(0, 1) }}</span><div><strong>{{ selectedPerson.name }}</strong><small>{{ selectedPerson.email }}</small></div><span v-if="personRoleAssignments.content.some(item => item.role.name === 'ADMIN')" class="admin-mark">Administra esta aplicación</span></div>
          <p v-if="personRoleAssignments.error || personProfileAssignments.error" class="error">{{ personRoleAssignments.error || personProfileAssignments.error }}</p>
          <section class="access-group"><div class="group-title"><span>Roles vigentes</span><b>{{ personRoleAssignments.total }}</b></div><div v-for="item in personRoleAssignments.content" :key="item.id" class="access-row"><div><strong>{{ item.role.name }}</strong><small>Vigente desde {{ date(item.validFrom) }}</small></div><button class="quiet danger" :disabled="busy" @click="emit('revoke', item)">Revocar</button></div><p v-if="personRoleAssignments.loaded && !personRoleAssignments.content.length" class="empty compact">Esta persona no tiene roles asignados.</p></section>
          <section class="access-group"><div class="group-title"><span>Perfiles vigentes</span><b>{{ personProfileAssignments.total }}</b></div><div v-for="item in personProfileAssignments.content" :key="item.id" class="access-row"><div><strong>{{ item.profile.name }}</strong><small>Vigente desde {{ date(item.validFrom) }}</small></div><button class="quiet danger" :disabled="busy" @click="emit('revoke', item)">Revocar</button></div><p v-if="personProfileAssignments.loaded && !personProfileAssignments.content.length" class="empty compact">Esta persona no tiene perfiles asignados.</p></section>
          <PaginationControls :page="personRoleAssignments.page" :limit="personRoleAssignments.limit" :total="Math.max(personRoleAssignments.total, personProfileAssignments.total)" :loading="personRoleAssignments.loading" label="Paginación de accesos de la persona" @previous="page(-1)" @next="page(1)" />
        </template>
        <template v-else-if="(view === 'role' && selectedRole) || (view === 'profile' && selectedProfile)">
          <div class="result-title"><div><p class="kicker">Personas con acceso</p><h5>{{ selectedRole?.name ?? selectedProfile?.name }}</h5></div><span class="count-badge">{{ current.total }}</span></div>
          <p v-if="current.error" class="error">{{ current.error }}</p>
          <div v-for="item in current.content" :key="item.id" class="access-row person-row"><span class="avatar">{{ item.user.name.slice(0, 1) }}</span><div><strong>{{ item.user.name }}</strong><small>{{ item.user.email }}</small><small class="access-meta">{{ access(item) }} · desde {{ date(item.validFrom) }}<template v-if="item.validUntil"> hasta {{ date(item.validUntil) }}</template></small></div><button class="quiet danger" :disabled="busy" @click="emit('revoke', item)">Revocar</button></div>
          <p v-if="current.loaded && !current.content.length" class="empty compact">{{ view === 'role' ? 'No hay personas con este rol.' : 'No hay personas con este perfil.' }}</p>
          <PaginationControls :page="current.page" :limit="current.limit" :total="current.total" :loading="current.loading" label="Paginación de accesos" @previous="page(-1)" @next="page(1)" />
        </template>
        <div v-else class="empty-state"><span aria-hidden="true">⌁</span><strong>Seleccione un {{ view === 'role' ? 'rol' : 'perfil' }}</strong><p>Las personas con ese acceso aparecerán aquí.</p></div>
      </div>
    </div>
  </section>
</template>
