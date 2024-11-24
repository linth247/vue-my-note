<script setup>
import toTop from "@/UI/toTop.vue";
import { ref } from "vue";
// import { colorEvent } from 'v3-color-picker';

toTop.scrollToTop =  true;

const content = `
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; font-size: 14px;">
    <pre>
     ZhaoxiPotal.Common
     
     Db/DBContext.cs
     =============================================================
     namespace ZhaoxiPotal.Common.Db
     {
         /// <summary>
         /// 數據庫連接對象
         /// </summary>
         public class DbContext
         {
             public static SqlSugarClient db = new SqlSugarClient(new ConnectionConfig()
             {
                 ConnectionString = "Data Source=127.0.0.1;Initial Catalog=Web;User ID=Web;Password=123456;
                 MultipleActiveresultSets=True;encrypt=true;trustservercertificate=true", // 連接字符串
                 DbType = DbType.SqlServer, // 數據庫類型
                 IsAutoCloseConnection = true, // 不設成true要手動close
             });
             }
         }
         
     MemoryHelper.cs
     =============================================================
     using Microsoft.Extensions.Caching.Memory;
     using System;
     using System.Collections.Generic;
     using System.Linq;
     using System.Text;
     using System.Threading.Tasks;
     
     namespace ZhaoxiPotal.Common
     {
         public class MemoryHelper
         {
             private static IMemoryCache _memoryCache = null;
     
             static MemoryHelper()
             {
                 if(_memoryCache == null)
                 {
                     _memoryCache = new MemoryCache(new MemoryCacheOptions());
                 }
             }
     
             public static void SetMemory(string key, object value, int expireMins)
             {
                 _memoryCache.Set(key, value, TimeSpan.FromMinutes(expireMins));
             }
     
             public static object GetMemory(string key)
             {
                 return _memoryCache.Get(key);
             }
         }
     }
     
     
     Tool.cs
     =============================================================
     using System.Drawing;
     using System.Drawing.Drawing2D;
     using System.Drawing.Imaging;
     using System.Security.Policy;
     
     namespace ZhaoxiPotal.Common
     {
         public class Tools
         {
             /// <summary>
             /// 生成驗證碼的字符串
             /// </summary>
             /// <returns></returns>
             public static string CreateValidateString()
             {
                 //準備一組供驗證碼展示的數據
                 string chars = "abcdefghijklmnopqrstuvwxyz";
                 Random r = new(DateTime.Now.Millisecond);
                 string validateString = "";
                 int length = 4;
                 for(int i = 0; i < length; i++)
                 {
                     validateString += chars[r.Next(chars.Length)];
                 }
                 return validateString;
             }
     
             public static Byte[] CreateValidateCodeBuffer(string validateCode)
             {
                 //bmp -> 位圖
                 //1. 創建畫布，設置畫布的長寬
                 using Bitmap bitmap = new(200, 60);
     
                 //2. 創建畫筆，告訴畫筆在哪個畫布上畫畫
                 Graphics graphics = Graphics.FromImage(bitmap);
                 graphics.Clear(Color.White); // 用白色覆蓋畫布，並清除畫上所有的內容
     
                 //回家作業
                 //設置字體的參數(設置字體的名稱，大小，粗細以及斜體)
                 Font font = new("Consolas", 12, FontStyle.Bold | FontStyle.Italic);
                 //通過graphics.MeasureString方法計算字符串的長度
                 var size = graphics.MeasureString(validateCode, font);
                 //通過長生成新的畫布
                 //1.98 Convert.ToInt32(1.98) = 1
                 //向上取整：天花板函數；向下取整：地板函數
                 using Bitmap bitmapText = new(Convert.ToInt32(Math.Ceiling(size.Width)), 
                   Convert.ToInt32(Math.Ceiling(size.Height)));
                 //將文字寫入，生成圖片
                 Graphics graphicsText = Graphics.FromImage(bitmapText);
     
                 //將圖片縮放放到原畫布上
     
                 //3. 配置畫圖參數
                 //3.1 設置顏色刷范圍參數
                 Rectangle rf = new(0, 0, bitmap.Width, bitmap.Height);
                 //3.2 設置免子的顏色(設置為漸變)
                 LinearGradientBrush brush = new(rf, Color.Red, Color.DarkBlue, 1.2f, true);
                 //LinearGradientBrush brush = new(rf, Color.Orange, Color.DarkBlue, 0.2f, true);
     
                 //4. 將字符串繪制到場景中
                 graphicsText.DrawString(validateCode, font, brush, 0, 0);
     
                 graphics.DrawImage(bitmapText, 10, 10, 190, 50);
                 //graphics.DrawImage(bitmapText, 0, 0, 190, 50);
                 //5. 將圖片放到緩沖區中
                 //5.1 創建一個定於保存圖片的緩沖器
                 MemoryStream memoryStream = new();
                 //5.2 把圖片保存到緩沖區
                 bitmap.Save(memoryStream, ImageFormat.Jpeg);
     
                 //6. 這個時候圖片已經在緩沖區了，bitmap對象自然沒有用了，卸磨殺驢之
                 // bitmap.Dispose()
                 return memoryStream.ToArray();
             }
     
         }
     }
     
     ZhaoxiPotal.Model
     Entities/Users.cs
     =============================================================
     using SqlSugar;
     using System;
     using System.Collections.Generic;
     using System.Linq;
     using System.Text;
     using System.Threading.Tasks;
     
     namespace ZhaoxiPotal.Model.Entities
     {
         public class Users
         {
             [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
             public Guid Id { get; set; }
             //public int UserId { get; set; }
             public string QQ { get; set; }
             public string Mobile { get; set; }
             public string PassWord { get; set; }
             public string Name { get; set; }
             public string NickName { get; set; }
             public DateTime RegDate { get; set; }
             public int LoginNum { get; set; }
             public DateTime? LastLoginTime { get; set; }
             public byte UserType { get; set; }
             public string UserSex { get; set; }
             public byte Status { get; set; }
             public DateTime CreateTime { get; set; }
             public int CreatorId { get; set; }
             public DateTime? LastModifyTime { get; set; }
             public int? LastModifierId { get; set; }
     
     
         }
     }
     
     Enum/EnumUserType.cs
     =============================================================
     using System;
     using System.Collections.Generic;
     using System.Linq;
     using System.Text;
     using System.Threading.Tasks;
     
     namespace ZhaoxiPotal.Model.Enum
     {
         public enum EnumUserType
         {
             普通用戶 = 1,
             VIP用戶 = 2
         }
     }
     
     
     Courses.cs
     =============================================================
     namespace ZhaoxiPotal.Model
     {
         public class Courses
         {
             public int Id { get; set; }
             public string Name { get; set; }
             public string Path { get; set; }
             public string ValidCode { get; set; }
             public string Content { get; set; }
         }
     }
     
     
     ZhaoxiPotal.Service
     
     Config/AutoMapperConfigs.cs
     =============================================================
     using AutoMapper;
     using System;
     using System.Collections.Generic;
     using System.Linq;
     using System.Text;
     using System.Threading.Tasks;
     using ZhaoxiPotal.Model.Entities;
     using ZhaoxiPotal.Service.User.Dto;
     
     namespace ZhaoxiPotal.Service.Config
     {
         /// <summary>
         /// 管理映射關系
         /// </summary>
         public class AutoMapperConfigs : Profile
         {
             public AutoMapperConfigs()
             {
                 CreateMap<Users, UserDto>();
                 CreateMap<UserDto, Users>();
                 CreateMap<InputUserDto, Users>();
             }
         }
     }
     
     User/Dto/InputUserDto.cs
     =============================================================
     using System;
     using System.Collections.Generic;
     using System.Linq;
     using System.Text;
     using System.Threading.Tasks;
     
     namespace ZhaoxiPotal.Service.User.Dto
     {
         public class InputUserDto
         {
             public string QQ { get; set; }
             public string Mobile {  get; set; }
             public string PassWord {  get; set; }
             public string Name {  get; set; }
             public string UserSex {  get; set; }
             public string ValidateKey {  get; set; }
             public string ValidateCode {  get; set; }
     
         }
     }
     
     User/Dto/LoginDto.cs
     =============================================================
     using System;
     using System.Collections.Generic;
     using System.Linq;
     using System.Text;
     using System.Threading.Tasks;
     
     namespace ZhaoxiPotal.Service.User.Dto
     {
         public class LoginDto
         {
             public string QQ { get; set; }
             public string PassWord { get; set; }
         }
     }
     
     User/Dto/UserDto.cs
     =============================================================
     using System;
     using System.Collections.Generic;
     using System.Linq;
     using System.Text;
     using System.Threading.Tasks;
     
     namespace ZhaoxiPotal.Service.User.Dto
     {
         public class UserDto
         {
             public string QQ {  get; set; }
             public string Mobile { get; set; }
             public string NickName {  get; set; }
             public DateTime RegDate { get; set; }
             public DateTime? LastLoginTime { get; set; }
             public byte UserType { get; set; }
             public string UserSex {  get; set; }
             public byte Status {  get; set; }
             public DateTime? CreateTime { get; set; }
         }
     }
     
     
     IUserService.cs
     =============================================================
     using System;
     using System.Collections.Generic;
     using System.Linq;
     using System.Text;
     using System.Threading.Tasks;
     using ZhaoxiPotal.Model;
     using ZhaoxiPotal.Model.Entities;
     using ZhaoxiPotal.Service.User.Dto;
     
     namespace ZhaoxiPotal.Service.User
     {
         public interface IUserService
         {
             /// <summary>
             /// 登入
             /// </summary>
             /// <param name="login"></param>
             /// <returns></returns>
             Task<Users> CheckLogin(LoginDto login);
     
             //註冊
     
             UserDto AddUser(InputUserDto input);
     
             /// <summary>
             /// 獲取VIP課程
             /// </summary>
             /// <returns></returns>
             List<Courses> GetCourses();
              
         }
     }
     
     UserService.cs
     =============================================================
     
     using AutoMapper;
     using SqlSugar;
     using System;
     using System.Collections.Generic;
     using System.Linq;
     using System.Text;
     using System.Threading.Tasks;
     using ZhaoxiPotal.Common.Db;
     using ZhaoxiPotal.Model;
     using ZhaoxiPotal.Model.Entities;
     using ZhaoxiPotal.Service.User.Dto;
     
     namespace ZhaoxiPotal.Service.User
     {
         
         public class UserService : IUserService
         {
             private readonly IMapper _mapper;
             public UserService(IMapper mapper)
             {
                 _mapper = mapper;
             }
             /// <summary>
             /// 登入
             /// </summary>
             /// <param name="login"></param>
             /// <returns></returns>
             public async Task<Users> CheckLogin(LoginDto login)
             {
                 return await DbContext.db.Queryable<Users>().FirstAsync(m => m.QQ.Equals(login.QQ) && m.PassWord.Equals(login.PassWord));
             }
     
             /// <summary>
             /// 註冊
             /// </summary>
             /// <param name="input"></param>
             /// <returns></returns>
             /// <exception cref="Exception"></exception>
             public UserDto AddUser(InputUserDto input)
             {
                 Users user = TransInputDto(input);
                 if (!DbContext.db.Queryable<Users>().Any(m => m.QQ.Equals(input.QQ) || m.Mobile.Equals(input.Mobile)))
                 {
                     DbContext.db.Insertable(user).ExecuteCommand();
                     return _mapper.Map<UserDto>(user);
                 }
                 else throw new Exception("QQ 或者 手機號已存在");
             }
             //public UserDto GetUserDto(int userId)
             //{
             //    var user = DbContext.db.Queryable<Users>().First(p => p.UserId == userId);
             //    var userDto = _mapper.Map<UserDto>(user); 
             //    return userDto;
             //}
     
             private Users TransInputDto(InputUserDto input)
             {
                 var user = _mapper.Map<Users>(input);
                 var date = DateTime.Now;
                 //user.Id = Guid.NewGuid();
                 user.RegDate = date;
                 user.CreateTime = date;
                 user.LastModifyTime = date;
                 user.LoginNum = 0;
                 user.UserType = 1;
                 user.Status = 1;
                 user.CreatorId = 1;
                 user.LastModifierId = 1;
                 return user;
             }
     
             public List<Courses> GetCourses()
             {
                 List<Courses> res = new List<Courses> ();
                 res.Add(new Courses() { Id = 1, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 res.Add(new Courses() { Id = 2, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 res.Add(new Courses() { Id = 3, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 res.Add(new Courses() { Id = 4, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 res.Add(new Courses() { Id = 5, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 res.Add(new Courses() { Id = 6, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 return res;
             }
         }
     }


     ZhaoxiPotal.WepAPI

     Propertis/launchSettings.json
     =============================================================

     {
       "$schema": "http://json.schemastore.org/launchsettings.json",
       "iisSettings": {
         "windowsAuthentication": false,
         "anonymousAuthentication": true,
         "iisExpress": {
           "applicationUrl": "http://localhost:24519",
           "sslPort": 44368
         }
       },
       "profiles": {
         "http": {
           "commandName": "Project",
           "dotnetRunMessages": true,
           "launchBrowser": true,
           "launchUrl": "swagger",
           "applicationUrl": "http://localhost:5088",
           "environmentVariables": {
             "ASPNETCORE_ENVIRONMENT": "Development"
           }
         },
         "https": {
           "commandName": "Project",
           "dotnetRunMessages": true,
           "launchBrowser": true,
           "launchUrl": "swagger",
           "applicationUrl": "https://localhost:7079;http://localhost:5259",
           "environmentVariables": {
             "ASPNETCORE_ENVIRONMENT": "Development"
           }
         },
         "IIS Express": {
           "commandName": "IISExpress",
           "launchBrowser": true,
           "launchUrl": "swagger",
           "environmentVariables": {
             "ASPNETCORE_ENVIRONMENT": "Development"
           }
         }
       }
     }

     CfgFile/log4net.Config
     =============================================================
     <"?xml version="1.0" encoding="utf-8" ?>
     <"log4net>
     	<"!-- Define some outpu appenders -->
     	<"appender name="DefaultAppender" type="log4net.Appender.RollingFileAppender">
     		<"!--file value="LogFiles/Root1/"/>存放log路徑–-->
     		<"file value="log4/log.txt" />
     
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
     			<"!--內容格式-->
     			<"conversionPattern value="%date [%thread] %-5level  %logger - %message%newline" />
     		<"/layout>
     	<"/appender>
     	<"appender name="WebAppender" type="log4net.Appender.RollingFileAppender">
     		<"!-- 存放log路徑 -->
     		<"file value="LogFiles/Web1/"/>
     		<"staticLogFileName value="false"/>
     		<"appendToFile value="true"/>
     		<"rollingStyle value="Composite"/>
     		<"maxSizeRollBackups value="-1" />
     		<"maximumFileSize value="5KB" />
     		<"!--–log檔的命名–-->
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

     Controller/LoginController.cs
     =============================================================
     using Microsoft.AspNetCore.Http;
     using Microsoft.AspNetCore.Mvc;
     using ZhaoxiPotal.Common;
     using ZhaoxiPotal.Service.User;
     using ZhaoxiPotal.Service.User.Dto;
     using ZhaoxiPotal.WepAPI.Utility;
     
     namespace ZhaoxiPotal.WepAPI.Controllers
     {
         [Route("[controller]/[Action]")]
         [ApiController]
         public class LoginController : ControllerBase
         {
             private readonly IUserService _userService;
             private readonly ICustomJWTService _iJWTService;
     
             public LoginController(IUserService userService, ICustomJWTService iJWTService)
             {
                 _userService = userService;
                 _iJWTService = iJWTService;
             }
     
             // 驗證碼
             [HttpGet]
             public IActionResult GetValidateCodeImages(string t)
             {
                 System.Console.WriteLine(t);
                 var validateCodeString = Tools.CreateValidateString();
                 //將驗證碼記入緩存中
                 MemoryHelper.SetMemory(t, validateCodeString, 1);
     
                 //接收圖片返回的二進制流
                 byte[] buffer = Tools.CreateValidateCodeBuffer(validateCodeString);
                 return File(buffer, @"image/jpeg");
             }
     
     
             //登入
             [HttpGet("{qq}/{pwd}/{validateKey}/{validateCode}")]
             public string CheckLogin(string qq, string pwd, string validateKey, string validateCode)
             {
                 var currCode = MemoryHelper.GetMemory(validateKey);
                 if (currCode == null)
                 {
                     return "";
                 }
                 if (currCode.ToString() == validateCode)
                 {
                     LoginDto loginDto = new LoginDto();
                     loginDto.QQ = qq;
                     loginDto.PassWord = pwd;
                     var user = _userService.CheckLogin(loginDto).Result;
                     if (user != null)
                     {
                         return _iJWTService.GetToken(user);
                         //return "";
                     }
                     else
                     {
                         return "";
                     }
     
                 }
                 else return "";
             }
         }
     }

     Controller/UserController.cs
     =============================================================
     using Microsoft.AspNetCore.Authorization;
     using Microsoft.AspNetCore.Http;
     using Microsoft.AspNetCore.Mvc;
     using System.Runtime.CompilerServices;
     using ZhaoxiPotal.Model;
     using ZhaoxiPotal.Model.Enum;
     using ZhaoxiPotal.Service.User;
     using ZhaoxiPotal.Service.User.Dto;
     
     namespace WepAPI.Controllers
     {
         [Route("[controller]/[Action]")]
         [ApiController]
         public class UserController : ControllerBase
         {
             private readonly ILogger<UserController> _logger;
             public IUserService _userService;
             public UserController(ILogger<UserController> logger, IUserService userService)
             {
                 _logger = logger;
                 _userService = userService;
             }
     
             [HttpGet]
             public string Get()
             {
                 _logger.LogInformation("這是一個Get請求！");
                 return "這是一個Get請求。";
             }
     
     
             //用戶註冊
             [HttpPost]
             public ActionResult<UserDto> RegistUser([FromBody] InputUserDto input)
             {
                 try
                 {
                     var res = _userService.AddUser(input);
                     return res;
                 }
                 catch (Exception ex)
                 {
                     JsonResult result = new JsonResult(ex)
                     {
                         StatusCode = 201,
                     };
                     return result;
                 }
             }
     
     
             // Aop面向切面編程
             // 面向切面編程的最主要的使用場景，就是將業務分離，保證方法中業的純潔性
             [HttpGet]
             [Authorize]  // 這是一個特性
             public List<Courses> GetCourses()
             {
                 _logger.LogInformation("進入GetCourses請求...");
                 int userType = Convert.ToInt32(HttpContext.User.Claims.ToList()[3].Value); // UserType
                 if(userType == (int)EnumUserType.VIP用戶)
                 {
                     return _userService.GetCourses();
                 }
                 return new List<Courses>();
             }
         }
     }
     
     Utility/ICustomJWTService.cs
     =============================================================
     using ZhaoxiPotal.Model.Entities;
     
     namespace ZhaoxiPotal.WepAPI.Utility
     {
         public interface ICustomJWTService
         {
             //獲取token
             string GetToken(Users users);
         }
     }

     Utility/CustomJWTService.cs
     =============================================================
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
             #endregion
     
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
                     new Claim("nickName", users.NickName),
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

     Utility/JWTTokenOptions.cs
     =============================================================
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



    </pre>
  </div>
`

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
  
  <div></div>
  <input v-model="colorOptions.value">
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