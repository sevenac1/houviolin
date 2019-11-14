<template>
  <div id="app">
    <div class="header">
      <router-link to="/home" tag="a" class="header_logo">
        <img src="https://m.kongfz.com//search/template/mobile2/common/images/logo.png" alt />
      </router-link>
      <router-link class="header_input" to="/sousuo" tag="div">
        <span class="iconfont icon-sousuo"></span>
        <router-link to="/sousuo" tag="a">
          <input type="text" placeholder="请输入书名或作者" />
        </router-link>
      </router-link>
      <div href class="header_hide iconfont icon-shenglvehao" @click="showPopup"></div>

      <van-popup
        v-model="show"
        closeable
        close-icon="close"
        position="right"
        :style="{ width: '3.8rem',height:'100%' }"
      >
        <div class="box_right">
          <router-link tag="a" to="/home">
            <span class="iconfont icon-home"></span>
          </router-link>
          <router-link tag="a" to="/sousuo">
            <span class="iconfont icon-sousuo"></span>
          </router-link>
        </div>
        <div class="nav_content">
            <div class="nav_content_scroll">
                <a href="" class="item item_02">
                    <span class="iconfont icon-xinxi"></span>
                    <span class="text">我的消息</span>
                </a>
                <a href="" class="item item_cart">
                    <span class="iconfont icon-gouwuche1"></span>
                    <span class="text">购物车</span>
                </a>
                <a href="" class="item">
                    <span class="iconfont icon-wode"></span>
                    <span class="text">个人中心</span> 
                </a>
                <a href="" class="item item_maijia">
                    <span class="iconfont icon-quanguomaijia"></span>
                    <span class="text">卖家中心</span>

                </a>
                <a href="" class="item item_02 item_order">
                    <span class="text">我的订单</span>

                </a>
                <a href="" class="item item_02 item_order">
                    <span class="text">我的拍卖交易</span>

                </a>
                <a href="" class="item item_02 item_bid">
                    <span class="text">我的竞拍</span>

                </a>
                <a href="" class="item item_paimai">
                    <span class="text">资金账户</span>

                </a>
                <a href="" class="item item_trace">
                    <span class="text">我的足迹</span>

                </a>
                <a href="" class="item item_zu">
                    <span class="text">书店区</span>

                </a>
                <a href="" class="item item_02 item_dian">
                    <span class="text">在线拍卖</span>

                </a>
                <a href="" class="item item_02 item_zixun">
                    <span class="text">资讯</span>

                </a>
                <a href="" class="item item_02 item_shequ">
                    <span class="text">社区</span>

                </a>
            </div>
        </div>
      </van-popup>
      <!-- </div> -->
    </div>
    <div class="nav" ref="nav" v-if="!show">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
      <!-- <div class="nav_sort">
        <span>默认排序</span>
        <span class="iconfont icon-below-s"></span>
        <span></span>
      </div>
      <div class="nav_add">
        <span>所在地</span>
        <span class="iconfont icon-below-s"></span>
        <span></span>
      </div>
      <div class="nav_sx">
        <span>筛选</span>
        <span class="iconfont icon-below-s"></span>
      </div>
      <div class="class_type">
        <span class="iconfont icon-liebiao"></span>
      </div>-->
    </div>
    <div class="kong"></div>
    <div class="main">
      <div class="main_box">
        <div class="main_box_pic">
          <img src="http://shopimg.kongfz.com.cn/sw/kfzimg/475/5f86b3ca2fa6a576_s.jpg" alt />
        </div>
        <div class="main_box_main">
          <p class="main_box_name">木版 神相全编存五册</p>
          <p class="main_box_pj">
            <span>一品</span>
            <span>
              <em>古韵飘香</em>
              <em>
                (
                <i>3星</i>)
              </em>
            </span>
          </p>
          <p class="main_box_price">
            <em>￥</em>
            <span>
              800.
              <i>00</i>
            </span>
            <span>今日上书</span>
          </p>
        </div>
      </div>
      <div class="main_box">
        <div class="main_box_pic">
          <img src="http://shopimg.kongfz.com.cn/sw/kfzimg/475/5f86b3ca2fa6a576_s.jpg" alt />
        </div>
        <div class="main_box_main">
          <p class="main_box_name">木版 神相全编存五册</p>
          <p class="main_box_pj">
            <span>一品</span>
            <span>
              <em>古韵飘香</em>
              <em>
                (
                <i>3星</i>)
              </em>
            </span>
          </p>
          <p class="main_box_price">
            <em>￥</em>
            <span>
              800.
              <i>00</i>
            </span>
            <span>今日上书</span>
          </p>
        </div>
      </div>
      <div class="main_box">
        <div class="main_box_pic">
          <img src="http://shopimg.kongfz.com.cn/sw/kfzimg/477/5fe24096fd2814eb_s.jpg" alt />
        </div>
        <div class="main_box_main">
          <p class="main_box_name">木版 神相全编存五册</p>
          <p class="main_box_pj">
            <span>一品</span>
            <span>
              <em>古韵飘香</em>
              <em>
                (
                <i>3星</i>)
              </em>
            </span>
          </p>
          <p class="main_box_price">
            <em>￥</em>
            <span>
              800.
              <i>00</i>
            </span>
            <span>今日上书</span>
          </p>
        </div>
      </div>
      <div class="main_box">
        <div class="main_box_pic">
          <img src="http://shopimg.kongfz.com.cn/sw/kfzimg/475/5f86b3ca2fa6a576_s.jpg" alt />
        </div>
        <div class="main_box_main">
          <p class="main_box_name">木版 神相全编存五册</p>
          <p class="main_box_pj">
            <span>一品</span>
            <span>
              <em>古韵飘香</em>
              <em>
                (
                <i>3星</i>)
              </em>
            </span>
          </p>
          <p class="main_box_price">
            <em>￥</em>
            <span>
              800.
              <i>00</i>
            </span>
            <span>今日上书</span>
          </p>
        </div>
      </div>
      <div class="main_box">
        <div class="main_box_pic">
          <img src="http://shopimg.kongfz.com.cn/sw/kfzimg/475/5f86b3ca2fa6a576_s.jpg" alt />
        </div>
        <div class="main_box_main">
          <p class="main_box_name">木版 神相全编存五册</p>
          <p class="main_box_pj">
            <span>一品</span>
            <span>
              <em>古韵飘香</em>
              <em>
                (
                <i>3星</i>)
              </em>
            </span>
          </p>
          <p class="main_box_price">
            <em>￥</em>
            <span>
              800.
              <i>00</i>
            </span>
            <span>今日上书</span>
          </p>
        </div>
      </div>
      <div class="main_box">
        <div class="main_box_pic">
          <img src="http://shopimg.kongfz.com.cn/sw/kfzimg/475/5f86b3ca2fa6a576_s.jpg" alt />
        </div>
        <div class="main_box_main">
          <p class="main_box_name">木版 神相全编存五册</p>
          <p class="main_box_pj">
            <span>一品</span>
            <span>
              <em>古韵飘香</em>
              <em>
                (
                <i>3星</i>)
              </em>
            </span>
          </p>
          <p class="main_box_price">
            <em>￥</em>
            <span>
              800.
              <i>00</i>
            </span>
            <span>今日上书</span>
          </p>
        </div>
      </div>
      <div class="main_box">
        <div class="main_box_pic">
          <img src="http://shopimg.kongfz.com.cn/sw/kfzimg/475/5f86b3ca2fa6a576_s.jpg" alt />
        </div>
        <div class="main_box_main">
          <p class="main_box_name">木版 神相全编存五册</p>
          <p class="main_box_pj">
            <span>一品</span>
            <span>
              <em>古韵飘香</em>
              <em>
                (
                <i>3星</i>)
              </em>
            </span>
          </p>
          <p class="main_box_price">
            <em>￥</em>
            <span>
              800.
              <i>00</i>
            </span>
            <span>今日上书</span>
          </p>
        </div>
      </div>
      <div class="main_box">
        <div class="main_box_pic">
          <img src="http://shopimg.kongfz.com.cn/sw/kfzimg/475/5f86b3ca2fa6a576_s.jpg" alt />
        </div>
        <div class="main_box_main">
          <p class="main_box_name">木版 神相全编存五册</p>
          <p class="main_box_pj">
            <span>一品</span>
            <span>
              <em>古韵飘香</em>
              <em>
                (
                <i>3星</i>)
              </em>
            </span>
          </p>
          <p class="main_box_price">
            <em>￥</em>
            <span>
              800.
              <i>00</i>
            </span>
            <span>今日上书</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from "vant";
import { Popup, Cell } from "vant";
export default {
  name: "List",
  components: {
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Popup.name]: Popup,
    [Cell.name]: Cell
  },
  data() {
    return {
      show: false,
      value1: 0,
      value2: "a",
      value3: "a",
      option1: [
        { text: "默认排序", value: 0 },
        { text: "价格升序", value: 1 },
        { text: "价格降序", value: 2 },
        { text: "出版时间升序", value: 3 },
        { text: "出版时间降序", value: 4 },
        { text: "上书时间升序", value: 5 },
        { text: "上书时间降序", value: 6 },
        { text: "书店等级降序", value: 7 }
      ],
      option2: [
        { text: "所在地", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [{ text: "筛选", value: "a" }]
    };
  },
  methods: {
    showPopup() {
      this.show = true;
      
    },
  }
};
</script>
<style >
/* van-dropdown-menu{
    width:4rem;
    height:1rem;
} */
#app {
  width: 7.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 0.9rem;
  /* width:100%; */
  margin: 0 auto;
  align-items: center;
  background: #fff;
}
.header_logo {
  width: 2rem;
  height: 0.9rem;
}
.header_logo img {
  width: 1.38rem;
  height: 0.5rem;
  margin: 0 auto;
  margin-top: 0.2rem;
  vertical-align: top;
}
.header_input {
  width: 4.6rem;
  height: 0.58rem;
  position: relative;
  background: #f2f2f2;
}
.header_input span {
  display: block;
  width: 0.58rem;
  height: 0.58rem;
  font-size: 0.5rem;
  line-height: 0.58rem;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
}
.header_input input {
  background: none;
  height: 0.58rem;
  line-height: normal;
  font-size: 0.28rem;
  font-family: "微软雅黑";
  color: #333;
  padding-left: 0.58rem;
  width: 100%;
  border: 0 none;
}
.header_hide {
  display: block;
  float: right;
  height: 0.9rem;
  width: 0.9rem;
  text-align: center;
  line-height: 0.9rem;
  right: 0;
  top: 0;
}
.header_nav_right {
  height: 13.34rem;
  width: 3.8rem;
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10000;
  background: red;
}
.box_right {
  background: #f8f8f8;
  border-bottom: 1px solid #eee;
  height: 0.9rem;
  line-height:0.9rem;
}
.box_right a {
  height:0.9rem;
  line-height:0.9rem;
  width: 33.3%;
  display: block;
  float: left;
  overflow: hidden;
  text-align: center;
}
.box_right a span {
  font-size: 0.44rem;
  color: #666;
  text-align: center;
}
.nav_content{
    height: 12.44rem;
}
.item {
    margin-left: 15px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    display: block;
    text-align: left;
    padding: 0;
}
.van-popup__close-icon--top-right {
  top: 0.24rem;
  right: 0.32rem;
  color: #666;
}
.iconfont {
  font-size: 0.6rem;
  font-weight: bold;
}
.nav_content .iconfont{
    width: 0.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-right: 0.1rem;
    display: inline-block;
    font-size: 0.32rem;
    color: #898989;
}
.item .text{
    color: #333333;
    font-size: 0.3rem;
    display: inline-block;
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
    /* padding-left: 29px; */
}
.item.item_order .text, .item.item_bid .text, .item_paimai .text, .item_trace .text, .item_zu .text, .item_dian .text, .item_paimai .text, .item_zixun .text, .item_shequ .text{
    padding-left: 29px;
}
.van-dropdown-menu {
  /* margin-top: 0.9rem; */
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  z-index: 1;
  /* display: none; */
  /* position: relative; */
}
.nav {
  /* display:flex; */
  align-items: center;
  width: 100%;
  /* height: 0.84rem; */
  padding-right: 0.3rem;
  line-height: 0.84rem;
  /* border-top: 1px solid #eee;
  border-bottom: 1px solid #eee; */
  font-size: 0.28rem;
  position: relative;
  color: #333;
  background: #fff;

  margin-top: 0.9rem;
  justify-content: space-between;
  position: relative;
  z-index: 10;
}
/* .nav div {
  float: left;
  text-align: center;
  width: 2.52rem;
  position: relative;
}
.nav_sort span:nth-child(3) {
  border-left: 1px solid #ddd;
  display: block;
  height: 0.4rem;
  position: absolute;
  right: 0rem;
  top: 0.24rem;
}
.nav_add span:nth-child(3) {
  border-left: 1px solid #ddd;
  display: block;
  height: 0.4rem;
  position: absolute;
  right: 0rem;
  top: 0.24rem;
}
.nav .nav_add {
  width: 2.4rem;
}
.nav .nav_sx {
  width: 1.7rem;
  padding-left: 0.4rem;
  padding-right: 0.16rem;
} */
.icon-below-s {
  font-size: 0.16rem;
  color: #ccc;
  margin-left: 0.1rem;
}
.icon-liebiao {
  font-size: 0.5rem;
}
.nav .class_type {
  width: 0.48rem;
}
.kong {
  height: 0.16rem;
  background: #f8f8f8;
}
.main {
  flex: 1;
}
.main_box {
  height: 2.6rem;
}
.main_box_pic {
  width: 2rem;
  height: 2rem;
  margin: 0.3rem 0 0.3rem 0.3rem;
  float: left;
}
.main_box_pic img {
  width: 1.5rem;
  height: 100%;
  margin: 0 auto;
}
.main_box_main {
  width: 4.9rem;
  height: 2.6rem;
  padding: 0.3rem 0.3rem 0.3rem 0;
  margin-left: 0.3rem;
  float: right;
  border-bottom: 1px solid #eee;
}
.main_box_name {
  color: #333;
  line-height: 0.4rem;
  height: 0.8rem;
  overflow: hidden;
  font-weight: normal;
  font-size: 0.3rem;
}
.main_box_pj {
  height: 0.4rem;
  line-height: 0.4rem;
  margin-top: 0.1rem;
}
.main_box_pj span:nth-child(1) {
  color: #999;
  font-size: 0.28rem;
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
  float: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  word-break: break-all;
}
.main_box_pj span:nth-child(2) {
  color: #999;
  font-size: 0.28rem;
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
  float: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  word-break: break-all;
}
.main_box_pj span:nth-child(2) em i {
  color: #333;
}
.main_box_price {
  height: 0.4rem;
  margin-top: 0.1rem;
  line-height: 0.4rem;
}
.main_box_price em {
  color: #d00000;
  font-size: 0.34rem;
  width: 0.28rem;
  margin-top: 0.04rem;
}
.main_box_price span:nth-of-type(1) {
  color: #d00000;
  font-size: 0.38rem;
  height: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
}
.main_box_price span:nth-of-type(1) i {
  font-size: 0.34rem;
}
.main_box_price span:nth-of-type(2) {
  float: right;
  color: #999999;
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
  font-size: 0.28rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  word-break: break-all;
}
</style>