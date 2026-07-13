<template>
  <div class="about">
    <h1>ℹ️ About Page</h1>
    <p>This page explains what this application is about.</p>

    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </div>
</template>

<script setup>
// Nothing here yet.
</script>

<style scoped>
.about {
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