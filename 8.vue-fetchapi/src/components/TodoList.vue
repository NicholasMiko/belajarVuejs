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
    <div>
      <TodoItem
        v-for="(todo, index) in props.todos"
        :key="index"
        :todo="todo"
        :index="index"
        @toggle="emit('toggle', todo)"
        @delete="emit('delete', todo)"
      />
    </div>
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
  (emit: 'all'): void
  (emit: 'active'): void
  (emit: 'done'): void
  (emit: 'toggle', todo: Todo): void
  (emit: 'delete', todo: Todo): void
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
  background: orangered ;
  color: white;
}

.activin {
  padding: 8px 16px;
  background: orange;
}

.donin {
  padding: 8px 16px;
  background: yellow;
}
</style>