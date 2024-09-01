<script setup>
import toTop from "@/UI/toTop.vue";
toTop.scrollToTop =  true;

// import AddBeach from './AddBeach.vue'

</script>

<template>
  <div>
    <h2>Dotnet7_vue3</h2>
    <div>.NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD</div>
  </div>
  <div>
    <div class="container">
      <ul class="app-header-nav" style="list-style: none;">
        <li> <RouterLink to="/_beach_info">_Beach_Info.vue</RouterLink> </li>
        <li> <RouterLink to="/editbeach">AddBeach.vue</RouterLink> </li>
        <li> <RouterLink to="/beachList">BeachList.vue</RouterLink> </li>
        <li> <RouterLink to="/editbeach">EditBeach.vue</RouterLink> </li>
        <li> <RouterLink to="/routerbeach">router_Beach.vue</RouterLink> </li>
        <li> <RouterLink to="/confirmDeletePopup">ConfirmDeletePopup.vue</RouterLink> </li>

      </ul>
    </div>

    <RouterView/>
    <!-- <AddBeach /> -->
    <div></div>
  </div>
  <toTop></toTop>


</template>

<style scoped lang="scss">
  .content {
    // display:flex; 
    height: 100vh;
    background-color: #282923; 
    color:#c1cccc; 
    font-size: 1em;
    div{
      margin: 20px;
    }
  }
</style>