<script setup>

const temp = `
    https://www.youtube.com/watch?v=LlYhPO8Ti2U


    1.建立資料庫
    CREATE DATABASE MyWorldDB

    2.建立資料表
    CREATE TABLE Beach(
      Id int IDENTITY(1,1) NOT NULL,
      BeachName varchar(200),
      Place varchar(200),
      ImageUrl varchar(1000)
      CONSTRAINT PK_Beach_Id PRIMARY KEY(Id)
    )

    npm init vue@latest

    dotnet new webapi -controllers -n Dot7.API.CRUD

    dotnet add package Microsoft.EntityFrameworkCore --version 9.0.0-preview.7.24405.3
    dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 9.0.0-preview.7.24405.3


    dotnet watch run

    vue3-crud-sample> npm i axios


    //program.cs
    builder.Services.AddCors(options => {
        options.AddPolicy("Cors", p => {
            p.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
    });

    app.UseCors("Cors");


    <form @submit.prevent="addBeach">


    https://picsum.photos/id/237/300/200

    const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
    // or
    const myModalAlternative = new bootstrap.Modal('#myModal', options)


      //----------------------------------------------------------------
        "dependencies": {
            "axios": "^1.7.4",
            "vue": "^3.4.29",
            "vue-router": "^4.3.3"
          },
          "devDependencies": {
            "@vitejs/plugin-vue": "^5.0.5",
            "vite": "^5.3.1"
          }
`;

</script>
<template>
  <!-- <div v-html="temp"></div> -->
  <div>這是_Beach_Info</div>
  <div class="content">
    <pre>
      {{ temp }}
    </pre>
  </div>
  
</template>

<style scoped lang="scss">
  .content {
    // display:flex; 
    height: 100%;
    background-color: #282923; 
    color:#c1cccc; 
    font-size: 1em;
    div{
      margin: 20px;
    }
  }
</style>