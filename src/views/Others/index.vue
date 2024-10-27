<script setup>

  import DeployVite from './components/_4_deployVite.vue'
  import Vue3_is_10 from './components/_10_vue3_is.vue'
  import vue3_is_11 from './components/_11_vue3_is.vue'
  import quartz_16 from './components/_16_Quartz.vue'
  import HelloWorld from './components/HelloWorld.vue'

  import { h, ref } from 'vue'
  let show = ref(false)
  let show1 = ref(false)
  let show2 = ref(false)
  let show16 = ref(false)

  const msg = ref('1.Hello Vue3 + Vite')
  const comp = h(
    'div',
    {style:{color:'red'}},
    [h('span','1.Hello World')],
    [h('p','1.這是一個標籤')]
  )
  // const comp2 = h(
  //   'div',
  //   {style:{color:'red'}},
  //   msg.value
  // )
  setTimeout(()=>{
    msg.value = '3.111'
  }, 2000)
  const Comp3 = (props) =>h(
    'div',
    {style:{color:'red'}},
    //msg.value
    props.count
  )
  const Comp4 = ((props, {slots}) => {
    const a = ref('4.aaa')
   return h(
      'div',
      {
        style:{color:'red'}, 
        onClick(){ console.log('click')},
        onMousedown(){ console.log('mousedown')}
      },
      //msg.value
      [slots?.header?.(a.value),
        '4.container',slots?.default?.()
      ]
    )
  })

  const Comp5 = ((props,{slots}) => {
    return h(
      HelloWorld, 
      {
        msg2:'App傳遞的msg2',
        onFoo(val){
          console.log('響應的事件foo',val)
        }
      }, 
      {
        default:slots.default,
        footer:() => 
          h(HelloWorld, null, {
            default: ()=> h('div', '5.嵌套的默認插槽'),
            footer: ({msg3}) => h('div', '5.嵌套的footer'+msg3)
          })
      })
  })

  import toTop from "@/UI/toTop.vue";
  toTop.scrollToTop =  true;
</script>

<template>
  <div>這是其他頁</div>
  <component :is="comp"></component>
  <!-- <component :is="comp3"></component> -->
  <Comp3 :count="3.1"><div>3.2222</div></Comp3>
  <Comp4 :count="4.1">
    <div>4.2222</div>
    <template #header="a">
      <div>4.header {{ a }}</div> 
    </template>
  </Comp4>
  <Comp5>
    <div>5.App傳遞的默認插槽</div>
  </Comp5>
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
    <div>3.Build app using Vue JS, .NET Core Web API and Microsoft SQL Server(create Azure)
      <a href="https://www.youtube.com/watch?v=TMmhECU3rHs" target="_blank">
        https://www.youtube.com/watch?v=TMmhECU3rHs
      </a> 
    </div>
    <div>4.How to Deploy Your Vite App to Github Pages
      <a href="https://www.youtube.com/watch?v=yo2bMGnIKE8" target="_blank">
        https://www.youtube.com/watch?v=yo2bMGnIKE8
      </a> 

      <button @click="show = !show">Toggle</button>
      <Transition>
        <!-- <div v-if="show">hello</div> -->
        <div v-if="show"><DeployVite /></div>
      </Transition>
    </div>
    <div>5.先學 axios 基礎與封裝管理 API
      <a href="https://ithelp.ithome.com.tw/articles/10304656" target="_blank">
        https://ithelp.ithome.com.tw/articles/10304656
      </a> 
    </div>
    <div>6.[C#][ASP.NET] Web API 開發心得 (7) - 使用 Token 進行 API 授權驗證
      <a href="https://ithelp.ithome.com.tw/articles/10199102" target="_blank">
        https://ithelp.ithome.com.tw/articles/10199102
      </a> 
    </div>
    <div>7.Poy Chang Trial and Error
      <a href="https://blog.poychang.net/categories/" target="_blank">
        https://blog.poychang.net/categories/
      </a> 
    </div>
    <div>8.阿里巴巴向量圖標庫: iconfont
      <a href="https://www.iconfont.cn/" target="_blank">
        https://www.iconfont.cn/
      </a> 
    </div>
    <div>9.VueUse 中文文檔
      <a href="https://vueuse.pages.dev/" target="_blank">
        https://vueuse.pages.dev/
      </a> 
    </div>
    <div>9.vue3 is我意想不到的用法
      <a href="https://segmentfault.com/a/1190000044532342" target="_blank">
        https://segmentfault.com/a/1190000044532342
      </a> 
    </div>
    <div>10.Vue3 動態組件 標籤和:is 的用法
      <a href="https://blog.csdn.net/kuang_nu/article/details/128834690" target="_blank">
        https://blog.csdn.net/kuang_nu/article/details/128834690
      </a>
      <button @click="show1 = !show1">Toggle</button>
      <Transition>
        <!-- <div v-if="show">hello</div> -->
        <div v-if="show1"><Vue3_is_10 /></div>
      </Transition>
    </div>
    <div>11.Vue3 h函數的使用(必看)
      <a href="https://www.bilibili.com/video/BV166421Z7nU/" target="_blank">
        https://www.bilibili.com/video/BV166421Z7nU/
      </a>
      <button @click="show2 = !show2">Toggle</button>
      <Transition>
        <!-- <div v-if="show">hello</div> -->
        <div v-if="show2"><vue3_is_11 /></div>
      </Transition>
    </div>
    <div>12.Master xUnit Like A Pro in Under 10 Minutes!
      <a href="https://www.youtube.com/watch?v=rohq-Wqj0yI" target="_blank">
        https://www.youtube.com/watch?v=rohq-Wqj0yI
      </a>
    </div>
    <div>13.Native UI - 表單
      <a href="https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue" target="_blank">
        https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue
      </a>
    </div>
    <div>14.Vue3 如何用 defineModel 實作 props/ emit 的父子元件傳值，讓傳值變得更方便簡單
      <a href="https://muki.tw/vmodel-definemodel-props-emit/" target="_blank">
        https://muki.tw/vmodel-definemodel-props-emit/
      </a>
    </div>
    <div>15.Vue3 獲取子組件dom
      <a href="https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D" target="_blank">
        https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D
      </a>
    </div>
    <div>16.Quartz與Cron表達式管理後台任務執行
      <a href="https://www.bilibili.com/video/BV1G94y1b7JH/?vd_source=1a5937a80fc962029ba6a7b9ee9a1654" target="_blank">
        https://www.bilibili.com/video/BV1G94y1b7JH/?vd_source=1a5937a80fc962029ba6a7b9ee9a1654
      </a>
      <a href="https://www.youtube.com/watch?v=iD3jrj3RBuc&t=118s" target="_blank">
        Scheduling Background Tasks In .NET With Quartz-https://www.youtube.com/watch?v=iD3jrj3RBuc&t=118s
      </a>

      <button @click="show16 = !show16">Toggle</button>
      <Transition>
        <!-- <div v-if="show">hello</div> -->
        <div v-if="show16"><quartz_16 /></div>
      </Transition>
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