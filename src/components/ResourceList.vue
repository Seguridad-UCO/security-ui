<script setup lang="ts">
import type { PaginatedState, Resource } from "../types";
import PaginationControls from "./PaginationControls.vue";

defineProps<{ state: PaginatedState<Resource>; busy?: boolean }>();
const emit = defineEmits<{ edit: [item: Resource]; remove: [item: Resource]; previous: []; next: [] }>();
</script>

<template>
  <div class="panel" :aria-busy="state.loading">
    <div v-if="state.loading" class="empty">Actualizando página…</div>
    <p v-if="state.error" class="error">{{ state.error }}</p>
    <div v-for="item in state.content" :key="item.id" class="row">
      <span class="method">{{ item.method }}</span><div class="grow"><strong>{{ item.path }}</strong><small>Recurso protegido</small></div>
      <button class="quiet" :disabled="busy" @click="emit('edit', item)">Editar</button>
      <button class="quiet danger" :disabled="busy" @click="emit('remove', item)">Eliminar</button>
    </div>
    <p v-if="state.loaded && !state.content.length" class="empty">No hay datos en esta página.</p>
  </div>
  <PaginationControls :page="state.page" :limit="state.limit" :total="state.total" :loading="state.loading" @previous="emit('previous')" @next="emit('next')" />
</template>
