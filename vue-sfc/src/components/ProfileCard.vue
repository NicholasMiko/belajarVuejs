<template>
  <div class="profile-card">
    <div class="avatar">
      {{ nama.charAt(0) }}
    </div>
    <h1>{{ nama }}</h1>
    <h2>ID: {{ id }}</h2>
    <p>{{ date }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const nama = ref('Budi')
const id = ref('001')
const date = ref('2026')
</script>

<style scoped>
.profile-card {
  display : flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: sans-serif;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: lightseagreen;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 12px;
}
</style>