<script setup>


</script>

<template>
  <div>------------------------------------------------------------</div>
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
</style>