<template>
  <div class="classification">
    <div class="header">
      <v-touch tag="span" @tap="taggleBack">
        <img src="http://login.kongfz.com/mobile/images/login/back.png" alt />
      </v-touch>
      <span>全部分类-孔夫子旧书网</span>
      <!-- <span class="iconfont icon-sousuo"></span> -->
      <span class="iconfont icon-shenglvehao"></span>
    </div>
    <van-tree-select height="100%" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <div v-if="activeIndex === 0">
          <h3 class="title">{{tslist.name}}</h3>
          <div class="itemList">
            <a href class="item" v-for="(item,index) in tslist.list" :key="index">
              <div>
                <img :src="item.img" class="lazy" alt />
                <div class="backgroundImg"></div>
              </div>
              <div class="des">
                <div class="name">{{item.name}}</div>
                <div class="num">{{item.count}}</div>
              </div>
            </a>
            
          </div>
        </div>
        <div v-if="activeIndex === 1">
          <h3 class="title">{{booklist.name}}</h3>
          <div class="itemList">
            <a href class="item" v-for="(item,index) in booklist.list" :key="index">
              <div>
                <img :src="item.img" class="lazy" alt />
                <div class="backgroundImg"></div>
              </div>
              <div class="des">
                <div class="name">{{item.name}}</div>
                <div class="num">{{item.count}}</div>
              </div>
            </a>
           
          </div>
        </div>
        <div v-if="activeIndex === 2">
          <h3 class="title">{{yssclist.name}}</h3>
          <div class="itemList">
            <a href class="item" v-for="(item,index) in yssclist.list" :key="index">
              <div>
                <img :src="item.img" class="lazy" alt />
                <div class="backgroundImg"></div>
              </div>
              <div class="des">
                <div class="name">{{item.name}}</div>
                <div class="num">{{item.count}}</div>
              </div>
            </a>
            
          </div>
        </div>
        <div v-if="activeIndex === 3">
          <h3 class="title">{{wczblist.name}}</h3>
          <div class="itemList">
            <a href class="item" v-for="(item,index) in wczblist.list" :key="index">
              <div>
                <img :src="item.img" class="lazy" alt />
                <div class="backgroundImg"></div>
              </div>
              <div class="des">
                <div class="name">{{item.name}}</div>
                <div class="num">{{item.count}}</div>
              </div>
            </a>
            
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>
<script>
import { TreeSelect, IndexBar, IndexAnchor,Cell } from "vant";
import { allApi } from "@api/classification";
export default {
  name: "ClassiFication",
  components: {
    [TreeSelect.name]: TreeSelect,
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell,
  },
  data() {
    return {
      activeIndex: 0,
      items: [
        {text:"特色"},
        {text:"图书"},
        {text:"艺术收藏"},
        {text:"文创周边"},
      ],
      list: [],
      tslist:[],
      booklist:[],
      yssclist:[],
      wczblist:[],
    };
  },
  created() {
    var wap;
    var msearch;
    this.handleallApi(wap, msearch);
  },
  methods: {
    taggleBack() {
      this.$router.back();
    },
    async handleallApi(wap, msearch) {
      let data = await allApi(wap, msearch);
      var info = data.data;
      this.tslist = info.section[0];
      this.booklist = info.section[1];
      this.yssclist = info.section[2];
      this.wczblist = info.section[3];
      console.log(this.tslist);
    }
  }
};
</script>
<style >
.app {
  width: 100%;
  height: 100%;
}
.header {
  position: fixed;
  background: #fff;
  width: 100%;
  text-align: center;
  height: 0.88rem;
  line-height: 0.56rem;
  font-size: 0.34rem;
  font-weight: 700;
  color: #262626;
  padding: 0.16rem 0.2rem 0.16rem 0.16rem;
}
.header span:nth-child(1) {
  float: left;
  width: 0.8rem;
  height: 0.88rem;
  padding: 0.24rem 0.2rem;
  position: absolute;
  top: 0;
  left: 0;
}
.header span:nth-child(1) img {
  width: 0.4rem;
  height: 0.4rem;
}

.header span:nth-child(3) {
  position: absolute;
  display: block;
  width: 0.56rem;
  height: 0.56rem;
  right: 0.2rem;
  top: 0.16rem;
}
.classification {
  width: 100%;
  height: 100%;
}
.van-tree-select {
  height: 100%;
  padding-top: 0.88rem;
  overflow: auto;
}
.van-sidebar.van-tree-select__nav {
  height: 20rem;
  height: 100%;
  width: 1.9rem;
}
.van-sidebar-item.van-sidebar-item--select.van-tree-select__nav-item {
  width: 1.9rem;
}
.van-tree-select__nav {
  flex: 0.68;
  -webkit-box-flex: 0.68;
  -webkit-flex: 0.68;
}
.title {
  font-family: PingFangSC-Regular;
  font-size: 0.26rem;
  color: #666;
  margin-left: 0.5rem;
  padding-top: 0.5rem;
  margin-bottom: 0.36rem;
}
.itemList {
  display: inline-table;
  width: 4.6rem;
  margin: 0 0.5rem;
  border-bottom: 1px solid #eaeaea;
}
.item {
  width: 50%;
  display: inline-flex;
  margin-bottom: 0.5rem;
  -webkit-box-align: center;
  align-items: center;
}
.itemList .item img {
  width: 0.7rem;
  height: 0.9rem;
  border-radius: 2px;
}
.backgroundImg {
  width: 0.7rem;
  height: 0.1rem;
  background-image: linear-gradient(-180deg, #e0e0e0, #fff);
  border-radius: 6px 6px 0 0;
}
.des {
  margin-left: 0.16rem;
}
.name {
  width: 1.2rem;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  color: #555;
  letter-spacing: 0;
  line-height: 0.4rem;
}
.num {
  font-size: 0.24rem;
  line-height: 0.4rem;
  font-family: PingFangSC-Regular;
  color: #999;
  letter-spacing: 0;
}

.van-tree-select__content {
  overflow: visible;
  height: 100%;
}
.van-index-bar__sidebar {
  left: 0;
  right: 100%;
}
.van-cell{
width:80%;
position:absolute;
top:20%;
right:0;
}
</style>