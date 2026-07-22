<template>
  <div class="user-detail">
    <h2>User Detail</h2>

    <button @click="back">
      Back
    </button>

    <div v-if="user">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Age:</strong> {{ user.email }}</p>
      <p><strong>Hobby:</strong> {{ user.username }}</p>
    </div>

    <div v-else>
      <p>User tidak ditemukan.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/users'

const route = useRoute()
const router = useRouter()

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

function back() {
  router.replace('/users')
}
const user = computed(() => {
  return users.value.find(
    u => u.id === Number(route.params.id)
  )
})
</script>

<style scoped>
.user-detail {
  max-width: 600px;
  margin: 40px auto;
}

button {
  margin-bottom: 20px;
}

p {
  margin: 10px 0;
}
</style>