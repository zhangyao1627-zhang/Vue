<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="please enter your course"
      v-model="cname"
      @keyup.enter="addNewCourse"
    />
  </div>
</template>

<script>
export default {
  data() {
    let cname = "";
    return { cname };
  },
  methods: {
    addNewCourse: function () {
      const newcouse = {
        cname: this.cname,
        isChecked: false,
      };
      // this.addCourse(newcouse);
      this.$store.dispatch("addCourse", newcouse);
      this.cname = "";
    },
  },
};
</script>
<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>