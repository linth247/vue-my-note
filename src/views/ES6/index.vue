<script setup>
import toTop from "@/UI/toTop.vue";
toTop.scrollToTop =  true;

const content = `
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
    <pre>
//===============================================================================================//
      <a href="https://www.youtube.com/playlist?list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq" target="_blank">
        【尚硅谷】ES6教程——涵盖ES6-ES11
      </a>

      //================== 18 尚硅谷 ES6 迭代器介绍
      for(let v in xiyou){  // for in 保存的是鍵名
        console.log(v)
      } 
      for(let v of xiyou){  // for in 保存的是鍵值
        console.log(v)
      } 

      // 48.Function Factories (JavaScript全攻略)
      function maeGreeting(language){
        return function(firstname, lastname){
          if(language === 'en'){
            console.log('Hello ' + firstname + ' ' + lastname);
          }
          if(language === 'es'){
            console.log('Hola ' + firstname + ' ' + lastname);
          }
        }
      }
      var greetEnglish = makeGreeting('en');
      var greetSpanish = makeGreeting('es');

      greetEnglish('John', 'Doe');
      greetSpanish('John', 'Doe');
 
    </pre>
  </div>
`
</script>

<template>
  <div>【尚硅谷】ES6教程——涵盖ES6-ES11</div>
  <div v-html="content"></div>
  <toTop></toTop>
</template>

<style scoped lang="scss">

</style>