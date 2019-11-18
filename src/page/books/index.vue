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
      <div class="main_pm">名家专区</div>
      <div class="module-three">
        <div class="inner">
          <div class="l">
            <div class="title">
              <p>博尔赫斯</p>
              <p>作家们的作家</p>
            </div>
            <div class="img_box">
              <img
                src="https://img0.kfzimg.com/operation/4d/d6/4dd662d6b6f90af15169677b5e696e3d.jpg"
                alt
              />
            </div>
          </div>
          <div class="r">
            <div class="box">
              <a href>
                <div class="title">
                  <p>傅雷</p>
                  <p>孤独的赤子</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/7f/a1/7fa1558502fd8acb09928ab973e7f888.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
            <div class="box">
              <a href>
                <div class="title">
                  <p>丰子恺</p>
                  <p>一钩新月天如水</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/95/a7/95a7cad9e5591bddef5f58316907eeb8.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="inner">
          <div class="r">
            <div class="box">
              <a href>
                <div class="title">
                  <p>黑塞</p>
                  <p>德国浪漫派骑士</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/9f/cb/9fcb4f787dba29c2a8d19d451c6f6377.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
            <div class="box">
              <a href>
                <div class="title">
                  <p>福克纳</p>
                  <p>喧哗与骚动</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/98/4a/984ac5ddf47077b676705c70f494c357.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
          </div>
          <div class="r">
            <div class="box">
              <a href>
                <div class="title">
                  <p>荣格</p>
                  <p>分析心理学之父</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/e1/6e/e16e9b0682f8e6e96c52a02386e37847.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
            <div class="box">
              <a href>
                <div class="title">
                  <p>海因莱因</p>
                  <p>美国现代科幻小说之父</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/4c/40/4c40fc98bbdf86a54c41cea9a9a833b5.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="inner">
          <div class="r">
            <div class="box">
              <a href>
                <div class="title">
                  <p>钱穆</p>
                  <p>史学四大家</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/55/ca/55ca4a16275d20986e02395a62bf7ad8.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
            <div class="box">
              <a href>
                <div class="title">
                  <p>王小波</p>
                  <p>浪漫骑士，黑色幽默</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/96/c0/96c0f24dcba7f9096fc776011101d930.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
          </div>
          <div class="r">
            <div class="box">
              <a href>
                <div class="title">
                  <p>古龙</p>
                  <p>谁来与我共醉</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/ac/4a/ac4acb14e529d1355b3fa429b129b4bb.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
            <div class="box">
              <a href>
                <div class="title">
                  <p>卡夫卡</p>
                  <p>现代人的困境</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/fa/b4/fab4f1ccfd6d0cbada807824500689a3.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="inner">
          <div class="r">
            <div class="box">
              <a href>
                <div class="title">
                  <p>纳博科夫</p>
                  <p>不止洛丽塔</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/4a/7c/4a7cb23086c8e628410c59ac7fcb5d03.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
            <div class="box">
              <a href>
                <div class="title">
                  <p>汪曾祺</p>
                  <p>抒情人道主义者</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/16/7c/167c6e401fc15ba63d790d33f2b2f208.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
          </div>
          <div class="r">
            <div class="box">
              <a href>
                <div class="title">
                  <p>莎士比亚</p>
                  <p>生存还是毁灭</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/c5/2f/c52f830973e60f2b1eb563911d88b62a.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
            <div class="box">
              <a href>
                <div class="title">
                  <p>芥川龙之介</p>
                  <p>大正鬼才文豪</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/9c/68/9c688abce1def4e25660349f25a6a188.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
          </div>
          
        </div>
        <div class="inner">
          <div class="r">
            <div class="box">
              <a href>
                <div class="title">
                  <p>冯至</p>
                  <p>生命在沉思</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/f8/97/f8975e033cd1c97119311b1bbd77a584.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
            <div class="box">
              <a href>
                <div class="title">
                  <p>伍尔夫</p>
                  <p>女性主义先锋</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/2c/45/2c45aa27422001cb3b97c74531bd924b.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
          </div>
          <div class="r">
            <div class="box">
              <a href>
                <div class="title">
                  <p>穆旦</p>
                  <p>用言语照明世界</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/9b/d7/9bd7cd60d74b3deda91dd0a9cd2a941a.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
            <div class="box">
              <a href>
                <div class="title">
                  <p>老舍</p>
                  <p>人民艺术家</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/69/96/69963f454f325d7995ff542dba04b573.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
          </div>
          
        </div>
        <div class="inner">
          <div class="r">
            <div class="box">
              <a href>
                <div class="title">
                  <p>顾随</p>
                  <p>古典诗词感发</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/01/70/017054d1e9cdba5a29e99b548dc68571.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
            
          </div>
          <div class="r">
            <div class="box">
              <a href>
                <div class="title">
                  <p>康德</p>
                  <p>古典哲学创始人</p>
                </div>
                <div class="img_box">
                  <img
                    src="https://img0.kfzimg.com/operation/68/fb/68fb0841623166d35ee198cd06173140.jpg"
                    alt
                  />
                </div>
              </a>
            </div>
            
          </div>
          
        </div>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
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
  .main_pm {
    height: 1.34rem;
    padding: 0.5rem 0.3rem 0.3rem 0.3rem;
    font-weight: bold;
    line-height: 0.54rem;
    font-size: 0.38rem;
    color: #262626;
  }
  .main_kong {
    padding-bottom: 0.4rem;
  }
  .main_kong2 {
    height: 0.16rem;
    background: #f3f3f3;
  }
  .module-three .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 6.9rem;
    margin: 0 auto;
    padding: 0;
  }
  .module-three .inner .l {
    width: 3.42rem;
    height: 2.7rem;
    background: #fafafa;
    border-radius: 0.08rem;
    .title {
      width: 3.42rem;
      padding-top: 0.24rem;
      padding-left: 0.2rem;
      p:nth-child(1) {
        width: 100%;
        height: 0.42rem;
        line-height: 0.42rem;
        font-size: 0.3rem;
        font-weight: 700;
        color: #333;
        margin-bottom: 0.08rem;
        overflow: hidden;
      }
      p:nth-child(2) {
        width: 100%;
        height: 0.33rem;
        line-height: 0.33rem;
        font-size: 0.24rem;
        color: #999;
        overflow: hidden;
      }
    }
    .img_box {
      width: 3.02rem;
      height: 1.38rem;
      text-align: center;
      line-height: 1.04rem;
      margin-top: 0.11rem;
      margin-left: 0.2rem;
      font-size: 0;
      border-radius: 0.08rem;
      overflow: hidden;
      img {
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .module-three .inner .r {
    width: 3.42rem;
    // height: 2.7rem;
    overflow: hidden;
  }
  .box {
    width: 3.42rem;
    height: 1.32rem;
    background: #fafafa;
    border-radius: 0.08rem;
    margin-bottom: 0.06rem;
    .title {
      float: left;
      margin-top: 0.24rem;
      margin-left: 0.2rem;
      p:nth-child(1) {
        width: 1.8rem;
        height: 0.42rem;
        line-height: 0.42rem;
        font-size: 0.3rem;
        font-weight: 700;
        color: #333;
        margin-bottom: 0.08rem;
        overflow: hidden;
      }
      p:nth-child(2) {
        width: 1.8rem;
        height: 0.33rem;
        line-height: 0.33rem;
        font-size: 0.24rem;
        color: #999;
        overflow: hidden;
      }
    }
    .img_box {
      float: right;
      width: 1.04rem;
      height: 1.04rem;
      text-align: center;
      line-height: 1.04rem;
      margin-top: 0.14rem;
      margin-right: 0.2rem;
      border-radius: 0.08rem;
      font-size: 0;
      img {
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>