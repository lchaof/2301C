<template>
    <div class="box">
        <div class="form">
            <p style="margin-bottom: 10px;">欢迎登录 - MMALL管理系统</p>
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit"
                        style="width: 100%; background-color: #337ab7;">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
// 引入接口
import { requeryLogin } from '../axios/http'
export default {
    data() {
        return {
            form: {
                username: 'admin',
                password: 'admin'
            }
        };
    },
    methods: {
        // 登录
        onSubmit() {
            requeryLogin(this.form).then(res => {
                console.log(res);
                localStorage.setItem('token', JSON.stringify(res.data))
                this.$message({
                    message: '登录成功',
                    type: 'success'
                });
                this.$router.push('/')
            })
        }
    },
    computed: {},
    filters: {},
    watch: {}
};
</script>

<style lang="scss" scoped>
.box {
    width: 100vw;
    height: 100vh;
    background-color: #f3f3f3;
    position: relative;

    .form {
        width: 400px;
        padding: 20px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>