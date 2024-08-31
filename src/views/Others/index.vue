<script setup>

const content = `
  <div id="Vite_to_github" 
  style="display:flex; 
  background-color: #282923; 
  color:#c1cccc; 
  font-size: 14px;
  height: 1000px;">
    <div>1.Vue3 CRUD + bootstrap --> 
    <a href="https://www.youtube.com/watch?v=PrKh6GemOyg">
      https://www.youtube.com/watch?v=PrKh6GemOyg  
    </a> </div>
  </div>
`

</script>

<template>
  <div>------------------------------------------------------------</div>
  <div>這是其他頁</div>
  <div v-html="content"></div>
  <toTop></toTop>
</template>