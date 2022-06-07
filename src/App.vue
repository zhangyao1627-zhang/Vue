<!--<template>-->
<!--  <div>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    &lt;!&ndash; <router-link to="/about">About</router-link>|  &ndash;&gt;-->
<!--    <router-link :to="{ name: 'nabout' }">About</router-link>|-->
<!--    <router-link to="/news">News</router-link>-->
<!--    <router-view />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "App",-->
<!--};-->

<!--//<a href="">-->
<!--</script>-->

<!--<style>-->
<!--</style>-->

<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header />
        <List
            :setChecked="setChecked"
        />
        <Footer
            :setAllChecked="setAllChecked"
            @deleteAll="deleteAll"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/HeaderView.vue";
import List from "@/views/ListView.vue";
import Footer from "@/views/FooterView.vue";

export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
  data() {
    let courses = [
      {
        cname: "vue",
        isChecked: true,
      },
      {
        cname: "java",
        isChecked: false,
      },
      {
        cname: "python",
        isChecked: true,
      },
    ];
    return { courses };
  },
  methods: {
    setChecked(index, isChecked) {
      this.courses[index].isChecked = isChecked;
    },
    setAllChecked(isChecked) {
      this.courses.forEach((course) => (course.isChecked = isChecked));
    },
    deleteAll() {
      this.courses = this.courses.filter((course) => !course.isChecked);
    },
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
  0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

