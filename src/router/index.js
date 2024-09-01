import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Layout from '@/views/Layout/index.vue'
import KaiWebAPI from '@/views/KaiWebAPI/index.vue'
import RabbitVue3 from '@/views/RabbitVue3/index.vue'
import Download from '@/views/Download/index.vue'
import Others from '@/views/Others/index.vue'
import Dotnet7_vue3 from '@/views/Dotnet7_vue3/index.vue'
import _Beach_Info from '@/views/Dotnet7_vue3/_Beach_Info.vue'
import AddBeach from '@/views/Dotnet7_vue3/AddBeach.vue'
import BeachList from '@/views/Dotnet7_vue3/BeachList.vue'
import EditBeach from '@/views/Dotnet7_vue3/EditBeach.vue'
import router_Beach from '@/views/Dotnet7_vue3/router_Beach.vue'
import ConfirmDeletePopup from '@/views/Dotnet7_vue3/ConfirmDeletePopup.vue'

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
        {
          path:'/dotnet7_vue3',
          component: Dotnet7_vue3,
          children:[
            {
              path:'',
              component: _Beach_Info,
            },
            {
              path:'/_beach_info',
              component: _Beach_Info,
            },
            {
              path:'/addbeach',
              component: AddBeach
            },
            {
              path:'/beachList',
              component: BeachList
            },
            {
              path:'/editbeach',
              component: EditBeach
            },
            {
              path:'/routerbeach',
              component: router_Beach
            },
            {
              path:'/confirmDeletePopup',
              component: ConfirmDeletePopup
            }

          ]
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
