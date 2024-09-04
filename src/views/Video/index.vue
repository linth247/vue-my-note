<script setup>
  // import DeployVite from './components/_4_deployVite.vue'
  import {ref} from 'vue'
  let show = ref(false)

</script>

<template>

  <div>這是影音頁</div>
  <!-- <div v-html="content"></div> -->
  <div id="Vite_to_github" class="content">
    <div>1.Vue3 CRUD + bootstrap 
      <a href="https://www.youtube.com/watch?v=PrKh6GemOyg" target="_blank">
        https://www.youtube.com/watch?v=PrKh6GemOyg  
      </a> 
    </div>
    <div>2.後台課程管理系統-Vue3版
      <a href="https://www.youtube.com/watch?v=yZMTHoGSuVQ&list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG" target="_blank">
        https://www.youtube.com/watch?v=yZMTHoGSuVQ&list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG
      </a> 
    </div>
    <div>3.2024年不看后悔的Vue3+.NET7+WebAPI从零手写后台管理系统
      <a href="https://www.bilibili.com/video/BV1Km411o7ip?p=1&vd_source=1a5937a80fc962029ba6a7b9ee9a1654" target="_blank">
        https://www.bilibili.com/video/BV1Km411o7ip?p=1&vd_source=1a5937a80fc962029ba6a7b9ee9a1654
      </a> 
      <a href="https://search.bilibili.com/all?vt=75651059&keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&from_source=webtop_search&spm_id_from=333.1007&search_source=5" target="_blank">
        https://search.bilibili.com/all?vt=75651059&keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&from_source=webtop_search&spm_id_from=333.1007&search_source=5
      </a> 
    </div>
    <div>4.2023全新C#完全零基础入门教程（附源码）
      <a href="https://www.bilibili.com/read/cv25507935/" target="_blank">
        https://www.bilibili.com/read/cv25507935/
      </a> 
    </div>


      <!-- <button @click="show = !show">Toggle</button>
      <Transition>
        <div v-if="show"><DeployVite /></div>
      </Transition> -->

  </div>

  <toTop></toTop>
</template>

<style scoped lang="scss">
  .pdf {
    background-color: rgb(170, 63, 63);
    color: white; 
    font-size: .8em;
    padding: 0 5px;
    border-radius: 5px;
    margin-left: 3px;;
    text-align: center;
  }
  .box{

    // justify-content: center;
  }
  .content {
    // display:flex; 
    // height: 800vh;
    background-color: #282923;
    padding-bottom: 300px;
    color:#c1cccc; 
    font-size: 1em;
    div{
      margin: 20px;
    }
  }

  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>