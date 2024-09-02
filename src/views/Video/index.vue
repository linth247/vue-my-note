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