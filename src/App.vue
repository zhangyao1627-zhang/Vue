<template>
  <div>
    <button @click="back">back</button>
    <button @click="forward">forward</button>
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
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    }
  }
};

//<a href="">
</script>

<style>
</style>


