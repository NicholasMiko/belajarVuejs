<template>
<div class="card">
    <slot />
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.card {
border: 1px solid black;
border-radius: 10px;
padding: 20px;
box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
background: white;
color: black;


}

</style>