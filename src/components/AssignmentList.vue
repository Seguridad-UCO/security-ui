<script setup lang="ts">
import type { PaginatedState, ProfileAssignment, RoleAssignment } from "../types";
import PaginationControls from "./PaginationControls.vue";

type Assignment = RoleAssignment | ProfileAssignment;
const props = defineProps<{ state: PaginatedState<Assignment>; kind: "role" | "profile"; busy?: boolean }>();
const emit = defineEmits<{ revoke: [item: Assignment]; previous: []; next: [] }>();
function date(value: string) { return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(value)); }
</script>

<template>
  <section class="panel" :aria-busy="state.loading" :aria-label="`Asignaciones de ${kind === 'role' ? 'roles' : 'perfiles'}`">
    <p v-if="state.loading" class="empty">Actualizando asignaciones…</p>
    <p v-if="state.error" class="error">{{ state.error }}</p>
    <div v-for="item in state.content" :key="item.id" class="row">
      <div class="grow"><strong>Usuario asignado</strong><small>Acceso por {{ kind === "role" ? "rol" : "perfil" }} · desde {{ date(item.validFrom) }}</small></div>
      <span class="pill">Vigente</span><button class="quiet danger" :disabled="busy" @click="emit('revoke', item)">Revocar</button>
    </div>
    <p v-if="state.loaded && !state.content.length" class="empty">No hay asignaciones vigentes.</p>
  </section>
  <PaginationControls :page="state.page" :limit="state.limit" :total="state.total" :loading="state.loading" :label="`Paginación de asignaciones de ${kind === 'role' ? 'roles' : 'perfiles'}`" @previous="emit('previous')" @next="emit('next')" />
</template>
