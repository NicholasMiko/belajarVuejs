<template>
  <h1>TO DO LIST</h1>

<nav>
  <RouterLink to="/">Home</RouterLink>

  <RouterLink to="/about">
    About
  </RouterLink>

  <RouterLink to="/users">
    Users
  </RouterLink>

   <RouterLink to="/login">
    Login
  </RouterLink>
</nav>

  <RouterView />
</template>

<script setup lang="ts">
</script>

<style scoped>
h1 {
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
}

a {
  text-decoration: none;
  color: royalblue;
  font-weight: bold;
}

.router-link-active {
  color: crimson;
}
</style>