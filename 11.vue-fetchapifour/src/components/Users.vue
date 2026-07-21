<template>
  <div class="users">
    <h2>Users</h2>
<div v-if="loading" class="loadingclass">
<div class="spinner"></div>
    <p>Loading</p>
</div>
<div v-else-if="error">
<p>{{ error }}</p>
<button @click="loadUsers">
  Retry
</button>
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

    <!-- <UserDetail :users="users"/> -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { fetchUsers, users } from './users'

const router = useRouter()
const loading = ref(false)
const error= ref('')

function openUser(id: number) {
  router.push(`/users/${id}`)
}

async function loadUsers() {
  loading.value = true
  error.value = ''

  try {
    users.value = await fetchUsers()
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }

  }


onMounted(() => {
  loadUsers()
}
)


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
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ddd;
  border-top: 4px solid royalblue;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>