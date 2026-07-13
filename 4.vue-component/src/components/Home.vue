<template>
  <div class="home">
    <h1>🏠 Home Page</h1>
    <p>Welcome to the Home page!</p>

    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </div>
</template>

<script setup>
// No JavaScript is needed yet.
// We'll add logic here later when we learn more about Vue.
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

h1 {
  margin-bottom: 10px;
}

p {
  color: #666;
}

.links {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
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