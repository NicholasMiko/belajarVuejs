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

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
const nama: Ref<string> = ref('Budi')
const id: Ref<string> = ref('001')
const date: Ref<string> = ref('2026')
</script>


//Ko Kevin sorry, ini ku coba menggunakan fitur CSS yang ini masih dibantu AI. Tetapi sudah Ku coba pelajari:
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