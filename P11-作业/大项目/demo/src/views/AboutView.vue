<template>
  <div class="about">
    <van-row>
      <van-col span="6" style="height: 100vh;">
        <van-sidebar v-model="active">
          <van-sidebar-item v-for="item, index in flList" :key="item.id" :title="item.name" />

        </van-sidebar>
      </van-col>
      <van-col span="18">
        <ul>
          <li v-for="item, index in goodsList" :key="item.id">
            <img :src="item.pic" alt="">
            <p>{{ item.name }}</p>
            <div style="color: #52a186;">￥{{ item.minPrice }}</div>
          </li>
        </ul>
      </van-col>

    </van-row>



    <Mytabbar></Mytabbar>

  </div>
</template>

<script lang="ts" setup>
import Mytabbar from '@/components/mytabbar.vue';
import { queryflone, querygoods } from '../../axios/http'
import { ref, reactive } from 'vue';

const flList = <any>ref([])
const active = ref(0);
const goodscs = ref({
  page: 1,
  pageSize: 10
})

const goodsList = <any>ref([])


const getFl = () => {
  queryflone().then((res: any) => {
    console.log(res);
    flList.value = res.data
  })
}
getFl()

const getgoods = () => {
  querygoods(goodscs.value).then((res: any) => {
    console.log(res);
    goodsList.value = res.data.result
  })
}
getgoods()



</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;

  li {
    width: 48%;

    img {
      width: 100%;
    }
    p{
      font-size: 13px;
    }
  }
}
</style>
