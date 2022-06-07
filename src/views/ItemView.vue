<template>
  <li
    @mouseenter="setCss(true)"
    @mouseleave="setCss(false)"
    :style="{ background: mybgcolor }"
  >
    <label>
      <input type="checkbox" v-model="gsChecked" />
      <span>{{ course.cname }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteCourse2">
      delete
    </button>
  </li>
</template>
<script>
export default {
  name: "ItemView",
  computed: {
    gsChecked: {
      get() {
        return this.course.isChecked;
      },
      set(value) {
        this.setChecked(this.index, value);
      },
    },
  },
  props: {
    course: Object,
    index: Number,
    setChecked: Function,
  },
  data() {
    return {
      mybgcolor: "",
      isShow: false,
    };
  },
  methods: {
    setCss(flag) {
      if (flag) {
        this.mybgcolor = "pink";
        this.isShow = true;
      } else {
        this.mybgcolor = "";
        this.isShow = false;
      }
    },
    deleteCourse2() {
      if (window.confirm(`delete ${this.course.cname}?`))
        // this.deleteCourse(this.index);
        this.$store.dispatch("deleteCourse", this.index);
    },
  },
};
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
