<template>
  <h1>TO DO LIST</h1>

  <TodoInput
    :input="input"
    @update-input="input = $event"
    @add="tambah"
    @clear="clear"
  />

  <TodoList
    :todos="filtertodo"
    @all="all"
    @active="active"
    @done="done"
    @toggle="toggleTodo"
    @delete="hapus"
  />

  <div
    v-if="filtertodo.length === 0"
    style="margin-left:850px"
  >
   {{ popup }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

interface Todo {
  task: string
  done: boolean
  deleted: boolean
}

type FilterStatus = 'all' | 'active' | 'done'

const popup = ref('Belum ada Todo')

const input = ref('')

const todos = ref<Todo[]>([])

const filter = ref<FilterStatus>('all')

function tambah() {
  if (input.value.trim() === '') return

  todos.value.push({
    task: input.value,
    done: false,
    deleted: false
  })

  input.value = ''
}

function clear() {
  todos.value = []
}

function all() {
  filter.value = 'all'
}

function active() {
  filter.value = 'active'
}

function done() {
  filter.value = 'done'
}

function hapus(todo: Todo) {
  todo.deleted = true
}

function toggleTodo(todo: Todo) {
  todo.done = !todo.done
}

const filtertodo = computed(() => {
  if (filter.value === 'active') {
    return todos.value.filter(todo => !todo.done && !todo.deleted)
  }

  if (filter.value === 'done') {
    return todos.value.filter(todo => todo.done && !todo.deleted)
  }

  return todos.value
})
</script>

<style scoped>
h1{
  text-align:center;
}
</style>