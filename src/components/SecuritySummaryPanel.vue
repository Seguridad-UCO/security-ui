<script setup lang="ts">
import { computed } from "vue";
import type { SecuritySummary } from "../types";
const props = defineProps<{ summary?: SecuritySummary; loading: boolean; assignmentCount: number }>();
// Camino sugerido para empezar. Solo orienta: no cambia ningún flujo ni bloquea nada.
const steps = computed(() => {
  const counts = props.summary?.counts;
  if (!counts) return [];
  return [
    { done: counts.resources > 0, text: "Registra en Recursos las rutas de tu aplicación que quieres proteger." },
    { done: counts.roles > 1, text: "Crea en Roles los grupos de permisos y marca qué recursos concede cada uno." },
    { done: props.assignmentCount > 1, text: "Asigna en Personas el rol (o un perfil) a quien debe usarlo." },
  ];
});
const allDone = computed(() => steps.value.length > 0 && steps.value.every((step) => step.done));
</script>
<template>
  <p v-if="loading" class="empty">Consultando políticas de seguridad…</p>
  <template v-else-if="summary">
    <div class="stats">
      <div v-for="entry in [[summary.counts.administrators, 'administradores'], [assignmentCount, 'asignaciones'], [summary.counts.roles, 'roles'], [summary.counts.resources, 'recursos']]" :key="entry[1]" class="stat"><b>{{ entry[0] }}</b><small>{{ entry[1] }}</small></div>
    </div>
    <div v-if="!allDone" class="next-steps">
      <h4>Cómo empezar</h4>
      <ol>
        <li v-for="step in steps" :key="step.text" :class="{ done: step.done }">{{ step.text }}</li>
      </ol>
    </div>
  </template>
</template>
