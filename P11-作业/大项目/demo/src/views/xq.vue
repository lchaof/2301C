<template>
    <div class="xq">

        <div class="txt">
            <img :src="goodsxq.pic" alt="" class="xqimg">
            <p style="color: #29a081;"><span>￥</span><span style="font-size: 19px;"><b>{{ goodsxq.amountSingle }}</b></span>
            </p>
            <p style="color: #ccc; font-size: 13px; padding: 10px 0 10px 0;">价格&ensp;￥<s>{{ goodsxq.amountSingleBase }}</s>
            </p>
            <p style="padding: 10px 0 10px 0;">{{ goodsxq.goodsName }}</p>
            <p style="color: #ccc;">{{ goodsxq.goodsName }}</p>
        </div>
        <div class="flex" style="color: #ccc;">
            <div class="left">运费&ensp;包邮</div>
            <div class="right">剩余{{ goodsxq.categoryId }}</div>
        </div>
        <div class="lq" style="margin-top: 10px;">
            <div>领券</div>
            <div><van-icon name="arrow" /></div>

        </div>

        <div class="bottom">
            <van-action-bar>
                <van-action-bar-icon icon="thumb-circle-o" text="首页" />
                <van-action-bar-icon icon="chat-o" text="客服" />
                <van-action-bar-icon icon="shopping-cart-o" text="购物车" />
                <van-action-bar-button color="#daf6f0" type="warning" text="加入购物车" />
                <van-action-bar-button color="#20a884" type="danger" text="立即购买" />
            </van-action-bar>
        </div>

    </div>
</template>
  
<script lang="ts" setup>

import { queryxq } from '../../axios/http'
import { useRoute } from 'vue-router';
import { ref, reactive } from 'vue';

const router = useRoute()

const info = ref({
    goodsId: router.query.id,
    page: 1,
    pageSize: 1
})

const goodsxq = <any>ref({})

const getXq = () => {

    console.log(info.value);
    queryxq(info.value).then((res: any) => {
        console.log(res);
        goodsxq.value = res.data.result[0].goods
        // console.log(goodsxq.value);


    })

}
getXq()


</script>
  
<style lang="scss" scoped>
.xqimg {
    width: 100%;
}

.xq {
    background-color: #f8f8f8;
}

.txt {
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
}

.flex {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}

.lq {
    background-color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
}
</style>
  