<template>
    <div class="login">

        <div class="yestoken">
            <div class="one">
                <p class="zh">账号密码登录</p>
                <p class="ccc">为了你的账号安全，请用手机号登录</p>
            </div>
            <div class="form">
                <van-field v-model="iphone" label="中国 +86" placeholder="请输入手机号" class="iphone" />
                <van-field v-model="password" type="password" placeholder="请输入密码" show-password class="password" />
                <van-button style="width: 100%; margin-top: 20px;" color="#98cfbe">登录</van-button>
            </div>
            <div class="two">
                <p @click="yzmdl">验证码登录</p>
                <div class="twoa">
                    <p>忘记密码</p>
                    <p class="pa">|</p>
                    <p @click="zc">免费注册</p>
                </div>
            </div>
            <div class="bottom">
                <van-radio-group v-model="checked">
                    <van-radio name="1" checked-color="#29a582"></van-radio>
                </van-radio-group>
                &ensp;<p class="bottoma">阅读并同意 <span>《用户协议》</span> 和 <span>《隐私政策》</span></p>
            </div>
        </div>

        

    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
// 登录手机号输入框
const iphone = ref('')
// 登录密码输入框
const password = ref('')
// 单选框
const checked = ref('1');
// 验证码
const yzm = ref('');
// 注册手机号
const zciphone = ref('')
// 注册密码
const zcpassword = ref('')
// 注册确认密码
const zcqrpassword = ref('')


const zc = () => {
    router.push('/zhuce')
}

const yzmdl = ()=>{
    router.push('/yzmlogin')
}




</script>
  
<style lang="scss" scoped>
.login {
    background-color: #f8f8f8;
    width: 100vw;
    height: 100vh;
}

.one {
    padding: 30px 20px 0px 30px;
    // margin-top: 10px;

    // background-color: skyblue;
}

.zh {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 700;
}

.ccc {
    font-size: 14px;
    color: #9f9f9f;
    // margin-bottom: 10px;
}

.form {
    width: 100vw;
    padding: 10px 20px 10px 20px;
}

.bottom {
    // padding: 0 20px;
    width: 85%;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    span {
        color: #68a4f2;
    }

    .bottoma {
        font-size: 13px;
    }
}

.two {
    padding: 10px 20px 10px 20px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #3c85ef;

    .twoa {
        display: flex;

        .pa {
            margin: 0 10px;
            color: #ededed;
        }
    }
}

.iphone {
    background: none !important;
    border-bottom: 1px solid #eeeeee !important;
}

.password {
    background: none !important;
    border-bottom: 1px solid #eeeeee !important;


}
</style>
  