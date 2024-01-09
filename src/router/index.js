import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/',
  //   redirect:'/coaches'
  // },
  {
    path: '/coaches',
    // name: 'home',
    component: null
  },
  
  {
    path: '/coaches/:id',
    // name: 'home',
    component: null,
    children:[{path:'contact',component:null}]  //coaches/c1/contact
  },
  {
    path: '/register',
    // name: 'home',
    component: null
  },
  {
    path: '/requests',
    // name: 'home',
    component: null
  },
  { path: '/:notFound(.*)', component: null }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
