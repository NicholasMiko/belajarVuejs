
<template>
  <div class="books">
      <h1>Book Catalog</h1>
  <div class="toolbar">

  <input
    v-model="search"
    placeholder="Search title..."
  />

  <select v-model="selectedCategory">
    <option
      v-for="bookCategory in bookCategorys" :value="bookCategory.name">
      {{ bookCategory.name }}
    </option>
  </select>

  <BaseButton
    variant="primary"
    @click="showModal = true"
  >
    Add Book
  </BaseButton>
</div>

<div class="book-list" ref="bookContainer">

  <BookCard
    v-for="book in filteredBooks"
    :key="book.id"
    :book="book"
    @detail="openDetail"
  />
  </div>

  <router-view />

  <BaseModal
    v-if="showModal"
    @close="showModal = false"
  >
    <template #header>
        <h2><strong>Add Book</strong></h2>
    </template>

    <BookForm
      @add-book="addBook"
    />
  </BaseModal>

</div>

</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { books, type Book } from '../books'

import BaseButton from '../components/BaseButton.vue'
import BookCard from '../components/BookCard.vue'
import BookForm from '../components/BookForm.vue'
import BaseModal from '../components/BaseModal.vue'

interface BookCategory{
  name: string
}

const bookCategorys:BookCategory[] = [
  {
    name:'All'
  },
  {
    name:'Motivational'
  },
  {
    name:'Sci-fi'
  },
  {
    name:'Adventure'
  }
  
]


const router = useRouter()
const search = ref('')
const selectedCategory = ref('All')
const showModal = ref(false)
const bookContainer = ref<HTMLElement | null>(null)

const filteredBooks = computed(() => {
    return books.value.filter(book => {

        const matchSearch =
        book.title
        .toLowerCase()
        .includes(
            search.value.toLowerCase()
        )

        const matchCategory =
        selectedCategory.value === 'All'
        ||
        book.category === selectedCategory.value

        return matchSearch && matchCategory

  })

})

function addBook(book:Book){
books.value.push(book)
showModal.value = false
}

function openDetail(id:number){

    router.push(`/books/${id}`)
}
onMounted(()=>{

console.log('Test Mounted')
})

onUpdated(()=>{
      console.log('Test Updated')
if (bookContainer.value){
bookContainer.value.scrollTop=
bookContainer.value.scrollHeight
}

})
onUnmounted(()=>{

console.log('Test Unmounted')
})

    </script>

   <style scoped>

.books {
  max-width: 900px;
  margin: 40px auto;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

h2 {
color: white;
}

.toolbar {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.toolbar input,
.toolbar select {
  padding: 8px;
}

.toolbar button {
  padding: 8px 16px;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;

  max-height: 500px;
  overflow-y: auto;
}

    </style>