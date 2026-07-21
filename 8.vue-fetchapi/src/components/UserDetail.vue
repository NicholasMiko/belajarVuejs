<template>
  <div class="user-detail">
    <h2>User Detail</h2>
    <button @click="back">
      Back
    </button>
    <div v-if="user">
    <p><strong>ID:</strong> {{ user.id }}</p>
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Username:</strong> {{ user.username }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
    <div v-else>
      <p>User tidak ditemukan.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Prop, PropType } from 'vue'
import type { UserResponse } from './users'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  users: {
    required: true,
    type: Object as PropType<UserResponse[]>
}
  
})
function back() {
  router.back()
}

const user = computed(() => {
  return props.users.find(
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