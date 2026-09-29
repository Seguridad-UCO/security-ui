<script setup lang="ts">
import type { SecuritySummary } from "../types";
defineProps<{ summary?: SecuritySummary; loading: boolean; assignmentCount: number }>();
</script>
<template>
  <p v-if="loading" class="empty">Consultando políticas de seguridad…</p>
  <div v-else-if="summary" class="stats">
    <div v-for="entry in [[summary.counts.administrators, 'administradores'], [assignmentCount, 'asignaciones'], [summary.counts.roles, 'roles'], [summary.counts.resources, 'recursos']]" :key="entry[1]" class="stat"><b>{{ entry[0] }}</b><small>{{ entry[1] }}</small></div>
  </div>
</template>
