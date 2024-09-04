<script setup>
  import DeployVite from './components/_4_deployVite.vue'
  import {ref} from 'vue'
  let show = ref(false)

</script>

<template>

  <div>這是其他頁</div>
  <!-- <div v-html="content"></div> -->
  <div id="Vite_to_github" class="content">
    <div>1.Vue3 CRUD + bootstrap 
      <a href="https://www.youtube.com/watch?v=PrKh6GemOyg" target="_blank">
        https://www.youtube.com/watch?v=PrKh6GemOyg  
      </a> 
    </div>
    <div>2.Vue3 學習筆記
      <a href="https://hackmd.io/@Lin-Jay/S1xju_nKO" target="_blank">
        https://hackmd.io/@Lin-Jay/S1xju_nKO 
      </a> 
    </div>
    <div>3.Build app using Vue JS, .NET Core Web API and Microsoft SQL Server(create Azure)
      <a href="https://www.youtube.com/watch?v=TMmhECU3rHs" target="_blank">
        https://www.youtube.com/watch?v=TMmhECU3rHs
      </a> 
    </div>
    <div>4.How to Deploy Your Vite App to Github Pages
      <a href="https://www.youtube.com/watch?v=yo2bMGnIKE8" target="_blank">
        https://www.youtube.com/watch?v=yo2bMGnIKE8
      </a> 

      <button @click="show = !show">Toggle</button>
      <Transition>
        <!-- <div v-if="show">hello</div> -->
        <div v-if="show"><DeployVite /></div>
      </Transition>
    </div>
    <div>5.先學 axios 基礎與封裝管理 API
      <a href="https://ithelp.ithome.com.tw/articles/10304656" target="_blank">
        https://ithelp.ithome.com.tw/articles/10304656
      </a> 
    </div>
    <div>6.[C#][ASP.NET] Web API 開發心得 (7) - 使用 Token 進行 API 授權驗證
      <a href="https://ithelp.ithome.com.tw/articles/10199102" target="_blank">
        https://ithelp.ithome.com.tw/articles/10199102
      </a> 
    </div>
    <div>7.Poy Chang Trial and Error
      <a href="https://blog.poychang.net/categories/" target="_blank">
        https://blog.poychang.net/categories/
      </a> 
    </div>
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