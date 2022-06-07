<template>
  <p>About</p>
</template>

<script>
export default {
  mounted() {
    console.log("About Component", this);
    window.aboutRoute = this.$route;
    window.aboutRouter = this.$router;
  },
  beforeDestroy() {
    console.log("About beforeDestory");
  },
};
</script>

<style>
</style>