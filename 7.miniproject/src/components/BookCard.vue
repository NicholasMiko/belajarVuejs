<template>
<BaseCard>

    <img
  :src="book.image"
  :alt="book.title"
  class="cover"
/>

    <h2>
        {{ book.title }}
    </h2>
    <p>
       
        {{ book.category }}
    </p>

   <BaseButton
  variant="secondary"
  @click="openDetail"
>
  View Detail
</BaseButton>

  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue';
import type { Book } from '../books';
import BaseButton from './BaseButton.vue';

const props = defineProps<{
  book: Book
}>()

const emit = defineEmits<{
  (e: 'detail', id: number): void
}>()

function openDetail() {
  emit('detail', props.book.id)
}
</script>

<style scoped>

h2{
margin-bottom: 12px;
color: red;
}

p{
margin: 8px 0;
color: black;
}

button{
margin-top: 10px;
padding:8px 14px;
cursor:pointer;
}

.cover {
  width: 100px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}

</style>