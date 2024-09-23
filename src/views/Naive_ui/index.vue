<script setup>
  //import DeployVite from './components/_4_deployVite.vue'

  import { ref } from 'vue'
  import VsCodeQuick2 from './components/_2_vscode.vue'
  let show1 = ref(false)


  import toTop from "@/UI/toTop.vue";
  toTop.scrollToTop =  true;
</script>

<template>

  <div>vue3+Naive UI</div>
  <!-- <div v-html="content"></div> -->
  <div id="Vite_to_github" class="content">
    <div>1.ue3+Naive UI数据表格基本使用方式
      <a href="https://blog.csdn.net/weixin_54570626/article/details/129407702" target="_blank">
        https://blog.csdn.net/weixin_54570626/article/details/129407702
      </a>
    </div>
    <div>2.naive ui 数据表格操作加入两个按钮解决办法
      <a href="https://blog.csdn.net/uglyduckling0412/article/details/131438996" target="_blank">
        https://blog.csdn.net/uglyduckling0412/article/details/131438996
      </a>
    </div>
    <div>3.Naive UI之Data Table
      <a href="https://blog.csdn.net/aliceyang2012/article/details/127801611" target="_blank">
        https://blog.csdn.net/aliceyang2012/article/details/127801611
      </a>
    </div>
    <!-- <div>2.vs code 快捷鍵
      <button @click="show1 = !show1">Toggle</button>
      <Transition>
        <div v-if="show1"><VsCodeQuick2 /></div>
      </Transition>
    </div> -->
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