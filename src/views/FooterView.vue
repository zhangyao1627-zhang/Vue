<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="gsAllChecked" />
    </label>
    <span>
      <span>completed {{ completedCourses }}</span> / all {{ totalCourses }}
    </span>
    <button class="btn btn-danger" @click="deleteAll2">remove completed</button>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  props: {
    setAllChecked: Function,
    // deleteAll: Function,
  },
  computed: {
    ...mapGetters(['completedCourses','totalCourses']),

    gsAllChecked: {
      get() {
        // return this.completedCourses === this.courses.length;
        if (this.completedCourses !== 0){
          console.log("---Here---,----to get----");
          console.log(this.$store.getters.gAllChecked);
          return this.$store.getters.gAllChecked;
        } else {
          console.log("---Here---,----to choose----")
          return false;
        }
      },
      set(value) {
        this.setAllChecked(value);
      },
    },
  },
  methods: {
    deleteAll2() {
      // this.deleteAll();
      this.$emit("deleteAll");
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
