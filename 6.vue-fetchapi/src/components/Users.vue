<template>
  <div class="users">
    <h2>Users</h2>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="error">
      <p>{{ error }}</p>
      <button @click="loadUsers">
        Retry
      </button>
    </div>
    <div v-else-if="users.length === 0">
      No users found.
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

    <!-- <RouterView /> -->
    <UserDetail :users="users"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchUsers, type UserResponse } from './users'
import UserDetail from './UserDetail.vue'

const router = useRouter()
const loading = ref(false)
const error = ref('')
const users = ref<UserResponse[]>([])
const controller = new AbortController()


function openUser(id: number) {
  router.push(`/users/${id}`)
}

onMounted(() => {
  console.log('testOnMounted')
  loadUsers()
})

onUnmounted(() => {
  controller.abort()
})

async function loadUsers() {

  loading.value = true
  error.value = ''

  try {

    // test loading state
    await new Promise(resolve =>
      setTimeout(resolve, 1000)
    )

    users.value = await fetchUsers()

  } catch (err: any) {

    if (err.name !== 'AbortError') {
      error.value = err.message
    }

  } finally {

    loading.value = false

  }

}

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