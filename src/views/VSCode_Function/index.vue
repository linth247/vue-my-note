<script setup>
  //import DeployVite from './components/_4_deployVite.vue'

  import { ref } from 'vue'
  import VsCodeQuick2 from './components/_2_vscode.vue'
  let show1 = ref(false)


  import toTop from "@/UI/toTop.vue";
  toTop.scrollToTop =  true;
</script>

<template>

  <div>這是VS Code 功能頁</div>
  <!-- <div v-html="content"></div> -->
  <div id="Vite_to_github" class="content">
    <div>1.vS Code文件標簽欄多行顯示
      <a href="https://blog.csdn.net/mj475002864/article/details/115456004" target="_blank">
        https://blog.csdn.net/mj475002864/article/details/115456004
      </a>
      <p>ctrl + shift + p => 
        查詢 Open Workspace Settings => Wrap Tabs 打勾
      </p>
    </div>
    <div>2.vs code 快捷鍵
      <button @click="show1 = !show1">Toggle</button>
      <Transition>
        <!-- <div v-if="show">hello</div> -->
        <div v-if="show1"><VsCodeQuick2 /></div>
      </Transition>
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
    height: 100vh;
    background-color: #282923; 
    color:#c1cccc; 
    font-size: 1em;
    div{
      margin: 20px;
    }
  }
  p {
    padding-left: 20px;
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