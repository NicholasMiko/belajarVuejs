]<template>
  <div class="form">
    <input
      type="text"
      :value="props.input"
      @input="updateInput"
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
const props = defineProps<{
  input: string
}>()

const emit = defineEmits<{
  (emit: 'update-input', value: string): void
  (emit: 'add'): void
  (emit: 'clear'): void
}>()

function updateInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update-input', target.value)
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