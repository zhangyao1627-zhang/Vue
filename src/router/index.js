import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NewsView from '../views/NewsView.vue'
import SportsView from '../views/SportsView.vue'
import FinanceView from '../views/FinanceView.vue'
import DetailView from '../views/DetailView.vue'
import DetailView2 from '../views/DetailView2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'nabout',
    component: AboutView,
  },
  {
    path: '/news',
    component: NewsView,
    children: [
      {
        path: 'sports',  //  /
        component: SportsView
      },
      {
        path: 'finance',  //  /
        component: FinanceView,
        children: [
          {
            path: 'detail',  //  /
            component: DetailView
          },
          {
            path: 'detail2',  //  /
            component: DetailView2,
          },
        ]
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',//hash
  base: process.env.BASE_URL,
  routes
})

export default router
