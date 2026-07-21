<template>
  <div class="users">
    <h2>Users</h2>
<div v-if="loading">
  <p>loading</p>
</div>
<div v-if="error">
  <p>{{ error }}</p>
<button @click="loadUsers">Retry</button>
</div>
<div v-else-if="userStore.users.length === 0">
     No Users Found.
    </div>
    <div v-else>
      <div
      v-for="user in userStore.users"
      :key="user.id"
      >
      <button @click="openUser(user.id)">
        {{ user.name }}
    </button>
  </div>
</div>
  <hr>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { users, fetchUsers } from './users.service'
import { ref, onMounted } from 'vue'
import { useUserStore } from '../stores/user'

const router = useRouter()
const error = ref('')
const loading = ref(false)
const userStore = useUserStore()

function openUser(id: number) {
  router.push(`/users/${id}`)
}

onMounted(() => {
loadUsers()
})

async function loadUsers() {
  loading.value = true
  error.value = ''

  try {
    await userStore.fetchUsers()
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }}

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