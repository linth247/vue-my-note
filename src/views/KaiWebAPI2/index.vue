<script setup>
  import DeployVite from './components/TodoListEditDtoAbstract.vue'
  import AsyncController from './components/AsyncController.vue'
  import AuthController from './components/AuthController.vue'

  import { ref } from 'vue'

  let show1 = ref(false)
  let show2 = ref(false)
  let show3 = ref(false)

  import toTop from "@/UI/toTop.vue";
  toTop.scrollToTop =  true;
</script>

<template>
   <!-- <div v-html="content"></div> -->
  <div id="Vite_to_github" class="content">
    <div class="title">1.DeployVite
      <button @click="show1 = !show1">Toggle</button>
      <Transition>
        <div v-if="show1"><DeployVite /></div>
      </Transition>
    </div>
    <div class="title">2.AsyncController
      <button @click="show2 = !show2">Toggle</button>
      <Transition>
        <div v-if="show2"><AsyncController /></div>
      </Transition>
    </div>
    <div class="title">3.AsyncController
      <button @click="show3 = !show3">Toggle</button>
      <Transition>
        <div v-if="show3"><AuthController /></div>
      </Transition>
    </div>


  </div>

  <toTop></toTop>
</template>

<style scoped lang="scss">
.title{
  color:#5DC2A5
}
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