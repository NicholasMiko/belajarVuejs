<template>
  <div class="users">
    <h2>Users ({{ totalUsers }})</h2>

    <div v-if="loading">
      <div class="spinner"></div>
      <p>Loading...</p>
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
    <button class="logoutin"
    v-if="authStore.isLoggedIn"
    @click="logout"
    >
      LOGOUT
    </button>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/users'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const loading = ref(false)
const error = ref('')
const userStore = useUserStore()
const { users, totalUsers } = storeToRefs(userStore)

function openUser(id: number) {
  router.push(`/users/${id}`)
}

async function loadUsers() {
  loading.value = true
  error.value = ''

  try {
    await userStore.fetchUsers()
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

function logout(){
  authStore.logout()
router.replace('/login')
}

onMounted(() => {
  loadUsers()
})

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
.logoutin {
  font-weight: bold;
  font-size: 20px;
  color: red;

}
</style>