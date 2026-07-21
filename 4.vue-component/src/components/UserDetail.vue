<template>
  <div class="user-detail">
    <h2>User Detail</h2>

    <button @click="back">
      Back
    </button>

    <div v-if="user">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Age:</strong> {{ user.age }}</p>
      <p><strong>Hobby:</strong> {{ user.hobby }}</p>
    </div>

    <div v-else>
      <p>User tidak ditemukan.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function back() {
  router.back()
}

const users = [
  {
    id: 1,
    name: 'AAA',
    age: 26,
    hobby: 'Soccer'
  },
  {
    id: 2,
    name: 'BBB',
    age: 20,
    hobby: 'Basketball'
  },
  {
    id: 3,
    name: 'CCC',
    age: 23,
    hobby: 'Swimming'
  }
]

const user = computed(() => {
  return users.find(
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