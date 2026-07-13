<template>
  <button
    class="base-button"
    :class="variant"
    @click="emit('click')"
  >
<slot
  :person="person">
  {{ person.name }}
</slot>
 
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Person } from './person';

const props = defineProps({
  variant: {
    required: true,
    type: String
  },
  person: {
    required: true,
    type: Object as PropType<Person>
  }
  
  
})

const emit = defineEmits<{
  (emit: 'click'): void
}>()
</script>

<style scoped>
.base-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.primary {
  background: blue;
  color: white;
}

.danger {
  background: red;
  color: white;
}

.test {
  background: orange;
  color: white;
}


</style>