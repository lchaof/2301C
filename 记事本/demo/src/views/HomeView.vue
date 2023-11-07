<template>
  <div class="box">
    <div class="box1">
      <img src="../../public/img.png" alt="">
      <h3 style="text-align: center;">~今天我需要做的事情~</h3>
      <div style="text-align: center; margin-top: 20px;">
        <input type="text" placeholder="请输入未完成的list" style="padding: 5px;">
        <button style="margin-left: 20px;">添加</button>
      </div>
      <ul>
        <li :class="gl == index ? 'dj' : ''" v-for="item, index in fl" :key="index" @click="qh(index)">{{ item.name }}</li>

      </ul>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      gl: 1,
      fl: [
        {
          name: "无事项"
        }, {
          name: "查看所有"
        }, {
          name: "待完成"
        }, {
          name: "已完成"
        }, {
          name: "清空所有"
        }

      ]
    };
  },
  methods: {
    qh(index) {
      this.gl = index
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
  background-color: #f4bead;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.box1 {
  padding: 20px;
  width: 400px;
  background-color: #fff;
  border-radius: 10px;

  // margin: 50px auto;
  img {
    width: 50%;
    // border: 1px solid #000;
    margin-left: 35%;
  }

  button {
    background-color: #fff;
    border: 1px solid #000;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
  }

  input {
    background-color: #fff;
    border: none;
    border-bottom: 2px dashed #ed7b52;
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    li {
      list-style: none;
      padding: 5px;
      font-size: 14px;
    }
  }

  .dj {
    background-color: #ed7b52;
    border-radius: 5px;
    color: #fff;
  }
}
</style>