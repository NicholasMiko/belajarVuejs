<template>
  <h1>TO DO LIST</h1>
  <div class="form">
    <input
      type="text"
      v-model="input"
      placeholder="Ketik disini..."
  >
  <button @click="tambah">
    Tambah
  </button>
  </div>
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
/* Ko, ini dipisahin bungkus span nya dengan yg atas ya.
kalau digabung hijau nya tidak full 1 bubble*/
.selesai span{
  
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

button {
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  background: green;
  color: white;
}
</style>