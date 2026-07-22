<template>
  <button @click="emit('save')">
    Save
  </button>

  <button @click="emit('increase-age')">
    Increase Age
  </button>

  <button @click="emit('increase-id')">
    Increse Id
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'save'): void
  (e: 'increase-age'): void
  (e: 'increase-id'): void
}>()
</script>