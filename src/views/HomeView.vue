<template>
  <p>Home</p>
</template>

<script>
export default {
  mounted() {
    console.log("Home Component", this);
    window.homeRoute = this.$route;
    window.homeRouter = this.$router;
  },
  beforeDestroy() {
    console.log("Home beforeDestory");
  },
};
</script>

<style>
</style>