<script setup>
import toTop from "@/UI/toTop.vue";
toTop.scrollToTop =  true;

// import AddBeach from './AddBeach.vue'

</script>

<template>
  <div>
    <!-- <h2>pdf vue3</h2> -->
  </div>
  <div>
    <div class="container">
      <!-- <ul class="app-header-nav" style="list-style: none;"> -->
        <!-- <li> <RouterLink to="/index1">Vue3前台</RouterLink> </li>
        <li> <RouterLink to="/index2">.NET 7 後台</RouterLink> </li>
        <li> <RouterLink to="/index3">如何运行当前项目</RouterLink> </li> -->
        <!-- <li> <RouterLink to="/beachList">BeachList.vue</RouterLink> </li>
        <li> <RouterLink to="/editbeach">EditBeach.vue</RouterLink> </li>
        <li> <RouterLink to="/routerbeach">router_Beach.vue</RouterLink> </li>
        <li> <RouterLink to="/confirmDeletePopup">ConfirmDeletePopup.vue</RouterLink> </li> -->

      <!-- </ul> -->
        <span class="title"> <RouterLink to="/1-vue3">Vue3前台</RouterLink> </span>
        <span class="title"> <RouterLink to="/2-net7">.NET 7 後台</RouterLink> </span>
        <span class="title"> <RouterLink to="/3-run">如何運行當前項目</RouterLink> </span>
        <span class="title"> <RouterLink to="/4-js">JavaScript</RouterLink> </span>
        <span class="title"> <RouterLink to="/5-harry">哈利</RouterLink> </span>
        <span class="title"> <RouterLink to="/6-rich">我45歲學存股股利年領200萬</RouterLink> </span>
        <span class="title"> <RouterLink to="/7-japanese">日語</RouterLink> </span>
        <span class="title"> <RouterLink to="/8-japanese2">日語2</RouterLink> </span>
        <span class="title"> <RouterLink to="/9-japanese3">日語3</RouterLink> </span>
    </div>
    <br>
    <hr>
    <RouterView/>
    <!-- <AddBeach /> -->
    <div></div>
  </div>
  <toTop></toTop>


</template>

<style scoped lang="scss">
.container {
  margin-top: 5px;
  text-align: center;
}
.title{
  // background-color: rgb(43, 38, 38)
  
  border-bottom: 3px solid rgb(218, 129, 28);
  padding: 3px 5px;
  margin: 3px 10px 5px 10px;
  a { color: #000; }
}
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