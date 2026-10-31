<script setup lang="ts">
defineProps<{ open: boolean; message: string; busy?: boolean }>();
defineEmits<{ cancel: []; confirm: [] }>();
</script>

<template>
  <div v-if="open" class="backdrop" @click.self="$emit('cancel')">
    <div
      class="dialog"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
    >
      <div class="dialog-head">
        <p class="eyebrow">Acción irreversible</p>
        <h3 id="confirm-title">Confirmar acción destructiva</h3>
      </div>
      <div class="dialog-body">
        <p class="sub">{{ message }}</p>
      </div>
      <div class="actions bottom">
        <button class="quiet" :disabled="busy" @click="$emit('cancel')">
          Cancelar
        </button>
        <button
          data-testid="confirm-danger"
          class="primary danger"
          :disabled="busy"
          @click="$emit('confirm')"
        >
          Confirmar
        </button>
      </div>
    </div>
  </div>
</template>
