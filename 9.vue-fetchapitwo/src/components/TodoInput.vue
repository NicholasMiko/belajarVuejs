]<template>
  <div class="form">
   <input
  type="text"
  v-model="_model"
  placeholder="Ketik disini..."
/>

    <button class="tambahin" @click="emit('add')">
      Tambah
    </button>

    <button @click="emit('clear')">
      Clear
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const _model = ref<string>()

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (emit: 'update:modelValue', value: string | undefined): void
  (emit: 'add'): void
  (emit: 'clear'): void
}>()

watch(() => _model.value, () => {
  updateModel();
})

const updateModel = () => {
  emit('update:modelValue', _model.value)
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
}

input[type="text"] {
  width: 250px;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid grey;
}

.tambahin {
  border: none;
  border-radius: 100px;
  background: green;
  color: white;
  padding: 10px 20px;
}
</style>