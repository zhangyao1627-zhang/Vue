<template>
  <div>
    <p>News</p>
    <router-link to="/news/sports">sports</router-link>  |
    <router-link to="/news/finance">finance</router-link>
    <keep-alive :include="SportsView">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
