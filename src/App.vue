<template>
  <div>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link>|  -->
    <router-link :to="{ name: 'nabout' }">About</router-link>|
    <router-link to="/news">News</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};

//<a href="">
</script>

<style>
</style>


