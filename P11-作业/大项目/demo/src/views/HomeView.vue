<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#20a881">
        <van-swipe-item v-for="item, index in bannerList" :key="index">
          <img :src="item.picUrl" alt="" class="bannerimg">
        </van-swipe-item>

      </van-swipe>
    </div>
    <!-- 商品列表 -->
    <div class="goodslisttext">
      <span style="font-size: 12px;">//////</span>&ensp;商品列表&ensp;<span style="font-size: 12px;">//////</span>
    </div>
    <!-- 商品列表 -->
    <ul class="goodsul">
      <li v-for="item, index in goodsList" :key="item.id">
        <img :src="item.pic" alt="" class="goodsimg">
        <div class="goodstext">
          <div class="goodstexta">{{ item.name }}</div>
          <div class="price">
            <div class="priceleft">
              <span class="pricea">
                ￥<span style="font-size: 20px;">{{ item.minPrice }}</span>&ensp;
              </span>
              <span class="priceb"><s>￥{{ item.originalPrice }}</s></span>
            </div>
            <div class="priceright">
              <button class="goodsadd">购买</button>
            </div>
          </div>
        </div>
        <div class="goodstop" v-show="item.recommendStatusStr == '推荐'">推荐</div>
      </li>
    </ul>



    <!-- 导航栏 -->
    <Mytabbar></Mytabbar>

  </div>
</template>

<script lang="ts" setup>
import Mytabbar from '@/components/mytabbar.vue';
// 引入接口
import { querybanner, querygoods } from '../../axios/http'
import { ref } from 'vue'

// 轮播图数组
const bannerList = <any>ref([])
// 首页商品数组
const goodsList = <any>ref([])
// 商品数组参数
const goodscs = ref({
  page: 1,
  pageSize: 10
})


// 获取轮播图数据
const getBanner = () => {
  querybanner().then((res: any) => {
    // console.log(res);
    bannerList.value = res.data

  })
}
getBanner()

const getGoodsList = () => {
  querygoods(goodscs.value).then((res: any) => {
    console.log(res);
    goodsList.value = res.data.result
  })
}
getGoodsList()
</script>

<style lang="scss" scoped>
.home {
  background-color: #f8f8f8;
}

.bannerimg {
  width: 100%;
  height: 193.5px;
}

.goodslisttext {
  background-color: #fff;
  padding: 15px;
  text-align: center;
}

.goodsul {
  padding: 0px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 40px;

  li {
    width: 49%;
    list-style: none;
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 10px;
    position: relative;

    .goodsimg {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }

    .goodstext {
      padding: 0px 10px 0px 10px;
    }

    .goodstexta {
      height: 40px;
      font-size: 15px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      word-break: break-all;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;

    }

    .price {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;

      .pricea {

        color: #2ba685;

      }

      .priceb {
        color: #989898;
        font-size: 13px;
        font-weight: 700;
      }

      .goodsadd {
        background: none;
        border: 1px solid #26a684;
        color: #26a684;
        padding: 3px 5px 3px 5px;
        border-radius: 5px;
      }
    }

    .goodstop {
      position: absolute;
      top: 10px;
      left: 0px;
      font-size: 12px;
      color: #fff;
      padding: 3px 5px;
      background-color: #ec0a23;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
}
</style>
