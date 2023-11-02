<template>
    <div class="my">
        <div class="top1">
            <div class="top" @click="tz">
                <div class="yuan"></div>
                <p class="topa">登录/注册</p>
            </div>
        </div>
        <div class="nr">
            <div>
                <p style="font-weight: 700;">--</p>
                <p style="color: #a2a2a1; font-size: 13px;">积分</p>
            </div>
            <div>
                <p style="font-weight: 700;">--</p>
                <p style="color: #a2a2a1; font-size: 13px;">优惠券</p>
            </div>
            <div>
                <p style="font-weight: 700;">--</p>
                <p style="color: #a2a2a1; font-size: 13px;">余额</p>
            </div>
        </div>
        <div class="dd">
            <div class="ddtop">
                <p>我的订单</p>
                <p class="topa">查看全部订单
                    <van-icon name="arrow" />
                </p>
            </div>
            <div class="ddbottom">
                <div>
                    <p><van-icon name="pending-payment" style="font-size: 25px; margin-bottom: 5px;" /></p>
                    <p class="txt">代付款</p>
                </div>
                <div>
                    <p><van-icon name="tosend" style="font-size: 25px; margin-bottom: 5px;" /></p>
                    <p class="txt">待发货</p>
                </div>
                <div>
                    <p><van-icon name="logistics" style="font-size: 25px; margin-bottom: 5px;" /></p>
                    <p class="txt">待收货</p>
                </div>
                <div>
                    <p><van-icon name="comment-o" style="font-size: 25px; margin-bottom: 5px;" /></p>
                    <p class="txt">评价</p>
                </div>
                <div>
                    <p><van-icon name="after-sale" style="font-size: 25px; margin-bottom: 5px;" /></p>
                    <p class="txt">退款/售后</p>
                </div>
            </div>
        </div>

        <div class="gn">
            <div class="ddtop gntop">
                <p>常用功能</p>

            </div>
            <div class="gnbottom">
                <div>
                    <p><van-icon name="balance-o" style="font-size: 25px;" /></p>
                    <p style="font-size: 13px;">我的钱包</p>
                </div>
                <div>
                    <p><van-icon name="point-gift-o" style="font-size: 25px;" /></p>
                    <p style="font-size: 13px;">积分兑换</p>
                </div>
                <div>
                    <p><van-icon name="coupon-o" style="font-size: 25px;" /></p>
                    <p style="font-size: 13px;">优惠券</p>
                </div>
                <div>
                    <p><van-icon name="location-o" style="font-size: 25px;" /></p>
                    <p style="font-size: 13px;">收货地址</p>
                </div>
                <div>
                    <p><van-icon name="setting-o" style="font-size: 25px;" /></p>
                    <p style="font-size: 13px;">设置</p>
                </div>
                <div>
                    <p><van-icon name="sign" style="font-size: 25px;" color="#ffc700" /></p>
                    <p style="font-size: 13px;">主题</p>
                </div>
                <div>
                    <p><van-icon name="hot-sale-o" style="font-size: 25px;" color="#0068c5" /></p>
                    <p style="font-size: 13px;">我的设备</p>
                </div>
            </div>
        </div>



        <Mytabbar></Mytabbar>

    </div>
</template>
  
<script lang="ts" setup>
import Mytabbar from '@/components/mytabbar.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const tz = () => {
    router.push('/login')
}


</script>
  
<style lang="scss" scoped>
.my {
    width: 100vw;
    height: 100vh;
    background-color: #f8f8f8;
}

.top1 {
    height: 170px;
    background-color: #fff;
}

.top {
    width: 100vw;
    height: 150px;
    background-color: #0f9784;
    padding: 20px;
    display: flex;
    align-items: center;

    .yuan {
        width: 65px;
        height: 65px;
        background-color: #fff;
        border-radius: 50%;
    }

    .topa {
        color: #fff;
        margin-left: 20px;
    }
}

.nr {
    width: 90%;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 20px;

    div {
        width: 32%;
    }
}

.dd {
    width: 90%;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    margin: 10px auto;
    margin-bottom: 20px;
}

.ddtop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 10px 0px;
    border-bottom: 1px solid #ccc;

    .topa {
        font-size: 13px;
        color: #a4a5a4;
    }
}

.ddbottom {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 10px;

    .txt {
        font-size: 13px;
    }
}

.gn {
    width: 90%;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    margin: 10px auto;

}

.gnbottom {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    div {
        width: 25%;
        margin-bottom: 10px;
        text-align: center;
    }
}
</style>
  