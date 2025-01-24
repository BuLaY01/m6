import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Fantasy from '../views/Fantasy.vue'
import Royal from '../views/Royal.vue'
import Rpg from '../views/Rpg.vue'
import Shooter from '../views/Shooter.vue'
import Strategy from '../views/Strategy.vue'
import Main from '../views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main
    },

    {
      path: '/fantasy',
      component: Fantasy
    },

    {
      path: '/royal',
      component: Royal
    },

    {
      path: '/rpg',
      component: Rpg
    },

    {
      path: '/shooter',
      component: Shooter
    },

    {
      path: '/strategy',
      component: Strategy
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
