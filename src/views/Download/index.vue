<script setup>
const content = `
  <div id="Vue3" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
    <pre>

       //-----------Vue3
        <a
        download href="https://drive.google.com/uc?export=download&id=19m0QpipH0fPS51aztlgZ0gFxwWkSpqo_">
        1.dotnet7_vue3<span class="pdf">download></span></a>
        <a href="https://www.youtube.com/watch?v=2FoD_8dMGyU&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG" target="_blank">
        2.【黑馬程序員】前端Vue3小兔鮮實戰項目<span class="pdf">YouTube</span></a>
        <a
        download href="https://drive.google.com/uc?export=download&id=10LPanB6adG6BLF0cKcM3H-VCSvUWwf8A">
        3.vue-rabbit_my 小兔鮮<span class="pdf">download</span></a>
        <a
        download href="https://drive.google.com/uc?export=download&id=18N6U0JeeUsS6EhGGz2jvh3aZK41L-uBc">
        4.vue3-basic-project-my(mock)<span class="pdf">download</span></a>
        <a
        download href="https://drive.google.com/uc?export=download&id=1Xe_GxmzXJVSIxMnqw3cm15YkLLQc4tWD">
        5.vue3-basic-project-my(有驗證名字不能重覆update)<span class="pdf">download</span></a>
        
        //-----------WEBAPI
        <a href="https://blog.talllkai.com/ASPNETCore" target="_blank">
        1.完整且輕鬆學習ASP.NET Core Web API<span class="pdf">Web</span></a>
        <a href="https://www.youtube.com/watch?v=dXUfZuf1Wp4&list=PLneJIGUTIItuqdxuDBEKCrvXCtCdUf_Xm" target="_blank">
        2.ASP.NET Core Web API 入門教學<span class="pdf">YouTube</span></a>
        <a
        download href="https://drive.google.com/uc?export=download&id=1Mi3nQijxvyz6TmA7NWzkudmxeJha7W-e">
        3.DataBase_First_凱哥<span class="pdf">download</span></a>
        
     </pre>
  </div>
`
</script>

<template>
  <div>我是Download頁面</div>
  <div v-html="content"></div>
</template>

<style scoped lang="scss">
    .pdf {
      background-color: rgb(170, 63, 63);
      color: white; 
      font-size: .8em;
      padding: 0 5px;
      border-radius: 5px;
      margin-left: 3px;;
    }
</style>