<template>
  <input
    v-model="inputin"
    @input="sendName"
    type="text"
    placeholder="Masukkan nama"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputin = ref('')

const emit = defineEmits<{
  (e: 'change-name', value: string): void
}>()

function sendName() {
  emit('change-name', inputin.value)
}
</script>