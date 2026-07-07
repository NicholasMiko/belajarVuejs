<template>
  <h1>TO DO LIST</h1>
  <div class="form">
    <input
      type="text"
      v-model="input"
      placeholder="Ketik disini..."
      >
    <button
    class="tambahin" 
    @click="tambah">
      Tambah
    </button>
  </div>

  <ul>
    <li
      v-for="(todo, index) in todos"
      :key="index"
      :class="{
      selesai: todo.done, 
      hapus: todo.deleted
    }"
      >
      <input
       type="checkbox"
       v-model="todo.done"
       :disabled="todo.deleted"
    >
      <span>
        {{ todo.task }}
      </span>
      
      <button
        class="hapusin"
        @click="hapus(index)"
      >
        Hapus
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
  task: string
  done: boolean
  deleted: boolean

}

const input = ref('')
const todos = ref<Todo[]>([])

function tambah() {
  if (input.value.trim() === '') {
    return
  }
 todos.value.push({
  task: input.value,
  done: false,
  deleted: false
})
  input.value = ''
}

function hapus(index: number) {
  todos.value[index].deleted = true

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
</style>
