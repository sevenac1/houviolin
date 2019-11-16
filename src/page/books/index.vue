<template>
  <div class="app">
    <div class="head">书店区</div>
    <div class="main">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <div class="main_nav">
        <div class="main_nav_box" v-for="(item,index) in navlist" :key="index">
          <div class="main_nav_box_pic">
            <img :src="item.pic" alt />
          </div>
          <div class="main_nav_box_title">{{item.title}}</div>
        </div>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_pm">拍卖</div>
      <div class="module-three">
          <div class="inner">
              <div class="l"></div>
              <div class="r"></div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Lazyload, Swipe, SwipeItem } from "vant";
import BScroll from "better-scroll";
export default {
  name: "books",
  components: {
    [Lazyload.name]: Lazyload,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      images: [
        "https://img0.kfzimg.com/operation/86/a1/86a15331ad621380c3f11536babd84f8.jpg",
        "https://img0.kfzimg.com/operation/ab/ae/abaedc86091f5c322ad383d33a4bf3ff.jpg"
      ],
      navlist: [
        {
          pic:
            "https://img0.kfzimg.com/operation/5a/e0/5ae0adbcbd23c27dc560947b773b6cda.png",
          title: "分类"
        },
        {
          pic:
            "https://img0.kfzimg.com/operation/a0/f9/a0f90a1df5f74df0e7008d631282e1f0.png",
          title: "每日新书"
        },
        {
          pic:
            "https://img0.kfzimg.com/operation/1b/2b/1b2b0411c923ce0a0d18a18b2b359108.png",
          title: "书店排名"
        },
        {
          pic:
            "https://img0.kfzimg.com/operation/d9/af/d9af0dde30f2316fd055f0df4e86bb76.png",
          title: "书摊排名"
        },
        {
          pic:
            "https://img0.kfzimg.com/operation/92/e9/92e9799a20a6baf8645b6f7a5576ff44.png",
          title: "新书广场"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
}
.head {
  height: 0.88rem;
  width: 7.5rem;
  margin: 0 auto;
  padding: 0.16rem 0.2rem 0.16rem 0.16rem;
  text-align: center;
  line-height: 0.56rem;
  position: fixed;
  background: #fff;
  font-size: 0.34rem;
  color: #262626;
  font-weight: 700;
}
.main {
  width: 7.5rem;
  height: 100%;
  padding-top: 0.88rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  .van-swipe {
    width: 100%;
    height: 3.2rem;
    // display: flex;
    overflow: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .main_nav {
    width: 6.9rem;
    height: 2.38rem;
    padding: 0.28rem 0 0.56rem 0;
    margin: 0 auto;
    display: flex;
    .main_nav_box {
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      width: 1.36rem;
      height: 1.26rem;
      font-size: 0.22rem;
      color: #666;
      text-align: center;
      margin-top: 0.28rem;

      .main_nav_box_pic {
        width: 0.88rem;
        height: 0.88rem;
        margin: 0 auto 0.08rem;
        img {
          width: 0.88rem;
          height: 0.88rem;
        }
      }
      .main_nav_box_title {
        height: 0.3rem;
        line-height: 0.3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .main_kong {
  padding-bottom: 0.4rem;
}
.main_kong2 {
  height: 0.16rem;
  background: #f3f3f3;
}
}
</style>