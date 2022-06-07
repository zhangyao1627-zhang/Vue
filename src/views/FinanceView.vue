<template>
  <div>
    <ul>
      <!-- <li><a href="/stock">stock</a></li>
    <li><a href="/funds">funds</a></li>
    <li><a href="/banks">banks</a></li> -->
      <li v-for="news in newsList" :key="news.nid">
        <!-- <router-link
          :to="`/news/finance/detail?nid=${news.nid}&text=${news.text}`"
          >{{ news.text }}</router-link
        > -->
        <router-link
          :to="{
            path: '/news/finance/detail',
            query: {
              nid: news.nid,
              text: news.text,
            },
          }"
          >{{ news.text }}</router-link
        >
      </li>
    </ul>

    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          nid: 1,
          text: "stock",
        },
        {
          nid: 2,
          text: "funds",
        },
        {
          nid: 3,
          text: "banks",
        },
      ],
    };
  },
};
</script>

<style>
</style>