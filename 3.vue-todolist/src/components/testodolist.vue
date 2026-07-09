<template>
  <h1>TO DO LIST</h1>

  <div class="form">
    <input
      type="text"
      v-model="input"
      placeholder="Ketik disini..."
    >
    <button class="tambahin" @click="tambah">
      Tambah
    </button>

    <button @click="clear">
      Clear
    </button>
  </div>

  <div>
    <button
      class="allin"
      @click="all"
    >
      All
    </button>

    <button
      class="activin"
      @click="active"
    >
      Active
    </button>

    <button
      class="donin"
      @click="done"
    >
      Done
    </button>
  </div>

  <div>
    <ul>
      <li
        v-for="(todo, index) in filtertodo"
        :key="index"
        :class="{ selesai: todo.done, hapus: todo.deleted }"
      >
        <input
          type="checkbox"
          v-model="todo.done"
          :disabled="todo.deleted"
        >
        <span>
          {{ index + 1 }}, {{ todo.task }}
        </span>

        <button
          class="hapusin"
          @click="hapus(todo)"
        >
          Hapus
        </button>
      </li>
    </ul>
  </div>

  <div v-if="filtertodo.length === 0" style="margin-left: 845px;">{{ popup }}</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Todo {
  task: string
  done: boolean
  deleted: boolean
}

type FilterStatus = 'all' | 'active' | 'done'

const popup = ref('Belum ada Toko')
const input = ref('')
const todos = ref<Todo[]>([])

function tambah() {
  if (input.value.trim() === '') {
    return
  }
  todos.value.push({
    task: input.value,
    done: false,
    deleted: false,
  })
  input.value = ''
}

function hapus(todo: Todo) {
  todo.deleted = true
}

const filter = ref<FilterStatus>('all')

function all() {
  filter.value = 'all'
}
function active() {
  filter.value = 'active'
}
function done() {
  filter.value = 'done'
}

const filtertodo = computed(() => {
  const visible = todos.value

  if (filter.value === 'active') {
    return visible.filter(todo => !todo.done && !todo.deleted)
  }
  if (filter.value === 'done') {
    return visible.filter(todo => todo.done && !todo.deleted)
  }

  return visible
})

const clear = () => {
  todos.value = []
}
</script>

<style scoped>
h1 {
  text-align: center;
}

li {
  background: lightgray;
  padding: 20px;
  width: 300px;
  margin: 20px auto;
  margin-top: 15px;
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
  padding: px 30px;
  border: none;
  border-radius: 100px;
  background: green;
  color: white;
}

.hapusin {
  margin-left: auto;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  background: red;
  color: white;
}

.hapus {
  background: lightcoral;
  color: gray;
  text-decoration: line-through;
}

.allin {
  margin-bottom: 20px;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: blue;
}

.donin {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: yellow;
}

.activin {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: cyan;
}

</style>