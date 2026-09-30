<script setup lang="ts">
import type { Administrator, PaginatedState } from "../types";
import PaginationControls from "./PaginationControls.vue";
defineProps<{ state: PaginatedState<Administrator>; busy?: boolean }>();
const emit = defineEmits<{ remove: [userId: string]; previous: []; next: [] }>();
function date(value: string) { return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(value)); }
</script>
<template>
  <div class="panel" :aria-busy="state.loading"><div v-if="state.loading" class="empty">Actualizando página…</div><p v-if="state.error" class="error">{{ state.error }}</p>
    <div v-for="item in state.content" :key="item.user.id" class="row"><div class="grow"><strong>{{ item.user.name }}</strong><small>{{ item.user.email }}</small><small>Administrador · desde {{ date(item.validFrom) }}</small></div><button class="quiet danger" :disabled="busy" @click="emit('remove', item.user.id)">Retirar</button></div>
    <p v-if="state.loaded && !state.content.length" class="empty">No hay datos en esta página.</p></div>
  <PaginationControls :page="state.page" :limit="state.limit" :total="state.total" :loading="state.loading" @previous="emit('previous')" @next="emit('next')" />
</template>
