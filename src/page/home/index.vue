<template>
  <div id="main" class="main">
    <div id="main_head" class="main_head">
      <div class="main_head_1">
        <a href="index.html">
          <img
            src="data:image/png;base64,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"
            alt
          />
        </a>
      </div>
      <div class="main_head_2">
        <a href="sousuo.html">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAAPFBMVEUAAACampqampqampqkpKSampqZmZmZmZmZmZmampqZmZmbm5uampqZmZmampqgoKCZmZmZmZmZmZmZmZnxEDpHAAAAE3RSTlMAQtiKCszp8+K/dmtTPCYVhe+oUAggIwAAALpJREFUKM+FU9kOwyAMg3BTCm39//86jU1NT+IXhGxicinGbBKFQMnM6gE2e+zw2V75EgEyulpbtSEgljO/AE7zVTtgOfIbMKkTJmA7vl/11VOvHKMAzLMCKP//R45/dom/XDKceoRD7qdng6uJ7/UDqRcQvjU1MI/sTiV2uHukHqe+CWp3D7BvAosgCkQL8ZNimmKhpFKLzRLbLQ2MMHK+jYd2BbXh2DcCteHidMVg9brCqeHyNkdKxAeG9gwGFxIALwAAAABJRU5ErkJggg=="
            alt
          />
        </a>
        <div>商品名称 作者 出版社 ISBN</div>
      </div>
    </div>
    <div id="main_pic" class="main_pic">
      <a href="china.html">
        <img src="https://img0.kfzimg.com/operation/8e/35/8e354f0cb20bf77f7d8b93b39330cfad.jpg" alt />
      </a>
      <a href="china.html">
        <img src="https://img0.kfzimg.com/operation/65/0a/650ae1226aa65d8d0ee501b28df9a965.jpg" alt />
      </a>
      <a href="china.html">
        <img src="https://img0.kfzimg.com/operation/a9/a3/a9a38499bcec0528d51fd68b5ce7f0ab.jpg" alt />
      </a>
      <a href="china.html">
        <img src="https://img0.kfzimg.com/operation/76/74/76740db1b141b05e83810b0f385120bf.jpg" alt />
      </a>
      <a href="china.html">
        <img src="https://img0.kfzimg.com/operation/2e/9c/2e9c3afc1516b0a75bc284dd0c3ac107.jpg" alt />
      </a>
    </div>
    <div id="main_nav" class="main_nav">
      <div class="nav_box">
        <div>
          <a href="list.html">
            <img
              src="https://img0.kfzimg.com/operation/7e/67/7e67ee755c4751b08ca2cf4f6c167b5a.png"
              alt
            />
          </a>
        </div>
        <div>线装古籍</div>
      </div>
      <div class="nav_box">
        <div>
          <a href="list.html">
            <img
              src="https://img0.kfzimg.com/operation/68/78/6878c2adf90826c96b06689d4d0e9ad8.png"
              alt
            />
          </a>
        </div>
        <div>民国旧书</div>
      </div>
      <div class="nav_box">
        <div>
          <a href="list.html">
            <img
              src="https://img0.kfzimg.com/operation/96/79/9679391cb144b9da2d5934baf7798bb3.png"
              alt
            />
          </a>
        </div>
        <div>名人墨迹</div>
      </div>
      <div class="nav_box">
        <div>
          <a href="list.html">
            <img
              src="https://img0.kfzimg.com/operation/87/37/873758d4bbdf66f53e4aa444b7489756.png"
              alt
            />
          </a>
        </div>
        <div>古玩杂项</div>
      </div>
      <div class="nav_box">
        <div>
          <img
            src="https://img0.kfzimg.com/operation/0d/f9/0df9dbd219fbe285efb7412b4649290f.png"
            alt
          />
        </div>
        <div>全部分类</div>
      </div>
    </div>
    <div id="main_taday" class="main_taday">
      <div class="taday_box">
        <div>
          <p>今日上新</p>
          <p>发现新上好书</p>
        </div>
        <div>
          <img
            src="https://img0.kfzimg.com/operation/7d/ec/7dec8863d15871dfa80e06862635e9fb.png"
            alt
          />
        </div>
      </div>
      <div class="taday_box">
        <div>
          <p>书店排行榜</p>
          <p>发现口碑好店</p>
        </div>
        <div>
          <img
            src="https://img0.kfzimg.com/operation/71/14/71147277eef7ff00046290e19a11a082.png"
            alt
          />
        </div>
      </div>
    </div>
    <div id="main_taday" class="main_taday">
      <div class="taday_box">
        <a href="newbooks.html">
          <div>
            <p>新书频道</p>
            <p>发现孔网新书</p>
          </div>
          <div>
            <img
              src="https://img0.kfzimg.com/operation/81/ae/81ae33f2ce1d23818c64b917e9780269.png"
              alt
            />
          </div>
        </a>
      </div>
      <div class="taday_box">
        <a href="booklist.html">
          <div>
            <p>藏书单</p>
            <p>为你推荐好书</p>
          </div>
          <div>
            <img
              src="https://img0.kfzimg.com/operation/af/e6/afe651e4767bf0c94b7d53275c061831.png"
              alt
            />
          </div>
        </a>
      </div>
    </div>
    <div class="main_kong"></div>
    <div class="main_kong2"></div>
    <div class="main_pm">拍卖</div>
    <div class="main_inner">
      <div class="inner_box1">
        <div>
          <p>全部拍卖</p>
          <p>日均4万余件拍品</p>
        </div>
        <div>
          <img
            src="https://img0.kfzimg.com/operation/a8/ec/a8ec2fa9d76ae778aec20ee04d27bd69.png"
            alt
          />
        </div>
      </div>
      <div class="inner_box2">
        <div class="inner_2">
          <a href="artwork.html">
            <div>
              <p>艺术品专场</p>
              <p>名人字画墨迹等</p>
            </div>
            <div>
              <img
                src="https://img0.kfzimg.com/operation/37/41/37411da7e2306956f34840cb1503894e.png"
                alt
              />
            </div>
          </a>
        </div>
        <div class="inner_2">
          <div>
            <p>低价拍卖</p>
            <p>1元起拍捡漏</p>
          </div>
          <div>
            <img
              src="https://img0.kfzimg.com/operation/6a/e3/6ae3e6b33782dfc51821271ac628a3af.png"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <div id="main_taday" class="main_taday">
      <div class="taday_box">
        <div>
          <p>珍本拍卖</p>
          <p>古籍善本</p>
        </div>
        <div>
          <img
            src="https://img0.kfzimg.com/operation/4b/e7/4be7d7aabe1d8188411e178c60fb4651.png"
            alt
          />
        </div>
      </div>
      <div class="taday_box">
        <div>
          <p>今日热点</p>
          <p>每日必看</p>
        </div>
        <div>
          <img
            src="https://img0.kfzimg.com/operation/bf/10/bf109d68796166dc526cd72123571f11.png"
            alt
          />
        </div>
      </div>
    </div>
    <div id="main_taday" class="main_taday">
      <div class="taday_box">
        <div>
          <p>大众拍卖</p>
          <p>大家都在拍</p>
        </div>
        <div>
          <img
            src="https://img0.kfzimg.com/operation/2a/f0/2af0cd06e0886d1af2ec3419d468415f.png"
            alt
          />
        </div>
      </div>
      <div class="taday_box">
        <div>
          <p>三天热点</p>
          <p>热拍推荐</p>
        </div>
        <div>
          <img
            src="https://img0.kfzimg.com/operation/f4/51/f451368d25801533024e3817bfbb482f.png"
            alt
          />
        </div>
      </div>
    </div>
    <div class="main_kong"></div>
    <div class="main_kong2"></div>
    <div class="main_hstj">
      <span>好书推荐</span>
      <a href class="iconfont">更多</a>
    </div>
    <div class="main_model">
      <div class="model_box">
        <div class="swiper">
          <div class="swiper_box">
            <div class="img_box">
              <img
                src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/5e5d/5e5da332be3bf307465985253d89c2aa_0_1_300_300.jpg"
                alt
              />
            </div>
            <div class="swiper_title">羊之歌——我的回想</div>
            <div class="swiper_author">[日]加藤周一 著；翁家慧 译</div>
            <div class="swiper_price">
              <span>￥</span>
              <span>20</span>
              <span>起</span>
            </div>
          </div>
          <div class="swiper_box">
            <div class="img_box">
              <img
                src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/a65b/a65bb65a88827ab3c6abd4f695e257c5_0_1_300_300.jpg"
                alt
              />
            </div>
            <div class="swiper_title">汗青堂丛书037·海上丝绸之路</div>
            <div class="swiper_author">[德]罗德里希·普塔克 著；史敏岳 译</div>
            <div class="swiper_price">
              <span>￥</span>
              <span>28</span>
              <span>起</span>
            </div>
          </div>
          <div class="swiper_box">
            <div class="img_box">
              <img
                src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/ad26/ad26a2e6d2c2898e4e4185de3367bb86_0_1_300_300.jpg"
                alt
              />
            </div>
            <div class="swiper_title">伦勃朗</div>
            <div class="swiper_author">[芬兰]唐克雷德·博雷纽斯（Tancred Borenius） 著；吴啸雷 译</div>
            <div class="swiper_price">
              <span>￥</span>
              <span>240</span>
              <span>起</span>
            </div>
          </div>
          <div class="swiper_box">
            <div class="img_box">
              <img
                src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/f1c2/f1c299a21bde7342907bc28020311ecd_0_1_300_300.jpg"
                alt
              />
            </div>
            <div class="swiper_title">自指引擎（精装）</div>
            <div class="swiper_author">[日]圆城塔 著；丁丁虫 译</div>
            <div class="swiper_price">
              <span>￥</span>
              <span>31.05</span>
              <span>起</span>
            </div>
          </div>
          <div class="swiper_box">
            <div class="img_box">
              <img
                src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/80d1/80d1e61f18d65e3566fd5390e7f4e172_0_1_300_300.jpg"
                alt
              />
            </div>
            <div class="swiper_title">马背上的朝廷：巡幸与清朝统治的建构，1680—1785（海外中国研究丛书·特别版）</div>
            <div class="swiper_author">[美]张勉治 著</div>
            <div class="swiper_price">
              <span>￥</span>
              <span>35.64</span>
              <span>起</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main_kong"></div>
    <div class="main_kong2"></div>
    <div class="main_hstj main_sdtj">
      <span>书单推荐</span>
      <a href class="iconfont">更多</a>
    </div>
    <div class="tuijian_list">
      <div class="tuijian_list_box">
        <div class="tj_list_main">
          <div class="tj_list_main_box">
            <a href="china.html" class="tj_list_main_box_link">
              <div>
                <img
                  src="https://img0.kfzimg.com/operation/64/c6/64c6beec81534d73b4db2ba54918951c.jpg"
                  alt
                />
              </div>
              <div class="kong3"></div>
              <div>红尘影像诗，时代记录者</div>
            </a>
          </div>
          <div class="tj_list_main_box">
            <a href class="tj_list_main_box_link">
              <div>
                <img
                  src="https://img0.kfzimg.com/operation/64/c6/64c6beec81534d73b4db2ba54918951c.jpg"
                  alt
                />
              </div>
              <div class="kong3"></div>
              <div>红尘影像诗，时代记录者</div>
            </a>
          </div>
          <div class="tj_list_main_box">
            <a href class="tj_list_main_box_link">
              <div>
                <img
                  src="https://img0.kfzimg.com/operation/64/c6/64c6beec81534d73b4db2ba54918951c.jpg"
                  alt
                />
              </div>
              <div class="kong3"></div>
              <div>红尘影像诗，时代记录者</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="main_kong"></div>
    <div class="main_kong2"></div>
  </div>
</template>
<script>
export default {
  name: "Home"
};
</script>
<style lang="scss">
.main {
  width: 100%;
  flex: 1;
  margin-bottom: 1rem;
  flex-direction: column;
  overflow-y: auto;
  min-height: 50px;
}
.main_head {
  display: flex;
  padding: 0.24rem 0.3rem;
  height: 1.16rem;
  width: 100%;
  /* background:#ccc; */
  align-items: center;
  justify-content: space-between;
  .main_head_1 {
    width: 0.68rem;
    margin-right: 0.08rem;
    img {
      width: 100%;
    }
  }
  .main_head_2 {
    width: 6.08rem;
    height: 0.68rem;
    background: #f5f5f5;
    color: #ccc;
    border-radius: 0.68rem;
    display: flex;
    align-items: center;
    font-size: 0.3rem;
    img {
      width: 0.3rem;
      height: 0.3rem;
      margin: 0 0.16rem 0 0.3rem;
    }
  }
}
.main_pic {
  width: 100%;
  height: 3.2rem;
  display: flex;
  overflow: auto;
  a {
    display: block;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.main_nav {
  /* width:rem; */
  height: 2.38rem;
  margin: 0 0.3rem;
  padding: 0.28rem 0 0.56rem 0;
  /* background:#ccc; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_box {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    width: 0.88rem;
    height: 0.88rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.main_taday {
  height: 1.38rem;
  /* background:#ccc; */
  margin: 0 0.3rem 0.06rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.taday_box {
  width: 3.42rem;
  background: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div:nth-child(1) {
    width: 1.8rem;
    height: 0.83rem;
    margin: 0.24rem 0 0 0.2rem;
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
  div:nth-child(2) {
    width: 1.04rem;
    height: 1.04rem;
    text-align: center;
    line-height: 1.04rem;
    margin-top: 0.14rem;
    margin-right: 0.2rem;
    border-radius: 0.08rem;
    font-size: 0;
    img {
      width: 100%;
      height: 100%;
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
.main_pm {
  height: 1.34rem;
  padding: 0.5rem 0.3rem 0.3rem 0.3rem;
  font-weight: bold;
  line-height: 0.54rem;
  font-size: 0.38rem;
  color: #262626;
}
.main_inner {
  /* height:2.7rem; */
  margin: 0 0.3rem;
  /* background:#ccc; */
  display: flex;
  justify-content: space-between;
}
.inner_box1 {
  width: 3.42rem;
  height: 2.7rem;
  background: #fafafa;
  div:nth-child(1) {
    width: 3.42rem;
    height: 1.06rem;
    padding: 0.24rem 0 0 0.2rem;
    p:nth-child(1) {
      height: 0.42rem;
      line-height: 0.42rem;
      font-size: 0.3rem;
      font-weight: 700;
      color: #333;
      margin-bottom: 0.08rem;
    }
    p:nth-child(2) {
      height: 0.33rem;
      line-height: 0.33rem;
      font-size: 0.24rem;
      color: #999;
    }
  }
  div:nth-child(2) {
    width: 3.02rem;
    height: 1.38rem;
    text-align: center;
    line-height: 1.04rem;
    margin-top: 0.11rem;
    margin-left: 0.2rem;
    border-radius: 0.08rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.inner_box2 {
  width: 3.42rem;
  /* height:2.7rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .inner_2 {
    width: 3.42rem;
    height: 1.32rem;
    background: #fafafa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.06rem;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    div:nth-child(1) {
      width: 1.8rem;
      height: 0.83rem;
      margin: 0.24rem 0 0 0.2rem;
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
    div:nth-child(2) {
      width: 1.04rem;
      height: 1.04rem;
      text-align: center;
      line-height: 1.04rem;
      margin-top: 0.14rem;
      margin-right: 0.2rem;
      border-radius: 0.08rem;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.main_hstj {
  height: 1.34rem;
  padding: 0.5rem 0.3rem 0.3rem 0.3rem;
  font-weight: bold;
  line-height: 0.54rem;
  font-size: 0.38rem;
  color: #262626;
  display: flex;
  justify-content: space-between;
  a {
    width: 0.92rem;
    height: 0.54rem;
    font-size: 0.26rem;
    color: #365899;
  }
}
.main_model {
  width: 100%;
  height: 4.23rem;
  overflow: hidden;
}
.model_box {
  margin: 0 0.3rem;
  height: 100%;
  /* transition-timing-function: ease-out; */
}
.swiper {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  box-sizing: content-box;
}
.swiper_box {
  width: 2rem;
  margin-right: 0.3rem;
  overflow: hidden;
  flex-shrink: 0;
  display: inline-block;
  div:nth-child(1) {
    width: 2rem;
    height: 2.8rem;
    img {
      width: 1.9rem;
      height: 100%;
    }
  }
  div:nth-child(2) {
    width: 2rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.26rem;
    color: #262626;
    overflow: hidden;
    margin-top: 0.16rem;
  }
  div:nth-child(3) {
    width: 2rem;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.22rem;
    color: #999;
    overflow: hidden;
    margin-top: 0.08rem;
  }
  div:nth-child(4) {
    height: 0.42rem;
    line-height: 0.42rem;
    margin-top: 0.07rem;
    span:nth-child(1) {
      font-size: 0.24rem;
      color: #9e100e;
    }
    span:nth-child(2) {
      font-size: 0.3rem;
      color: #9e100e;
    }
    span:nth-child(3) {
      font-size: 0.22rem;
      color: #999;
      margin-left: 0.04rem;
    }
  }
}
.tuijian_list {
  height: 4.08rem;
  width: 100%;
}
.tuijian_list_box {
  margin: 0 0.3rem;
  height: 100%;
  overflow: hidden;
}
.tj_list_main {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
}
.tj_list_main_box {
  flex-shrink: 0;
  width: 6.7rem;
  height: 100%;
  margin-right: 0.2rem;
}
.tj_list_main_box_link {
  display: block;
  width: 100%;
  height: 100%;
  padding-bottom: 0.3rem;
  border: 1px solid #ddd;
  div:nth-child(1) {
    height: 3.1rem;
    width: 100%;
    border-radius: 0.1rem 0.1rem 0 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  div:nth-child(3) {
    height: 0.4rem;
    margin: 0.08rem 0.2rem 0 0.2rem;
    line-height: 0.4rem;
    font-size: 0.26rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.kong3 {
  height: 0.2rem;
  width: 100%;
}
</style>