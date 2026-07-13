<template>
  <h1>TO DO LIST</h1>

  <TodoInput
    v-model="input"
    @add="tambah"
    @clear="clear"
  />

  <div
  ref="todoContainer"
  class="todo-container"
>
 <BaseCard>
  <TodoList
    :todos="filtertodo"
    @all="all"
    @active="active"
    @done="done"
    @toggle="toggleTodo"
    @delete="openDeleteModal"
  />
</BaseCard>
</div>

  <BaseButton
  variant="danger"
  :person="{ name: 'danger' }"
  @click="clear"
>
 <template #default="{ person }">
test123 {{  person.name }}

 </template> 

</BaseButton>

  <BaseButton
    variant="primary"
    :person="{ name: 'primary' }"
    @click="all"
  />

  <BaseButton
    variant="test"
    :person="{ name: 'test3' }"
    @click="active"
  />

  <BaseModal
  v-if="showDeleteModal"
  @confirm="confirmDelete"
  @cancel="showDeleteModal = false"
>
  <template #header>
    Hapus Todo
  </template>

  <template #default = {confirmationText}>
    <p>Yakin ingin menghapus "{{ todoToDelete?.task }}"?</p>
    <p>Kamu mengetik: <strong>{{ confirmationText }}</strong></p>
  </template>
</BaseModal>

  <div
    v-if="filtertodo.length === 0"
    style="margin-left:850px"
  >
    {{ popup }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUpdated } from 'vue'

import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import BaseButton from './components/BaseButton.vue'
import BaseModal from './components/BaseModal.vue'
import BaseCard from './components/BaseCard.vue'

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

const showDeleteModal = ref(false)

const todoToDelete = ref<Todo | null>(null)

const todoContainer = ref<HTMLElement | null>(null)


onUpdated(() => {
  console.log('test')
  if (todoContainer.value) {
    todoContainer.value.scrollTop =
      todoContainer.value.scrollHeight
  }
})

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

function toggleTodo(todo: Todo) {
  todo.done = !todo.done
}

function openDeleteModal(todo: Todo) {
  todoToDelete.value = todo
  showDeleteModal.value = true
}

function confirmDelete() {
  if (!todoToDelete.value) return

  todoToDelete.value.deleted = true

  showDeleteModal.value = false
  todoToDelete.value = null
}

const filtertodo = computed(() => {
  if (filter.value === 'active') {
    return todos.value.filter(todo => !todo.done && !todo.deleted)
  }

  if (filter.value === 'done') {
    return todos.value.filter(todo => todo.done && !todo.deleted)
  }

  return todos.value.filter(todo => !todo.deleted)
})
</script>

<style scoped>
h1 {
  text-align: center;
}
.todo-container {
  max-height: 500px;
  overflow-y: auto;
}

</style>