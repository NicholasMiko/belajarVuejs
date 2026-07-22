<template>
  <div>
    <UserInput
      @change-name="updateInput"
    />

    <UserButton
      @save="saveName"
      @increase-age="increaseAge"
      @increase-id="increaseId"
    />

    <hr>

    <h2>Age: {{ user.age }}</h2>
    <h2>Name: {{ user.name }}</h2>
    <h2>Id: {{ user.id }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import UserInput from './UserInput.vue'
import UserButton from './UserButton.vue'

interface UserResponse {
  name: string
  age: number
  id: number
}

const user = ref<UserResponse>({
  name: 'test',
  age: 20,
  id: 1
})

const inputName = ref('')

function updateInput(name: string) {
  inputName.value = name
}

function saveName() {
  user.value.name = inputName.value
}

function increaseAge() {
  user.value.age++
}
function increaseId() {
  user.value.id++
}
</script>