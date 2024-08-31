import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Layout from '@/views/Layout/index.vue'
import KaiWebAPI from '@/views/KaiWebAPI/index.vue'
import RabbitVue3 from '@/views/RabbitVue3/index.vue'
import Download from '@/views/Download/index.vue'
import Others from '@/views/Others/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path:'',
          component: KaiWebAPI
        },
        {
          path:'/vue3',
          component: RabbitVue3
        },
        {
          path:'/download',
          component: Download
        },
        {
          path:'/others',
          component: Others
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
