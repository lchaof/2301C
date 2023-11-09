<template>
  <div class="box">
    <div class="box1">
      <img src="../../public/img.png" alt="">
      <h3 style="text-align: center;">~今天我需要做的事情~</h3>
      <div style="text-align: center; margin-top: 20px;">
        <input type="text" placeholder="请输入未完成的list" style="padding: 5px;" v-model="name">
        <button style="margin-left: 20px;" @click="add">添加</button>
      </div>

      <ul class="tabul">
        <li :class="gl == item.name ? 'dj' : ''" v-for="item, index in fl" :key="index" @click="qh(item.name)">{{
          item.name }}
        </li>

      </ul>
      <div class="list">
        <!-- 全部数组 -->
        <ul class="listul" v-show="gl == '查看所有'">
          <li v-for="item, index in alllist" :key="index">
            <p><input type="checkbox" v-model="item.flag" @click="allche(index)"></p>
            <p v-show="item.show == 3"><s>{{ item.text }}</s></p>
            <p v-show="item.show!=3">{{ item.text }}</p>
            <p class="del" @click="del(index)">x</p>
          </li>
        </ul>
        <!-- 待完成数组-->
        <ul class="listul" v-show="gl == '待完成'">
          <li v-for="item, index in dwclist" :key="index">
            <p><input type="checkbox" name="" id="" v-model="item.flag" @click="dwcche(item.text)"></p>
            <p>{{ item.text }}</p>
            <p class="del" @click="dwcdel(item.text)">x</p>
          </li>
        </ul>
        <!-- 已完成数组 -->
        <ul class="listul" v-show="gl == '已完成'">
          <li v-for="item, index in wclist" :key="index">
            <p><input type="checkbox" name="" id="" v-model="item.flag" @click="ywcche(item.text)"></p>
            <p><s>{{ item.text }}</s></p>
            <p class="del" @click="wcdel(item.text)">x</p>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      gl: '查看所有',
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

      ],
      alllist: [
        { text: '吃饭', flag: false, show: 2 },
        { text: '睡觉', flag: false, show: 2 },
        { text: '哈哈哈', flag: true, show: 3 },
        { text: '啦啦啦', flag: false, show: 2 },
        { text: '嘎嘎嘎', flag: true, show: 3 },
        { text: '滋滋滋', flag: true, show: 3 },
        { text: '嘻嘻嘻', flag: true, show: 3 },
      ],
      dwclist: [],
      wclist: [],
      name: ''

    };
  },
  methods: {
    qh(name) {
      this.xr()
      this.gl = name
      if (this.gl == '清空所有') {
        this.alllist = []
        this.xr()
      }

    },
    add() {
      this.alllist.push({ text: this.name, flag: false, show: 1 })
      this.xr()
    },
    xr() {
      this.dwclist = []
      this.wclist = []
      this.alllist.forEach(item => {
        if (item.show == 2) {
          this.dwclist.push(item)
        } else if (item.show == 3) {
          this.wclist.push(item)
        }
      })
    },
    alldel(index) {
      this.alllist.splice(index, 1)
      this.xr
    },
    dwcdel(name) {
      let index = this.alllist.findIndex(item => item.text == name)
      this.alllist.splice(index, 1)
      this.xr()
    },
    wcdel(name) {
      let index = this.alllist.findIndex(item => item.text == name)
      this.alllist.splice(index, 1)
      this.xr()
    },
    allche(index) {
      if (this.alllist[index].flag) {
        this.alllist[index].flag = false
        this.alllist[index].show = 2
      } else {
        this.alllist[index].flag = true
        this.alllist[index].show = 3
      }
      this.xr()
    },
    dwcche(name) {
      let index = this.alllist.findIndex(item => item.text == name)
      if (this.alllist[index].flag) {
        this.alllist[index].flag = false
        this.alllist[index].show = 2
      } else {
        this.alllist[index].flag = true
        this.alllist[index].show = 3
      }
      this.xr()
    },
    ywcche(name) {
      let index = this.alllist.findIndex(item => item.text == name)
      if (this.alllist[index].flag) {
        this.alllist[index].flag = false
        this.alllist[index].show = 2
      } else {
        this.alllist[index].flag = true
        this.alllist[index].show = 3
      }
      this.xr()
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
  height: 800px;
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
    cursor: pointer;
  }

  button:hover {
    // font-size: 20px;
    transform: rotate(10deg);
    font-size: 17px;

  }

  input {
    background-color: #fff;
    border: none;
    border-bottom: 2px dashed #ed7b52;
    outline: none;
  }

  .tabul {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    li {
      list-style: none;
      padding: 5px;
      font-size: 14px;
      cursor: pointer;

    }
  }

  .dj {
    background-color: #ed7b52;
    border-radius: 5px;
    color: #fff;
  }
}

.list {
  .listul {
    margin-top: 10px;

    li {
      list-style: none;
      display: flex;
      justify-content: space-between;
      // background-color: #ed7b52;
      // color: #fff;
      padding: 5px 10px 5px 10px;
      border-radius: 10px;
      margin-bottom: 5px;


      .del {
        cursor: pointer;
      }
    }
  }
}
</style>