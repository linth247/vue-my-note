<script setup>
  import DeployVite from './components/TodoListEditDtoAbstract.vue'
  import AsyncController from './components/AsyncController.vue'
  import {ref} from 'vue'
  let show1 = ref(true)
  let show2 = ref(false)
  let show3 = ref(false)
  let show4 = ref(false)

</script>

<template>

  <div>這是WebAPI2</div>
  <!-- <div v-html="content"></div> -->
  <div id="Vite_to_github" class="content">
    <div style="width:20%;background-color: white;">
      <button @click="show1 = !show1">Abstract\TodoListEditDtoAbstract.cs</button>
      <button @click="show2 = !show2">Controller\AsyncController.cs</button>
    </div>

    <div style="width:80%">
      <p>
        <!-- <button @click="show1 = !show1">Abstract\TodoListEditDtoAbstract.cs</button> -->
        <Transition>
          <!-- <div v-if="show">hello</div> -->
          <div v-if="show1"><DeployVite /></div>
        </Transition>
      </p>
      <p>
        <!-- <button @click="show2 = !show2">Controller\AsyncController.cs</button> -->
        <Transition>
          <!-- <div v-if="show">hello</div> -->
          <div v-if="show2"><AsyncController /></div>
        </Transition>
      </p>

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