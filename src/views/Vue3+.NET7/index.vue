<script setup>
import toTop from "@/UI/toTop.vue";
import { ref } from "vue";
// import { colorEvent } from 'v3-color-picker';

toTop.scrollToTop =  true;

const content = `
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; font-size: 14px;">
    <pre>
	//===============================================================================================//
	<a href="https://www.bilibili.com/video/BV16s4y1m7bd?vd_source=1a5937a80fc962029ba6a7b9ee9a1654&spm_id_from=333.788.videopod.episodes&p=25" target="_blank">
	https://www.bilibili.com/video/BV16s4y1m7bd?vd_source=1a5937a80fc962029ba6a7b9....
	</a>

	1.從零開始新建一個webapi項目，通過swagger查看
	2.配置Log4Net實現日誌紀錄，輸出文本日誌到bin目錄
		a.引內dll程序包 (log4Net, Microsoft.Extensions.Logging.Log4Net.AspNetCore)

		log4net
		Nuget安裝
		Log4Net
		Microsoft.Extensions.Logging.Log4Net.AspNetCore

	b.添加配置文件到項目log4et Config 

	新增資料夾CfgFile
	新增檔案log4net.Config

	<"?xml version="1.0" encoding="utf-8" ?>
	<"log4net>
	<"!-- Define some outpu appenders -->
	<"appender name="DefaultAppender" type="log4net.Appender.RollingFileAppender">
		<"!--<"file value="LogFiles/Root1/"/><"!–存放log路徑–>-->
		<"file value="log4log.txt" />

		<"!-- 追加日誌內容 -->
		<"appendToFile value="true"/>
		
		<"!-- 防止多線程時不能寫Log，官方說線程非安全 -->
		<"lockingModel type="log4net.Appender.FileAppender+MinimalLock" />
		
		<"!-- 可以為:Once|Size|Date|Composite -->
		<"!-- Composite為Size和Date的組合 -->
		<"rollingStyle Composite="Date"/>
		
		<"!-- 當備份文件時，為文件名加的後綴 -->
		<"datePattern value="yyyyMMdd.TXT" />
		<"!--<datePattern value="yyyy-MM-dd.log"/><!–log檔的命名–>-->
		
		<"!-- 日誌最大個數，都是最新的 -->
		<"!-- rollingStyle節點為Size時，只能有value個日誌 -->
		<"!-- rollingStyle節點為Composite時，每天有value個日誌 -->
		<"maxSizeRollBackups value="20" />

		<"!-- 可用的單位:KB|MB|GB -->
		<"maximumFileSize value="3MB" />
		
		<"!-- 置為true，當前最新日誌文件名永遠file節中的名字 -->
		<"staticLogFileName value="true"/>
		
		<"filter type="log4net.Filter.LevelRangeFilter">
			<"param name="LevelMin" value="All" />	
			<"param name="LevelMax" value="FATAL" />	
		<"/filter>

		<"layout type="log4net.Layout.PatternLayout">
			<"!--<"!–內容格式–>-->
			<"conversionPattern value="%date [%thread] %-5level  %logger - %message%newline" />
		<"/layout>
	<"/appender>
	<"appender name="WebAppender" type="log4net.Appender.RollingFileAppender">
		<"!--<!-– 存放log路徑 -–>-->
		<"file value="LogFiles/Web1/"/>
		<"staticLogFileName value="false"/>
		<"appendToFile value="true"/>
		<"rollingStyle value="Composite"/>
		<"maxSizeRollBackups value="-1" />
		<"maximumFileSize value="5KB" />
		<"!--<!–-log檔的命名–>-->
		<"datePattern value="yyyy-MM-dd.log"/>
		<"layout type="log4net.Layout.PatternLayout">
			<"conversionPattern value="%-5p %date{yyyy/MM/dd HH:mm:ss} %-20c{1} %-20M %m%n" />
		<"/layout>
	<"/appender>
	<"root>
		<"level value="ALL"/>
		<"appender-ref ref="DefaultAppender"/>
	<"/root>
		<"logger name="Web">
			<"level value="INFO" />
			<"appender-ref ref="WebAppender"/>
		<"/logger>
	<"/log4net>

	檔案生成路徑：C:/codes/WebAPI/ZhaoxiPotal/WepAPI/WepAPI/bin/Debug/net8.0/log4/log.txt
	//===============================================================================================//

	c.全局配置
		Program.cs加上
		builder.Services.AddSwaggerGen();

		//日誌
		builder.Logging.AddLog4Net("CfgFile/log4net.Config");

	d.構造函數注入日誌服務

	新增UserController.cs
		[Route("[controller]/[Action]")]
		[ApiController]
		public class UserController : ControllerBase
		{
			private readonly ILogger<UserController> _logger;
			public UserController(ILogger<UserController> logger)
			{
				_logger = logger;
			}

			[HttpGet]
			public string Get()
			{
				_logger.LogInformation("這是一個Get請求！");
				return "這是一個Get請求。";
			}
	}

	2024-11-16 20:58:11,007 [1] INFO   Microsoft.Hosting.Lifetime - Now listening on: https://localhost:7079
	2024-11-16 20:58:11,019 [1] INFO   Microsoft.Hosting.Lifetime - Now listening on: http://localhost:5259
	2024-11-16 20:58:11,089 [1] INFO   Microsoft.Hosting.Lifetime - Application started. Press Ctrl+C to shut down.
	2024-11-16 20:58:11,094 [1] INFO   Microsoft.Hosting.Lifetime - Hosting environment: Development
	2024-11-16 20:58:11,098 [1] INFO   Microsoft.Hosting.Lifetime - Content root path: C:/codes/WebAPI/ZhaoxiPotal/WepAPI/WepAPI
	2024-11-16 20:59:01,143 [16] INFO   WepAPI.Controllers.UserController - 這是一個Get請求！



	//===========================================================================================
	3.登入/注冊功能分析，表設計
		登入：QQ、密碼、驗証碼
		注冊：暱稱、QQ、手機、性別、密碼、再次校驗密碼、驗証碼
		設計數據庫：User表


	新建資料表User
	參考Users資料表.sql
	CREATE TABLE [dbo].[Users](
		[Id] [int] NOT NULL,
		[Name] [nvarchar](50) NOT NULL,
		[QQ] [nvarchar](max) NULL,
		[Mobile] [nvarchar](max) NULL,
		[PassWord] [nvarchar](max) NULL,
		[NickName] [nvarchar](20) NULL,
		[RegDate] [datetime2](7) NULL,
		[LoginNum] [int] NULL,
		[LastLoginTime] [datetime2](7) NULL,
		[UserType] [tinyint] NULL,
		[UserSex] [nvarchar](max) NULL,
		[Status] [tinyint] NULL,
		[CreateTime] [datetime2](7) NULL,
		[CreateId] [int] NULL,
		[LastModifyTime] [datetime2](7) NULL,
		[LastModifiedId] [int] NULL,
		CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
	(
  	Id Asc
	)WITH ...
	) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

	//=======================================================================
	4.webapi對接數據庫，實現登入和注冊API接口(使用SqlSugar訪問數據庫)
	a.sql sugar的介紹與使用，訪問數據庫實現登入接口
	b.Automapper的作用和使用
		作用：實體類到dto的映射
		引入程序包：AutuMapper、AutoMapper.Extensions.Microsoft.DependencyInjection
		添加配置類：AutoMapperConfigs，管理映射關係
		//注入配置Automapper映射
		builder.Services.AddAutoMapper(typeof(AutoMapperConfigs));
	c.註冊的接口實現
					
	//=======================================================================
	5.驗證碼功能
	 為什麼要有驗證碼？一定程度上防止機器登錄，爬蟲讀取數據，惡意註冊等。
	 後端實現
	 前端刷新

	//=======================================================================
	6.前端Code展示，開發流程講解
	項目的搭建：
	   1.安裝Node.js，官網安裝最新穩定版即可(https://nodejs.org/en)
		 2.安裝vue腳手架，npm install -g @vue/cli
		 3.通過腳手架創建項目 vue create zhaoxiUI / npm create vite@latest /npm init vue@latest(小兔鮮用的)
		 4.安裝TypeScript vue add typescript
		 5.安裝SCSS npm install sass-loader --save、npm install node-sass --save
		 6.安裝element plus : npm install element-plus --save
		 7.安裝route：npm install vue-route@next --save

		 項目結構講解：
		 node_modules 模塊包
		 public 公共資源
		 src 項目目錄
		 assets 靜態資源
		 components 組件
		 App.vue 根組件
		 main.ts 根函數入口，全局配置生效的地方
		 package.json項目配置文件，項目的版本，模塊的版本等信息

		 結合輪播圖、組件的注冊和使用
		 結合菜單控件，路由的配置和使用

	7.帳號密碼註冊+驗證碼實現登入
	   前後端聯調，打通登錄註冊

	8.綁定JSON數據
	   通過axios讀取json腳本數據，並渲染到頁面

		 npm install axios --save
		 import asiox form "axios"

	9.後端接口權限驗證分析，與JWT實現認證和授權
			
	  JWT, 基於token的鑑權機制
		 不需要到服務端保存用戶的認證信息或者會話信息。
		 流程：
			 1.用戶使用用戶名密碼來請求服務器
			 2.服務器進行驗證用戶的信息
			 3.服務器通過驗證發送給用戶一個token
			 4.客戶端存儲token，並在每次請求時，附送上這個token，附帶在http請求的header裡
			 5.服務端驗證token值, 並返回數據


	10.新建API接口驗證權限，前端獲取token，請求時攜帶
	10.JWT實現認證和授權
	
		引入Microsoft.AspNetCore.Authentication.JwtBear
		搭建認證授權服務

		在ZhanxiPotal.WebAPI
		新增資料夾 Uility
		新增3個檔案
		CustomJWTService.cs
		ICustomJWTService.cs
		JWTTokenOptions.cs

		CustomJWTService.cs
		-------------------------------------------
		using Microsoft.Extensions.Options;
		using Microsoft.IdentityModel.Tokens;
		using System.IdentityModel.Tokens.Jwt;
		using System.Security.Claims;
		using System.Text;
		using ZhaoxiPotal.Model.Entities;

		namespace ZhaoxiPotal.WepAPI.Utility
		{
			public class CustomJWTService : ICustomJWTService
			{
				#region Option注入
				private readonly JWTTokenOptions _JWTTokenOptions;
				public CustomJWTService(IOptionsMonitor<JWTTokenOptions> jwtTokenOptions)
				{
					_JWTTokenOptions = jwtTokenOptions.CurrentValue;
				}

				/// <summary>
				/// 獲取token
				/// </summary>
				/// <param name="users"></param>
				/// <returns></returns>
				/// <exception cref="NotImplementedException"></exception>
				public string GetToken(Users users)
				{
					#region 有效載荷，大家可以自己寫，愛寫多少寫多少，盡量避免敏感信息
					var claims = new[]
					{
						new Claim("Id", users.Id.ToString()),
						new Claim("QQ", users.QQ),
						new Claim("Name", users.Name),
						new Claim("UserType", users.UserType.ToString()),
						new Claim("Mobile", users.Mobile.ToString()),
					};

						//需要加密：需要加密key
						//Nuget引入：Microsoft.IdentityModel.Tokens
						SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_JWTTokenOptions.SecurityKey));

						SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

						//Nuget引入：System.IdentityModel.Token.Jwt
						JwtSecurityToken token = new JwtSecurityToken(
							issuer: _JWTTokenOptions.Issuer,
							audience: _JWTTokenOptions.Audience,
							claims: claims,
							expires: DateTime.Now.AddMinutes(10), //5分鐘有效期
							signingCredentials: creds
						);

						string returnToken = new JwtSecurityTokenHandler().WriteToken(token);
						return returnToken;
						#endregion

					}
				}
		}

		ICustomJWTService.cs
		-----------------------------------------------
		using ZhaoxiPotal.Model.Entities;

		namespace ZhaoxiPotal.WepAPI.Utility
		{
				public interface ICustomJWTService
				{
						//獲取token
						string GetToken(Users users);
				}
		}

		JWTTokenOptions.cs
		-------------------------------------------
		namespace ZhaoxiPotal.WepAPI.Utility
		{
				public class JWTTokenOptions
				{
						public string Audience { set; get; }
						public string SecurityKey { set; get; }
						//public SigningCredentials Credentials {  set; get; }
						public string Issuer { set; get; }
				}
		}

		Program.cs
		//注冊JWT  (在日誌上面)
		builder.Services.Configure<JWTTokenOptions>(builder.Configuration.GetSection("JWTTokenOptions"));
		builder.Services.AddTransient<ICustomJWTService, CustomJWTService>();

		#region jwt校驗
		{
			//第二步，增加鑑權邏輯
			JWTTokenOptions tokenOptions = new JWTTokenOptions();
			builder.Configuration.Bind("JWTTokenOptions", tokenOptions);
			builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)//Scheme
					.AddJwtBearer(options => //這裡是配置的鑑權的邏輯
        	{
            options.TokenValidationParameters = new TokenValidationParameters
            {
                //JWT有一些默認的屬性，就是給鑑權時就可以篩選了
                ValidateIssuer = true, //是否驗證Issuer
                ValidateAudience = true, //是否驗證Audience
                ValidateLifetime = true, //是否驗證失效時間
                ValidateIssuerSigningKey = true, // 是否驗證SecurityKey
                ValidAudience = tokenOptions.Audience, //
                ValidIssuer = tokenOptions.Issuer, // Issuer, 這兩項和前面簽發jwt的設置一致
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenOptions.SecurityKey))//拿到SecurityKey
            };
        });
			}
	//添加跨域策略
	builder.Services.AddCors(options =>
	{
		options.AddPolicy("CorsPolicy", opt=>opt.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().WithExposedHeaders("X-Pagination"));
	});

	app.UseAuthorization();
	app.UseAuthentication();

	//使用跨域策略
	app.UseCors("CorsPolicy");
	app.MapControllers();
	
	配置	appsettings.json
	--------------------------------------
	"AllowedHosts": "*",
	"JWTTokenOpitons": {
	"Audience": "http://localhost:5088",
	"Issuer": "http://localhost:5088",
	"SecurityKey": "thisisaseritykeythisisaseritykeythisisaseritykeythisisaseritykeythisisaseritykeythisisaseritykeythisisaseritykey"
	}


	
	11.權限測試，更換登入帳號驗證權限
	12.發布和部署
    </pre>
  </div>
`

//color:#c1cccc
const activeColor = ref('#c1cccc')

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
  
  <div>Vue3+.NET7最新框架实战，手写电商管理后台 | 2023全新录制，前后分离架构(C#/.NET6/.NET Core)B1106</div>
  <input v-model="activeColor">
  <!-- <div v-html="content" :style="{ color: activeColor }"></div> -->
  <div v-html="content" :style="{ color: colorOptions.value }"></div>
  <toTop></toTop>

</template>

<style scoped lang="scss">
.demo {
  height: 50px;
  width: 50px;
}
</style>