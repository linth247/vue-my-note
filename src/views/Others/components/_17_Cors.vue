<script setup>
import toTop from "@/UI/toTop.vue";
toTop.scrollToTop =  true;

const content = `
    <div id="Vite_to_github" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
      <pre>
//===============================================================================================//
在Program.cs
加上

builder.Services.AddCors(c=>c.AddPolicy("any", p=>p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));

app.UseCors();

在Controller裡 加上
[EnableCors("any")]

在html
<"div id="app">
    {{userName}}
    <"button @click="onGetValue">獲取數據<"/button>
<"/div>
<"script>
    const { createApp, ref } = Vue;
    const app = createApp({
        setup(){
            const userName = ref("Ace");
            const onGetValue = () => {
                axios.post("http://localhost:5117/api/Test/Get/666-ace")
                    .then(res=>{
                        userName.value = res.data;
                    })
                return { userName, onGetValue };
            }
        }
    })
<"/script>

    </pre>
  </div>
`
</script>

<template>
  <div v-html="content"></div>
  <toTop></toTop>
</template>

<style scoped lang="scss">

</style>