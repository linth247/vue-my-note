<script setup>
  // import DeployVite from './components/_4_deployVite.vue'
  import {ref} from 'vue'



  import toTop from "@/UI/toTop.vue";
  toTop.scrollToTop =  true;
</script>

<template>
  <div><img src="/src/assets/images/01.png"/></div>
  <div><img src="/src/assets/images/02.png"/></div>
  <div><img src="/src/assets/images/03.png"/></div>
  <div><img src="/src/assets/images/04.png"/></div>
  <div><img src="/src/assets/images/05.png"/></div>
  <div><img src="/src/assets/images/06.png"/></div>
  <div><img src="/src/assets/images/07.png"/></div>
  <div><img src="/src/assets/images/08.png"/></div>
  <div><img src="/src/assets/images/09.png"/></div>
  <div><img src="/src/assets/images/10.png"/></div>
  <div><img src="/src/assets/images/11.png"/></div>
  <div><img src="/src/assets/images/12.png"/></div>
  <div><img src="/src/assets/images/13.png"/></div>
  <div><img src="/src/assets/images/14.png"/></div>
  <div><img src="/src/assets/images/15.png"/></div>
  <div><img src="/src/assets/images/16.png"/></div>
  <div><img src="/src/assets/images/17.png"/></div>
  <div><img src="/src/assets/images/18.png"/></div>

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