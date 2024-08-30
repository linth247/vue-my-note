<script setup>
// import {getCategoryAPI} from '@/apis/category'
// import { ref, onMounted } from 'vue'
// import {useRoute} from 'vue-router'
// import {getBannerAPI} from '@/apis/home'
// import { onBeforeRouteUpdate } from 'vue-router'


// import GoodsItem from '../Home/components/GoodsItem.vue'
// import { useBanner } from './composables/useBanner'
// import { useCategory } from './composables/useCategory'

// const { bannerList } = useBanner()
// const { categoryData } = useCategory()

// //獲取數據
// const categoryData = ref([])
// const route = useRoute()
// const getCategory = async(id=route.params.id) =>{
//     // const res = await getCategoryAPI(route.params.id)
//     const res = await getCategoryAPI(id)
//     categoryData.value = res.result
// }

// onMounted(() => getCategory())

// // 目標：路由參數變化的時候，可以把分類數據接口重新發送
// onBeforeRouteUpdate((to)=> {
//   console.log('路由變化了')
//   // 存在問題：使用最新的路由參數請求最新的分類數據
//   console.log(to)
//   getCategory(to.params.id)
// })

// 獲取banner
// const bannerList = ref([])

// const getBanner = async() => {
// 	const res = await getBannerAPI({
// 		distributionSite: '2'
// 	})
// 	// console.log(res)
// 	bannerList.value = res.result
// }

// onMounted(() => getBanner())


</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
          <!-- <el-breadcrumb-item>居家</el-breadcrumb-item> -->
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 輪播圖 -->
			<div class="home-banner">
				<el-carousel height="500px">
					<!-- <el-carousel-item v-for="item in 4" :key="item"> -->
					<el-carousel-item v-for="item in bannerList" :key="item.id">
						<!-- <img src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg" alt=""> -->
						<img :src="item.imgUrl" alt="">
					</el-carousel-item>
				</el-carousel>
			</div>
      <!-- 全部分類 -->
      <div class="sub-list">
        <h3>全部分類</h3>
        <ul>
          <li v-for="i in categoryData.children" :key="i.id">
            <!-- <RouterLink to="/"> -->
            <RouterLink :to="`/category/sub/${i.id}`">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
.home-banner {
  width: 1240px;
  height: 500px;
  // position: absolute;
  // left: 0;
  // top: 0;
	margin: 0 auto;
  // z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>