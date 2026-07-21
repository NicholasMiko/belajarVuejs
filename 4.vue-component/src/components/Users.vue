<template>
  <div class="users">
    <h2>Users</h2>

    <ul>
      <li
        v-for="user in users"
        :key="user.id"
      >
        <button @click="openUser(user.id)">
          {{ user.name }}
        </button>
      </li>
    </ul>

    <hr>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function openUser(id: number) {
  router.push(`/users/${id}`)
}

const users = [
  {
    id: 1,
    name: 'AAA',
    age: 26,
    hobby: 'Futsal'
  },
  {
    id: 2,
    name: 'BBB',
    age: 20,
    hobby: 'Basket'
  },
  {
    id: 3,
    name: 'CCC',
    age: 23,
    hobby: 'Games'
  }
]
</script>

<style scoped>
.users {
  max-width: 600px;
  margin: 40px auto;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 12px 0;
}

button {
  border: none;
  background: none;
  color: royalblue;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  color: crimson;
}
</style>