<template>
  <div>
    <el-container>
      <el-header>
        <div class="top">
          <i class="el-icon-user-solid"></i>&ensp;
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              欢迎<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>

        <el-aside width="200px">
          <div style="padding: 10px;">
            <h3 style="color: #2dafcb; font-size: 30px;">HAPPY</h3>
            <H3 style="color: #fff; font-size: 30px;">MMALL</H3>
          </div>

          <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#2b2e33" text-color="#ccc"
            active-text-color="#2dafcb" router>
            <el-menu-item index="/about">
              <i class="el-icon-guide"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-operation"></i>
                <span>商品</span>
              </template>
                <el-menu-item index="/product">商品管理</el-menu-item>
                <el-menu-item index="/product-category">品类管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-claim"></i>
                <span>订单</span>
              </template>
                <el-menu-item index="/order">订单管理</el-menu-item>
            </el-submenu>
            
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>用户</span>
              </template>
                <el-menu-item index="/user">用户列表</el-menu-item>
            </el-submenu>
          </el-menu>

        </el-aside>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>


export default {
  data() {
    return {
      info: {
        pageNum: 1
      }
    };
  },
  methods: {
    // 退出登录
    handleCommand() {
      localStorage.removeItem('token')
      this.$message({
        message: '退出成功',
        type: 'success'
      });
      setTimeout(() => {
        this.$router.go(0)
      }, 1000)
    }
  },
  computed: {},
  filters: {},
  watch: {},
  created() {

  }
};
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #2b2e33;
  height: calc(100vh - 60px);
}

.top {
  line-height: 60px;
  text-align: right;
}

.el-main {
  background-color: #f3f3f3;
}
</style>