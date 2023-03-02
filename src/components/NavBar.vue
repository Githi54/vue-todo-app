<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Todos</router-link>
    <router-link :to="{ name: 'AddProject' }">Add New Todo</router-link>
  </nav>
</template>

<script lang="ts">
export default {}
</script>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
}
a.router-link-active {
  border-bottom: 2px solid #35df90;
  padding-bottom: 4px;
  color: #35df90;
}
</style>
