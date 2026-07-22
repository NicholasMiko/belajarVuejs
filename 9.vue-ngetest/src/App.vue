<template>
<nav>
<router-link to="/tester">
  Tester
</router-link > 
</nav>
<router-view />
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Tester from './components/Tester.vue';

</script>