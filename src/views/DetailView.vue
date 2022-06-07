<template>
  <ul>
    <li>nid:{{ $route.query.nid}}</li>
    <li>text:{{ $route.query.text}}</li>
  </ul>
</template>

<script>
export default {
  mounted() {
    console.log("Detail Component", this);
  },
};
</script>

<style>
</style>