<template>
  <div class="users">
    <h2>Users</h2>
    <div v-if="loading">
      <div class="spinner"></div>
      <p>loading</p>
    </div>
    <div v-else-if="error">
       <p>{{ error }}</p>
       <button @click="loadUsers">Retry</button>
    </div>
    <div v-else-if="users.length === 0">
      No Users found.
    </div>
    <div v-else>  
    <div
        v-for="user in users"
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
import { fetchUsers, users} from './users'
import { ref, onMounted } from 'vue'

const router = useRouter()
const error = ref('')
const loading = ref(false)


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
    users.value = await fetchUsers()
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