<template>
  <div class="login">
    <h2>Login</h2>

    <input
      v-model="username"
      placeholder="Username"
    />

    <input
      v-model="password"
      type="password"
      placeholder="Password"
    />

    <button @click="login">
      Login
    </button>

    <p v-if="error" style="color:red">
      Username atau Password salah!
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const username = ref('')
const password = ref('')
const error = ref(false)

function login() {
  error.value = false

  if (
    username.value === 'admin' &&
    password.value === '123'
  ) {

    authStore.login()

    router.push('/users')

  } else {

    error.value = true

  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 40px auto;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 12px;
  padding: 8px;
}

button {
  padding: 8px 16px;
}
</style>