<template>
  <li :class="{ selesai: props.todo.done, hapus: props.todo.deleted }">
    <input
      type="checkbox"
      :checked="props.todo.done"
      :disabled="props.todo.deleted"
      @change="emit('toggle')"
    />

    <span>
      {{ props.index + 1 }}. {{ props.todo.task }}
    </span>

    <button class="hapusin" @click="emit('delete')">
      Hapus
    </button>
  </li>
</template>

<script setup lang="ts">
interface Todo {
  task: string
  done: boolean
  deleted: boolean
}

const props = defineProps<{
  todo: Todo
  index: number
}>()

const emit = defineEmits<{
  (e: 'toggle'): void
  (e: 'delete'): void
}>()
</script>

<style scoped>
li {
  background: lightgray;
  padding: 20px;
  width: 300px;
  margin: 20px auto;
  border-radius: 15px;

  display: flex;
  align-items: center;
  gap: 12px;
}

.selesai {
  background: lightgreen;
}

.selesai span {
  text-decoration: line-through;
  color: gray;
}

.hapus {
  background: lightcoral;
  color: gray;
  text-decoration: line-through;
}

.hapusin {
  margin-left: auto;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  background: red;
  color: white;
}
</style>