<template>
<form @submit.prevent="saveBook">

  <div class="form-group">
    <label>Title</label>
    <input
      v-model="form.title"
      type="text"
      required
    />
  </div>

  <div class="form-group">
    <label>Author</label>
    <input
      v-model="form.author"
      type="text"
      required
    />
  </div>

  <div class="form-group">
    <label>Category</label>

    <select v-model="form.category">
      <option>Motivational</option>
      <option>Adventure</option>
      <option>Sci-fi</option>
    </select>
  </div>

  <div class="form-group">
    <label>Year</label>

    <input
      type="number"
      v-model.number="form.year"
    />
  </div>

  <div class="form-group">
    <label>Description</label>

    <textarea
      v-model="form.description"
      rows="4"
    ></textarea>
  </div>

  <div class="form-group">
  <label>Image URL</label>

  <input
    v-model="form.image"
    type="text"
    placeholder="Masukin Link Local"
  />
</div>

  <button type="submit">
    Save Book
  </button>

</form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Book } from '../books';

const emit = defineEmits<{
(e: 'add-book', book : Book): void
}>()

const form = ref<Book>({
id: 0,
title: '',
author: '',
category: '',
year: new Date().getFullYear(),
description: '',
image:''
})

function saveBook() {
emit('add-book', {
    ...form.value,
    id: Date.now()
})

form.value = {
id: 0,
title: '',
author: '',
category: '',
year: new Date().getFullYear(),
description: '',
image: ''
}
}

</script>


<style scoped>
form{
  display:flex;
  flex-direction:column;
  gap:16px;
}

.form-group{
  display:flex;
  flex-direction:column;
}

label{
  margin-bottom:6px;
  font-weight:bold;
  color:#333;
}

input,
select,
textarea{

  width:100%;
  padding:10px;

  border:1px solid black;
  border-radius:8px;

  box-sizing:border-box;
}

textarea{
  resize:none;
}

button{

  align-self:flex-start;

  padding:10px 18px;

  border:none;
  border-radius:8px;

  cursor:pointer;

  background:#42b883;
  color:white;
}
</style>