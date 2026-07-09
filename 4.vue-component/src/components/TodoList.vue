<template>
  <div class="filter">
    <button class="allin" @click="emit('all')">
      All
    </button>

    <button class="activin" @click="emit('active')">
      Active
    </button>

    <button class="donin" @click="emit('done')">
      Done
    </button>
  </div>

  <ul>
    <TodoItem
      v-for="(todo, index) in props.todos"
      :key="index"
      :todo="todo"
      :index="index"
      @toggle="emit('toggle', todo)"
      @delete="emit('delete', todo)"
    />
  </ul>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue'

interface Todo {
  task: string
  done: boolean
  deleted: boolean
}

const props = defineProps<{
  todos: Todo[]
}>()

const emit = defineEmits<{
  (e: 'all'): void
  (e: 'active'): void
  (e: 'done'): void
  (e: 'toggle', todo: Todo): void
  (e: 'delete', todo: Todo): void
}>()
</script>

<style scoped>
.filter {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.allin {
  padding: 8px 16px;
  background: blue;
  color: white;
}

.activin {
  padding: 8px 16px;
  background: cyan;
}

.donin {
  padding: 8px 16px;
  background: yellow;
}
</style>