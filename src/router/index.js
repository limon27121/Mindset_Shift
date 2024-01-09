import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import CoachDetail from '../components/Pages/Coaches/CoachDetail.vue';
import CoachesList from '../components/Pages/Coaches/CoachesList.vue';
import CoachRegistration from '../components/Pages/Coaches/CoachRegistration.vue';
import ContactCoach from '../components/Pages/Requests/ContactCoach.vue';
import RequestsReceived from '../components/Pages/Requests/RequestsReceived.vue';
import NotFound from '../components/NotFound.vue';
const routes = [
  
  {
    path: '/',
    redirect:'/coaches'
  },
  {
    path: '/coaches',
    // name: 'home',
    component: CoachesList
  },
  
  {
    path: '/coaches/:id',
    // name: 'home',
    component: CoachDetail,
    children:[{path:'contact',component:ContactCoach}]  //coaches/c1/contact
  },
  {
    path: '/register',
    // name: 'home',
    component: CoachRegistration
  },
  {
    path: '/requests',
    // name: 'home',
    component: RequestsReceived
  },
  { path: '/:notFound(.*)', component: NotFound }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
