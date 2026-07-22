<template>
<div class="book-detail">

   <BaseButton
  variant="secondary"
  @click="back"
>
  Back
</BaseButton>

    <div v-if="book">
    <h1>{{ book.title }}</h1>

    <p>
        Author:
        {{ book.author }}
    </p>

    <p>
        Category:
        {{ book.category}}
    </p>

    <p>
        Year:
        {{ book.year }}
    </p>

    <p>
        Description:
        {{ book.description }}
    </p>

    </div>

    <div v-else>
        <h2>Tidak Ditemukan</h2>
    </div>

    </div>
 </template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { books } from '../books'
import BaseButton from '../components/BaseButton.vue'

const route = useRoute()
const router = useRouter()

// function back() {
// router.back()
// }

function back() {
  router.replace('/books')
}

const book = computed(() => {
return books.value.find(
b => b.id === Number(route.params.id)
)

})

</script>

<style scoped>
.book-detail {
  max-width: 700px;
  margin: 40px auto;
}

button {
  margin-bottom: 20px;
  padding: 8px 16px;
  cursor: pointer;
}

p {
  margin: 12px 0;
}
</style>