<script setup>
  // import DeployVite from './components/_4_deployVite.vue'
  import {ref} from 'vue'



  import toTop from "@/UI/toTop.vue";
  toTop.scrollToTop =  true;
</script>

<template>
  <h3>Vue.js结合ASP.NET Core构建用户登录与权限验证系统</h3>
  <div>來源：<a href="https://blog.csdn.net/baozi141990/article/details/139621669" target="_blank">
    https://blog.csdn.net/baozi141990/article/details/139621669</a></div>
  <div>
    <p>1.環境準備</p>
    <p>2.創建項目</p>
    <p>3.Vue配置</p>
    <p> 步驟一：安裝包</p>
    <p> 步驟二：配置文件</p>
    <p> 步驟三：頁面文件</p>
    <p>4：後台配置</p>
  </div>
  <div style="margin-top: 15px;">
    在本教程中，將利用Visual Studio 2022的強大集成開發環境，結合Vue.js前鬥框架和ASP.NET Core後端框架，從頭開始創建一個具備
    用戶登入與權限驗證功能的Web應用程序。充分利用Visual Studio的內置工具和模版來簡化開發流程。
  </div>
  <h2 style="font-weight: bold; margin-top: 15px;">1.環境準備</h2>
  <p>Visual Studio 2022, Vue3</p>
  <h2 style="font-weight: bold;margin-top: 15px;">2.創建項目</h2>
  <div>打開Visual Studio 2022，選擇"創建新目"。在項目模板搜索框中輸入"Vue and ASP.NET Core", 選擇模板點擊"下一步"。</div>
  <p>按照圖中配置：</p>
  <div><img src="/src/assets/images/01.png"/></div>
  <p>生成目錄如下：</p>
  <div><img src="/src/assets/images/02.png"/></div>
  <h2 style="font-weight: bold;margin-top: 15px;">3.Vue3配置</h2>
  <br/>
  <h3 style="font-weight: bold;margin-top: 10px;">步驟一：安裝包</h3>
  <div>右鍵 npm -> 安裝新的npm包</div>
  <div>
    <ul style="margin:10px 0;">
      <li>element-plus UI包</li>
      <li>@element-plus/icons-vue UI圖標包</li>
      <li>axios 發送請求的包</li>
      <li>qs 發送請求時序列化的包</li>
      <li>vue-router vue路由</li>
      <li>jwt-decode 令牌解碼</li>
    </ul>
  </div>

  <h3 style="font-weight: bold;margin-top: 10px;">步驟二：配置文件</h3>

  <div>
    <ul style="margin:10px 0;">
      <li>封裝 axios</li>
      <p>新建 axios.js文件，內容如下：</p>
    </ul>
  </div>
  <div><img src="/src/assets/images/03.png"/></div>
  <div><img src="/src/assets/images/04.png"/></div>
  <div>
    <ul style="margin:10px 0;">
      <li>創建路由</li>
      <p>新建 router.js文件夾，並新建router.js文件</p>
    </ul>
  </div>
  <div><img src="/src/assets/images/05.png"/></div>
  <div><img src="/src/assets/images/06.png"/></div>


  <div>
    <ul style="margin:10px 0;">
      <li>配置 main.js</li>
    </ul>
  </div>
  <div><img src="/src/assets/images/07.png"/></div>
  <div><img src="/src/assets/images/08.png"/></div>

  <h3 style="font-weight: bold;margin-top: 10px;">步驟三：頁面文件</h3>
  <div>
    <ul style="margin:10px 0;">
      <li>登入頁面 Login.vue</li>
    </ul>
  </div>
  <div><img src="/src/assets/images/09.png"/></div>
  <div><img src="/src/assets/images/10.png"/></div>
  <div><img src="/src/assets/images/11.png"/></div>

  <div>
    <ul style="margin:10px 0;">
      <li>注銷頁面 LoginOut.vue</li>
    </ul>
  </div>
  <div><img src="/src/assets/images/12.png"/></div>
  <div>
    <ul style="margin:10px 0;">
      <li>修改 App.vue</li>
    </ul>
  </div>
  <div><img src="/src/assets/images/13.png"/></div>

  <h2 style="font-weight: bold;margin-top: 15px;">4.後台配置</h2>
  <div>創建一個生成Token的工具類 TokenService</div>
  <div><img src="/src/assets/images/14.png"/></div>
  <div><img src="/src/assets/images/15.png"/></div>

  <div>
    <ul style="margin:10px 0;">
      <li>配置跨域Program.cs</li>
      <p>在builder()之前增加：</p>
    </ul>
  </div>
  <div><img src="/src/assets/images/16.png"/></div>

  <div>
    <ul style="margin:10px 0;">
      <li>登入驗證</li>
      <p>LoginController.cs</p>
    </ul>
  </div>
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