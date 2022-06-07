<template>
  <ul class="todo-main">
    <Item
      v-for="(course, index) in courses"
      :key="index"
      :course="course"
      :index="index"
      :setChecked="setChecked"
    />
<!--    <script>console.log(courses)</script>-->
  </ul>
</template>
<script>
import Item from "./ItemView.vue";
import { mapState } from "vuex";
export default {
  name: "ListView",
  components: {
    Item,
  },
  data(){
    return{
      courseList: [],
    }
  },
  props: {
    setChecked: Function,
  },
  computed: {  //dynamic
    ...mapState(['courses'])
  },
  mounted: function (){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$store.dispatch("getAll").then((response)=>{
        this.courseList = response.data;
      });
    },
  },
};
</script>
<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
