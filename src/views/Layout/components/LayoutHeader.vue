<script setup>
// import {ref,onMounted} from 'vue'
// import {getCategoryAPI} from '@/apis/layout'
// const categoryList = ref([])
// const getCategory = async () => {
//   const res = await getCategoryAPI()
//   console.log(res)
//   categoryList.value = res.result
// }
// onMounted(() => {
//   getCategory()
// })

// import {useCategoryStore} from '@/stores/categoryStore'
// import HeaderCart from './HeaderCart.vue'
// const categoryStore = useCategoryStore()


</script>

<template>
  <header class='app-header'>
    <div class="container">
      <!-- <h1 class="logo">
        <RouterLink to="/">小兔鮮</RouterLink>
      </h1> -->
      <ul class="app-header-nav" style="list-style: none;">
        <!-- <li class="home">
          <RouterLink to="/">首頁</RouterLink>
        </li> -->
        <!-- <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink active-class="active" :to="`/category/${item.id}`">{{item.name}}</RouterLink> 
        </li> -->
        <li> <RouterLink to="/">WebAPI</RouterLink> </li>
        <li> <RouterLink to="/kaiWebapi2">WebAPI2</RouterLink> </li>
        <li> <RouterLink to="/vue3">Vue3</RouterLink> </li>
        <li> <RouterLink to="/download">下載</RouterLink> </li>
        <li> <RouterLink to="/others">其他</RouterLink> </li>
        <li> <RouterLink to="/dotnet7_vue3">Dotnet7_vue3</RouterLink> </li>
        <li> <RouterLink to="/vscode_function">VS Code小功能</RouterLink> </li>
        <li> <RouterLink to="/video">Video</RouterLink> </li>
        <li> <RouterLink to="/es6">ES6</RouterLink> </li>
        <li> <RouterLink to="/Naive_ui">Naive-ui</RouterLink> </li>
        <li> <RouterLink to="/dotnetapi_angular">DotnetAPI_Angular</RouterLink> </li>
        <li> <RouterLink to="/AI">AI</RouterLink> </li>
        <li> <RouterLink to="/Vue3+.NET7">Vue3+.NET7</RouterLink> </li>
        <li> <RouterLink to="/pdf_vue3">pdf_vue3</RouterLink> </li>
        <li> <RouterLink to="/vuejs_auth">vuejs_auth</RouterLink> </li>
        <li> <RouterLink to="/vuejs_auth2">vuejs_auth2</RouterLink> </li>
        <li> <RouterLink to="/Dropdownlist">Dropdownlist</RouterLink> </li>
        <li> <RouterLink to="/Interview">面試</RouterLink> </li>
      </ul>
      <!-- <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div> -->
      <!-- 頭部購物車 -->
      <!-- <HeaderCart /> -->
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      // background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    width: 1024px;
    display: flex;
    // padding-left: 40px;
    position: relative;
    z-index: 998;
    li{
      border: 1px solid #a4c8f0;
      margin-right: 5px;
      a:hover{
        // color: $xtxColor;
        // color:white;
        // border-bottom: 1px solid $xtxColor;
        background-color: white;
        color: black;
        background-color:orange;
        border-radius: 0.2rem 0.2rem 0 0;
        // padding: 0 10px;
      }
    }
  
    //li {
    //  margin-right: 40px;
    //  // width: 60px;
    //  text-align: center;
    //  // background-color:orange;
  //
    //  a {
    //    font-size: 16px;
    //    line-height: 32px;
    //    height: 32px;
    //    display: inline-block;
  //
    //    &:hover {
    //      color: $xtxColor;
    //      border-bottom: 1px solid $xtxColor;
    //      background-color: white;
    //      color: black;
    //      background-color:orange;
    //      border-radius: 0.2rem 0.2rem 0 0;
    //      padding: 0 10px;
    //    }
    //  }
  //
    //  .active {
    //    color: $xtxColor;
    //    border-bottom: 1px solid $xtxColor;
    //    // color: black;
    //    // background-color:orange;
    //  }
    //}
  }

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
