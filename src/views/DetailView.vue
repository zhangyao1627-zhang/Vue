<template>
  <ul>
    <li>nid:{{ nid}}----parameter<button>push</button></li>
    <li>text:{{ text}}----parameter</li>
  </ul>
</template>

<script>
export default {
  mounted() {
    console.log("Detail Component", this);
  },
  props:['nid','text'],
  //computed属性多次调用的话可以简化流程
  // computed:{
  //   id(){
  //     return this.$route.params.nid;
  //   },
  //   text(){
  //     return this.$route.params.text;
  //   }
  // }
};
</script>

<style>
</style>
