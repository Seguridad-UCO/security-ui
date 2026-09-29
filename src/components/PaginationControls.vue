<script setup lang="ts">
defineProps<{
  page: number;
  limit: number;
  total: number;
  loading?: boolean;
  label?: string;
}>();
defineEmits<{ previous: []; next: [] }>();
</script>

<template>
  <div v-if="total > limit" class="pager" :aria-label="label ?? 'Paginación'">
    <button
      class="quiet"
      :disabled="page === 0 || loading"
      @click="$emit('previous')"
    >
      Anterior
    </button>
    <span>Página {{ page + 1 }} de {{ Math.ceil(total / limit) }}</span>
    <button
      class="quiet"
      :disabled="(page + 1) * limit >= total || loading"
      @click="$emit('next')"
    >
      Siguiente
    </button>
  </div>
</template>
