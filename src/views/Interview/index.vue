<script setup>
import toTop from "@/UI/toTop.vue";
import { ref } from "vue";
// import { colorEvent } from 'v3-color-picker';

toTop.scrollToTop =  true;


//color:#c1cccc
// const activeColor = ref('#c1cccc')

const colorOptions = ref({
  value: "rgba(193,204,204)",
  btn: true,
  theme: "light"
});


</script>

<template>
  <div>
    <!-- <v3-color-picker v-model:value="color"></v3-color-picker> -->
    <!-- <div class="demo" v-color="colorOptions" :style="{backgroundColor: colorOptions.value}"></div> -->
    <div class="demo" @click="(event) => colorEvent(event, colorOptions)" :style="{backgroundColor: colorOptions.value}"></div>
  </div>
  <!-- <div class="demo" v-color="colorOptions" :style="{backgroundColor: colorOptions.value}">指令方式使用</div> -->
  
  <!-- <div class="demo" @click="onClick1" :style="{backgroundColor: colorOptions.value}"></div> -->
  
  <div>web-interview</div>
  <input v-model="colorOptions.value">
  <!-- <div v-html="content" :style="{ color: activeColor }"></div> -->
  <div v-html="content" :style="{ color: colorOptions.value }"></div>
  <toTop></toTop>

  <!-- <div>我是Download頁面</div> -->
  <!-- <div v-html="content"></div> -->
  <div id="Vue3" class="content">
    <div class="box">
      <div style="padding-top:20px">【Vue3】</div>
      <div><a href="https://github.com/febobo/web-interview?tab=readme-ov-file" target="_blank">
        web-interview</a> 
      </div>


    </div>
  </div>

</template>

<style scoped lang="scss">
.demo {
  height: 50px;
  width: 50px;
}
</style>