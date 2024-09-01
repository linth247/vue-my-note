<script setup>

const temp = `
    import { createRouter, createWebHistory } from 'vue-router'
    // import HomeView from '../views/HomeView.vue'
    import BeachList from '../views/beaches/BeachList.vue'
    import AddBeach from '../views/beaches/AddBeach.vue'
    import EditBeach from '../views/beaches/EditBeach.vue'

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        {
          path: '/',
          name: 'home',
          component: BeachList
        },
        {
          path: '/add',
          name: 'add-beach',
          component: AddBeach
        },
        {
          path: '/edit/:id',
          name: 'edit-beach',
          component: EditBeach
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


`;

</script>
<template>
  <!-- <div v-html="temp"></div> -->
  <div>這是_router_Beach</div>
  <div class="content">
    <pre>
      {{ temp }}
    </pre>
  </div>
  
</template>

<style scoped lang="scss">
  .content {
    // display:flex; 
    height: 100%;
    background-color: #282923; 
    color:#c1cccc; 
    font-size: 1em;
    div{
      margin: 20px;
    }
  }
</style>