<template>
  <div>
    <div id="hea">
      <a href class="back">
        <span class="iconfont icon-fanhui"></span>
      </a>
      <div class="paimai">全部拍卖</div>
      <div class="srearch">
        <span class="iconfont icon-chaxun"></span>
      </div>
      <div class="fenlei">
        <span class="iconfont icon-heng"></span>
      </div>
    </div>
    <div>
      <div id="nav">
        <div class="dw"  >
                        <van-dropdown-menu active-color="#ee0a24">
                            <van-dropdown-item v-model="value1" :options="option1"  />
                        <!-- <van-dropdown-item v-model="value2" :options="option2" /> -->
                        </van-dropdown-menu>     
                        <div class="nac-til">
                        <span class="nav-title">筛选</span>
                        </div>
        </div>
     
    </div>
      <Salesvolume :id="this.value1"  />
    </div>
  </div>
</template>
<script>
import Salesvolume from "@components/list"
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";
Vue.use(DropdownMenu).use(DropdownItem);
import { xianApi } from "@api/xian";
export default {
  name: "xian",
  components:{
    Salesvolume
  },
  data() {
    return {
      itemList: [],
      path:'',
      value1: 0,
      value2: "a",
      send:0,
      pathList:[{con:'/oldline/timemany'},{con:'/oldline/timelittle'},{con:'/oldline/beginprice'},{con:'/oldline/endprice'},],
      option1: [
        { text: "剩余时间由少到多", value: 0 },
        { text: "剩余时间由多到少", value: 1 },
        { text: "起拍价格由低到高", value: 2 },
        { text: "起拍价格由高到低", value: 3 },
        { text: "最高竞价由低到高", value: 4 },
        { text: "最高竞价由高到低", value: 5 },
        { text: "出价次数由低到高", value: 6 },
        { text: "出价次数由高到低", value: 7 }
      ],
      option2: [
        { text: "线装古旧书", value: "a" },
        { text: "剩余时间由多到少", value: "b" },
        { text: "起拍价格由低到高", value: "c" },
        { text: "起拍价格由高到低", value: "d" },
        { text: "最高竞价由低到高", value: "e" },
        { text: "最高竞价由高到低", value: "f" },
        { text: "出价次数由低到高", value: "g" },
        { text: "出价次数由高到低", value: "h" }
      ]
    };
  },
  created() {
    this.handlexianApi(20, 1,0);
  },
  methods: {
    // async handlexianApi(pageShow, page,order) {
    //   let data = await xianApi(pageShow, page,order);
    //   this.itemList = data.data.itemList;
    // },
    onConfirm() {
      this.$refs.item.toggle();
    }
  },

};
</script>
<style lang="scss">
.til{
    float: left;
}
.dw{
  height: 50px;
 width: 100%;
  float: left;
  padding-left: 50px
 
}
.nac-til{
    float: right;
    margin-right: 30px;
    height: 50px;
    line-height: 50px
}
.van-dropdown-menu__item {
  width: 130px;
}

.van-dropdown-menu {
  margin-left: -10px;
  float: left;
}
.van-ellipsis {
  font-size: 0.28rem;
}
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0;
}

#hea {
  width: 100%;
  line-height: 0.88rem;
  padding: 0.16rem 0.2rem 0.16rem 0.16rem;
  background-color: #fff;
  display: flex;
  .back {
    width: 0.6rem;
    height: 0.6rem;
  }
  .paimai {
    width: 4.08rem;
    height: 0.56rem;
    text-align: center;
    line-height: 0.56rem;
    margin-left: 1rem;
    font-size: 0.34rem;
    color: #262626;
    overflow: hidden;
    font-weight: 700;
    vertical-align: top;
    margin-top: 0.2rem;
  }
  .srearch {
    width: 0.4rem;
    height: 0.4rem;
    margin-right: 0.2rem;
  }
  .fenlei {
    width: 0.6rem;
    height: 0.6rem;
  }
}

#nav {
  height: 50px;
  .nav-title {
    line-height: 0.6rem;
    color: #202020;
    font-size: 0.28rem;
  }
}

#list {
  padding: 0.2rem;
  background: #fff;
  .item {
    display: flex;
    justify-content: space-between;
    margin: 0.2rem 0;
    .box-img {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 0.16rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .box-right {
      width: 4.3rem;
      .title {
        color: #202020;
        font-size: 0.28rem;
        line-height: 0.4rem;
        height: 0.8rem;
        font-weight: 400;
        overflow: hidden;
      }
      .datail {
        color: #9b9b9b;
        font-size: 0.24rem;
        overflow: hidden;
        line-height: 0.4rem;
        .cred {
          color: #d04a47;
        }
        .fu {
          font-size: 0.22rem;
          color: #d04a47;
        }
        .prices {
          font-size: 0.34rem;
          color: #d04a47;
        }
        .jia {
          height: 0.32rem;
          font-size: 0.22rem;
          text-align: center;
          display: inline-block;
          vertical-align: 0;
          border-radius: 0.2rem;
          padding: 0 0.1rem;
          background-color: #fbfbfb;
        }
      }
      .sy {
        margin-top: 0.1rem;
        color: #9b9b9b;
        font-size: 0.24rem;
        overflow: hidden;
        line-height: 0.4rem;
        .timer {
          color: #d04a47;
          margin-left: 0.1rem;
        }
      }
      .bottom {
        color: #9b9b9b;
        font-size: 0.24rem;
        overflow: hidden;
        line-height: 0.4rem;
      }
    }
  }
}
</style>