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
    meta:{isAuth:true},
    beforeEnter:(to,from,next) =>{
      if(to.meta.isAuth){
        if(localStorage.getItem('username') === 'tom'){
          next()
        } else {
          alert('user isnot valid')
        }
      }
    }
  },
  {
    path: '/news',
    component: NewsView,
    children: [
      {
        name:'nsports',
        path: 'sports',  //  /
        component: SportsView
      },
      {
        path: 'finance',  //  /
        component: FinanceView,
        children: [
          {
            name: 'ndetail',
            path: 'detail/:nid/:text',  //  /
            component: DetailView,
            props({params:{nid,text}}){
              return {
                nid: nid,
                text: text
              }
            }
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

router.beforeEach((to,from,next)=>{
  console.log(to,from,next);
  //用next去转到下一页
  next();
  if(to.meta.isAuth){
    if(localStorage.getItem('username') === 'tom'){
      next()
    } else {
      alert('user isnot valid')
    }
  }
})



export default router
