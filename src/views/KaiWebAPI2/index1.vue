<script setup>
  import DeployVite from './components/TodoListEditDtoAbstract.vue'
  import AsyncController from './components/AsyncController.vue'
  import AuthController from './components/AuthController.vue'
  import {ref} from 'vue'
  let show1 = ref(false)
  let show2 = ref(false)
  let show3 = ref(false)
  let show4 = ref(false)
  
  const isActive = ref(true)
  const iActive = () => {
    isActive.value = !isActive.value
  }  


  import toTop from "@/UI/toTop.vue";
  toTop.scrollToTop =  true;
</script>

<template>

  <div>這是WebAPI2</div>
  <!-- <div v-html="content"></div> -->
  <div id="Vite_to_github" class="content">
    <div style="width:15%;background-color: white;">{{ isActive }}
      <button @click="iActive" :class="{ active: isActive }">>Abstract\TodoListEditDtoAbstract.cs</button>
      <button @click="iActive" :class="{ active: isActive }">Controller\AsyncController.cs</button>
      <button @click="show3 = !show3">Controller\AuthController.cs</button>
    </div>

    <div style="width:80%">
      <p>
        <Transition>
          <div v-if="isActive"><DeployVite /></div>
        </Transition>
      </p>
      <p>
        <Transition>
          <div v-if="show2"><AsyncController /></div>
        </Transition>
      </p>
      <p>
        <Transition>
          <div v-if="show3"><AuthController /></div>
        </Transition>
      </p>

    </div>

    


  </div>

  <toTop></toTop>
</template>

<style scoped lang="scss">
  .active {
    color: red;
    background-color: orange;
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
    display:flex; 
    // height: 800vh;
    // background-color: #282923;
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