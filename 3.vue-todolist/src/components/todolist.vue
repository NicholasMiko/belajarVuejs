<template>
  <h1>TO DO LIST</h1>
    <input
      type="text"
      v-model="input"
  >
  <button @click="tambah">
    Tambah
  </button>
  <ul>
    <li
      v-for="(todo, index) in todos"
      :key="index"
      :class="{ selesai: todo.done }"
    >
      <input
        type="checkbox"
        v-model="todo.done"
      >
      <span>
        {{ todo.text }}
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
  text: string
  done: boolean
}

const input = ref('')
const todos = ref<Todo[]>([])

function tambah() {
  if (input.value.trim() === '') {
    return
  }
  todos.value.push({
    text: input.value,
    done: false
  })
  input.value = ''
}
</script>

<style scoped>
h1 {
  text-align: center;
}

input[type="text"] {
  display: block;
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid grey;
}

button {
  display: block;
  margin: 20px auto;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  background: green;
  color: white;
}

ul {
  list-style: none;
  padding: 0;
  width: 300px;
  margin: 20px auto;
}

li {
  background: lightgray;
  padding: 20px;
  margin-top: 15px;
  border-radius: 15px;
}
.selesai {
  background: lightgreen;
}
</style>