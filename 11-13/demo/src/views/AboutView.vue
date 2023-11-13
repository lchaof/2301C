<template>
  <div>
    <div style="font-size: 30px;">
      首页
    </div>
    <ul>
      <li style="background-color: #f0b45e;">
        <p style="font-size: 30px;  margin-bottom: 20px;">{{ info.userCount }}</p>
        <p>
          <i class="el-icon-user"></i>用户总数
        </p>
      </li>
      <li style="background-color: #6bbe6b;">
        <p style="font-size: 30px; margin-bottom: 20px;">{{ info.productCount }}</p>
        <p>
          <i class="el-icon-s-operation"></i>商品总数
        </p>
      </li>
      <li style="background-color: #5db8d3;">
        <p style="font-size: 30px; margin-bottom: 20px;">{{ info.orderCount }}</p>
        <p>
          <i class="el-icon-s-claim"></i>订单总数
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { requeryIndex } from '../axios/http'
export default {
  data() {
    return {
      info: {}
    };
  },
  methods: {},
  computed: {},
  filters: {},
  watch: {},
  created() {
    requeryIndex().then(res => {
      console.log(res);
      this.info = res.data
    })
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  li {
    width: 28%;
    list-style: none;
    height: 160px;
    padding: 10px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
  li:hover{
    color: #000;
    width: 32%;
    height: 170px;
  }
}
</style>