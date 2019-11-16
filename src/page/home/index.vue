<template>
  <Violin-scroll ref="scroll">
    <div id="main" class="main">
      <div id="main_head" class="main_head">
        <div class="main_head_1">
          <router-link to="/home" tag="a">
            <img
              src="data:image/png;base64,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"
              alt
            />
          </router-link>
        </div>
        <router-link :to="{name:'sousuo',params:{index:1}}" tag="a">
          <div class="main_head_2">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAAPFBMVEUAAACampqampqampqkpKSampqZmZmZmZmZmZmampqZmZmbm5uampqZmZmampqgoKCZmZmZmZmZmZmZmZnxEDpHAAAAE3RSTlMAQtiKCszp8+K/dmtTPCYVhe+oUAggIwAAALpJREFUKM+FU9kOwyAMg3BTCm39//86jU1NT+IXhGxicinGbBKFQMnM6gE2e+zw2V75EgEyulpbtSEgljO/AE7zVTtgOfIbMKkTJmA7vl/11VOvHKMAzLMCKP//R45/dom/XDKceoRD7qdng6uJ7/UDqRcQvjU1MI/sTiV2uHukHqe+CWp3D7BvAosgCkQL8ZNimmKhpFKLzRLbLQ2MMHK+jYd2BbXh2DcCteHidMVg9brCqeHyNkdKxAeG9gwGFxIALwAAAABJRU5ErkJggg=="
              alt
            />
            <div>商品名称 作者 出版社 ISBN</div>
          </div>
        </router-link>
      </div>
    <!-- <div id="main_pic" class="main_pic"> -->
      <!-- <div id="main_pic" class="main_pic"> -->
      <!-- <router-link to="/china" tag="a" v-for="(item,index) in img" :key="index">
          <img v-lazy="item" />
      </router-link>-->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>

      <!-- </div> -->
      <div id="main_nav" class="main_nav">
        <div class="nav_box" v-for="(item,index) in navlist" :key="index">
          <div>
            <router-link :to="item.path" tag="a">
              <img v-lazy="item.img" alt />
            </router-link>
          </div>
          <div>{{item.title}}</div>
        </div>
      </div>
      <div id="main_taday" class="main_taday">
        <div class="taday_box" v-for="(item,index) in tadayList" :key="index">
          <div>
            <p>{{item.title}}</p>
            <p>{{item.subTitle}}</p>
          </div>
          <div>
            <img v-lazy="item.imgUrl" alt />
          </div>
        </div>
      </div>
      <div id="main_taday" class="main_taday">
        <div class="taday_box" v-for="(item,index) in newList" :key="index">
          <router-link to="/newbooks" tag="a">
            <div>
              <p>{{item.title}}</p>
              <p>{{item.subTitle}}</p>
            </div>
            <div>
              <img v-lazy="item.imgUrl" alt />
            </div>
          </router-link>
        </div>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_pm">拍卖</div>
      <div class="main_inner">
        <div class="inner_box1">
          <div>
            <p>{{allList.title}}</p>
            <p>{{allList.subTitle}}</p>
          </div>
          <div>
            <img v-lazy="allList.imgUrl" alt />
          </div>
        </div>
        <div class="inner_box2">
          <div class="inner_2">
            <router-link to="/artwork" tag="a">
              <div>
                <p>{{artList.title}}</p>
                <p>{{artList.subTitle}}</p>
              </div>
              <div>
                <img v-lazy="artList.imgUrl" alt />
              </div>
            </router-link>
          </div>
          <div class="inner_2">
            <div>
              <p>{{djList.title}}</p>
              <p>{{djList.subTitle}}</p>
            </div>
            <div>
              <img v-lazy="djList.imgUrl" alt />
            </div>
          </div>
        </div>
      </div>
      <div id="main_taday" class="main_taday">
        <div class="taday_box" v-for="(item,index) in zhenList" :key="index">
          <div>
            <p>{{item.title}}</p>
            <p>{{item.subTitle}}</p>
          </div>
          <div>
            <img v-lazy="item.imgUrl" alt />
          </div>
        </div>
      </div>
      <div id="main_taday" class="main_taday">
        <div class="taday_box" v-for="(item,index) in bagList" :key="index">
          <div>
            <p>{{item.title}}</p>
            <p>{{item.subTitle}}</p>
          </div>
          <div>
            <img v-lazy="item.imgUrl" alt />
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
        <div class="model_box" ref="personWarp">
          <!--ref="personWarp"-->
          <div class="swiper" ref="personTop">
            <!--ref="personTop"-->
            <router-link
              tag="div"
              :to="{name:'details',query:{author:item.author,content:item.contentIntroduction,img:item.imgUrl,isbn:item.isbn,name:item.itemName,mid:item.mid,press:item.press,price:item.price,pudate:item.pubDate}}"
              class="swiper_box"
              v-for="(item,index) in booksList"
              :key="index"
            >
              <div class="img_box">
                <img v-lazy="item.imgUrl" alt />
              </div>
              <div class="swiper_title">{{item.itemName}}</div>
              <div class="swiper_author">{{item.author}}</div>
              <div class="swiper_price">
                <span>￥</span>
                <span>{{item.price}}</span>
                <span>起</span>
              </div>
            </router-link>
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
            <div class="tj_list_main_box" v-for="(item,index) in booksList2" :key="index">
              <router-link to="/china" tag="a" class="tj_list_main_box_link">
                <div>
                  <img v-lazy="item.imgUrl" alt />
                </div>
                <div class="kong3"></div>
                <div>{{item.description}}</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>新书广场</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="main_newgc">
        <ul class="main_newgc_list">
          <li class="newgc_list_box" v-for="(item,index) in newbookgc" :key="index">
            <a href>
              <div class="newgc_l">
                <img v-lazy="item.imgUrl" alt />
                <div class="newgc_pri">
                  <span>￥</span>
                  <span>{{item.price}}</span>
                </div>
              </div>
              <div class="newgc_r">
                <div class="newgc_r_1">{{item.itemNane}}</div>
                <div class="newgc_r_2">{{item.importantDesc}}</div>
                <div class="newgc_r_3">
                  <span v-for="(item2,index2) in item.tags" :key="index2">{{item2}}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>旧书-国学经典</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="main_newgc">
        <ul class="main_newgc_list">
          <router-link
            tag="li"
            class="newgc_list_box"
            :to="{name:'details',query:{author:item.author,content:item.contentIntroduction,img:item.imgUrl,isbn:item.isbn,name:item.itemName,mid:item.mid,press:item.press,price:item.price,pudate:item.pubDate}}"
            v-for="(item,index) in oldbook"
            :key="index"
          >
            <a href>
              <div class="newgc_l">
                <img v-lazy="item.imgUrl" alt />
                <div class="newgc_pri">
                  <span>￥</span>
                  <span>{{item.price}}</span>
                </div>
              </div>
              <div class="newgc_r">
                <div class="newgc_r_1">{{item.itemName}}</div>
                <div
                  class="newgc_r_2 author"
                >{{item.author}} / {{item.press}} / {{item.pubDate}} / {{item.binding}}</div>
                <div class="newgc_r_desc">{{item.contentIntroduction}}</div>
              </div>
            </a>
          </router-link>
        </ul>
      </div>
      <div class="main_hyh">换一换</div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>新书-新近出版</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="main_newgc">
        <ul class="main_newgc_list">
          <router-link
            tag="li"
            :to="{name:'details',query:{author:item.author,content:item.contentIntroduction,img:item.imgUrl,isbn:item.isbn,name:item.itemName,mid:item.mid,press:item.press,price:item.price,pudate:item.pubDate}}"
            class="newgc_list_box"
            v-for="(item,index) in newbookcb"
            :key="index"
          >
            <a href>
              <div class="newgc_l">
                <img v-lazy="item.imgUrl" alt />
                <div class="newgc_pri">
                  <span>￥</span>
                  <span>{{item.price}}</span>
                </div>
              </div>
              <div class="newgc_r">
                <div class="newgc_r_1">{{item.itemName}}</div>
                <div
                  class="newgc_r_2 author"
                >{{item.author}} / {{item.press}} / {{item.pubDate}} / {{item.binding}}</div>
                <div class="newgc_r_desc">{{item.contentIntroduction}}</div>
              </div>
            </a>
          </router-link>
        </ul>
      </div>
      <div class="main_hyh">换一换</div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>新书销售排行榜</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="main_newgc">
        <ul class="main_newgc_list">
          <router-link
            tag="li"
            :to="{name:'details',query:{author:item.author,content:item.contentIntroduction,img:item.imgUrl,isbn:item.isbn,name:item.itemName,mid:item.mid,press:item.press,price:item.price,pudate:item.pubDate}}"
            class="newgc_list_box"
            v-for="(item,index) in newbookphb"
            :key="index"
          >
            <a href>
              <div class="newgc_l">
                <img v-lazy="item.imgUrl" alt />
                <div class="newgc_pri">
                  <span>￥</span>
                  <span>{{item.price}}</span>
                </div>
              </div>
              <div class="newgc_r">
                <div class="newgc_r_1">{{item.itemName}}</div>
                <div
                  class="newgc_r_2 author"
                >{{item.author}} / {{item.press}} / {{item.pubDate}} / {{item.binding}}</div>
                <div class="newgc_r_desc">{{item.contentIntroduction}}</div>
              </div>
            </a>
          </router-link>
        </ul>
      </div>
      <div class="main_hyh">换一换</div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>旧籍寻踪</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="books_list1">
        <div class="books_list_m">
          <ul class="list_m_box" ref="personWrap">
            <li class="list_m_box_m" v-for="(item,index) in jjxzList" :key="index">
              <div class="pic">
                <img v-lazy="item.imgUrl" alt />
              </div>
              <div class="title">{{item.itemName}}</div>
              <div class="pri">
                <span>￥</span>
                <span>{{item.price}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>艺文集览</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="books_list1">
        <div class="books_list_m">
          <ul class="list_m_box">
            <li class="list_m_box_m" v-for="(item,index) in ywjlList" :key="index">
              <div class="pic">
                <img v-lazy="item.imgUrl" alt />
              </div>
              <div class="title">{{item.itemName}}</div>
              <div class="pri">
                <span>￥</span>
                <span>{{item.price}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>古籍荐览</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="books_list1">
        <div class="books_list_m">
          <ul class="list_m_box">
            <li class="list_m_box_m" v-for="(item,index) in gjjlList" :key="index">
              <div class="pic">
                <img v-lazy="item.imgUrl" alt />
              </div>
              <div class="title">{{item.itemName}}</div>
              <div class="pri">
                <span>￥</span>
                <span>{{item.price}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>民国旧书</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="books_list1">
        <div class="books_list_m">
          <ul class="list_m_box">
            <li class="list_m_box_m" v-for="(item,index) in mgjsList" :key="index">
              <div class="pic">
                <img v-lazy="item.imgUrl" alt />
              </div>
              <div class="title">【新文学珍本】 抗战小说 硬精装本《三百八十个》 上海良友图书公司1935年初版 鲛人（项德言）著！,</div>
              <div class="pri">
                <span>￥</span>
                <span>650</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>古籍拍卖</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>民国图书文献拍卖</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="books_list1">
        <div class="books_list_m">
          <ul class="list_m_box">
            <li class="list_m_box_m" v-for="(item,index) in mgtsList" :key="index">
              <div class="pic">
                <img v-lazy="item.imgUrl" alt />
                <div class="cj">{{item.bidNum}}次出价</div>
              </div>
              <div class="title">{{item.itemName}}</div>
              <div class="pri">
                <i>{{item.pmprice.n}}</i>
                <span>￥</span>
                <span>{{item.pmprice.c}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>民国期刊拍卖</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="books_list1">
        <div class="books_list_m">
          <ul class="list_m_box">
            <li class="list_m_box_m" v-for="(item,index) in mgqkList" :key="index">
              <div class="pic">
                <img v-lazy="item.imgUrl" alt />
                <div class="cj">{{item.bidNum}}出价</div>
              </div>
              <div class="title">{{item.itemName}}</div>
              <div class="pri">
                <i>{{item.pmprice.n}}</i>
                <span>￥</span>
                <span>{{item.pmprice.c}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>艺术品拍卖</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="art_item">
        <ul class="art_item_box">
          <li class="art_item_x" v-for="(item,index) in bqList" :key="index">{{item.title}}</li>
          <!-- <li class="art_item_x">名人字画</li>
          <li class="art_item_x">连环画</li>
          <li class="art_item_x">钱币</li>
          <li class="art_item_x">版画宣传画</li>
          <li class="art_item_x">邮票税票</li>
          <li class="art_item_x">古玩杂项</li>-->
        </ul>
      </div>
      <div class="books_list1">
        <div class="books_list_m">
          <ul class="list_m_box">
            <li class="list_m_box_m" v-for="(item,index) in ysppmList" :key="index">
              <div class="pic">
                <img v-lazy="item.imgUrl" alt />
                <div class="cj">{{item.bidNum}}次出价</div>
              </div>
              <div class="title">{{item.itemName}}</div>
              <div class="pri">
                <i>{{item.pmprice.n}}</i>
                <span>￥</span>
                <span>{{item.pmprice.c}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_kong"></div>
      <div class="main_kong2"></div>
      <div class="main_hstj main_sdtj">
        <span>为您推荐</span>
        <a href class="iconfont">更多</a>
      </div>
      <div class="recommend_list">
        <ul>
          <li v-for="(item,index) in wntjList" :key="index">
            <a href>
              <div class="img_box">
                <img v-lazy="item.imgMiddle" alt />
              </div>
              <div class="title">{{item.itemName}}</div>
              <div class="middle_box clearfix">
                <div class="phase">{{item.quality}}</div>
                <div class="address">{{item.area}}</div>
              </div>
              <div class="price">
                <span>￥</span>
                <span>{{item.price}}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="inner">- 没有更多 -</div>
    </div>
  </Violin-scroll>
</template>
<script>
import { homeApi, homebookApi } from "@api/home";
import { Lazyload, Swipe, SwipeItem } from "vant";
import BScroll from "better-scroll";
export default {
  name: "Home",
  components: {
    [Lazyload.name]: Lazyload,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      images: [
        "https://img0.kfzimg.com/operation/c1/f3/c1f3dd8ee66df73a4c2011986c1b7902.jpg",
        "https://img0.kfzimg.com/operation/86/b4/86b4c29face46398d16888903dcc4d86.jpg",
        "https://img0.kfzimg.com/operation/e3/f7/e3f720048d6a6e850118d6dc0d1f8980.jpg",
        "https://img0.kfzimg.com/operation/ec/68/ec6860c8416b4400ed514bf934c99874.jpg",
        "https://img0.kfzimg.com/operation/65/0a/650ae1226aa65d8d0ee501b28df9a965.jpg",
        "https://img0.kfzimg.com/operation/6f/86/6f86e5bb936c153ce1a9c58e5875fab0.jpg",
        "https://img0.kfzimg.com/operation/2e/9c/2e9c3afc1516b0a75bc284dd0c3ac107.jpg",
        "https://img0.kfzimg.com/operation/57/82/57825be21c468f9df23d4224449c57ba.jpg"
      ],
      navlist: [
        {
          title: "线装古籍",
          img:
            "https://img0.kfzimg.com/operation/7e/67/7e67ee755c4751b08ca2cf4f6c167b5a.png",
          path: "/list"
        },
        {
          title: "民国旧书",
          img:
            "https://img0.kfzimg.com/operation/68/78/6878c2adf90826c96b06689d4d0e9ad8.png",
          path: "/list"
        },
        {
          title: "名人墨迹",
          img:
            "https://img0.kfzimg.com/operation/96/79/9679391cb144b9da2d5934baf7798bb3.png",
          path: "/list"
        },
        {
          title: "古玩杂项",
          img:
            "https://img0.kfzimg.com/operation/87/37/873758d4bbdf66f53e4aa444b7489756.png",
          path: "/list"
        },
        {
          title: "全部分类",
          img:
            "https://img0.kfzimg.com/operation/0d/f9/0df9dbd219fbe285efb7412b4649290f.png",
          path: "/classification"
        }
      ],
      booksList: JSON.parse(sessionStorage.getItem("booksList")) || [],
      booksList2: [],
      tadayList: [],
      newList: [],
      zhenList: [],
      bagList: [],
      allList: {},
      artList: {},
      djList: {},
      newbookgc: {},
      oldbook: {},
      newbookcb: {},
      newbookphb: {},
      jjxzList: {},
      ywjlList: {},
      gjjlList: {},
      mgjsList: {},
      mgtsList: {},
      mgqkList: {},
      ysppmList: {},
      wntjList: {},
      bqList: []
    };
  },
  created() {
    this.handlehomeApi1(1);
    this.handlehomeApi2(2);
    this.$store.dispatch("home/handlehomeApi3", 3);
    this.$nextTick(() => {
      this.personScroll();
    });
  },
  activated() {
    this.booksList = JSON.parse(sessionStorage.getItem("booksList"));
    this.booksList2 = JSON.parse(sessionStorage.getItem("booksList2"));
    this.newbookgc = JSON.parse(sessionStorage.getItem("newbookgc"));
    this.oldbook = JSON.parse(sessionStorage.getItem("oldbook"));
    this.newbookcb = JSON.parse(sessionStorage.getItem("newbookcb"));
    this.newbookphb = JSON.parse(sessionStorage.getItem("newbookphb"));
    this.jjxzList = JSON.parse(sessionStorage.getItem("jjxzList"));
    this.ywjlList = JSON.parse(sessionStorage.getItem("ywjlList"));
    this.gjjlList = JSON.parse(sessionStorage.getItem("gjjlList"));
    this.mgjsList = JSON.parse(sessionStorage.getItem("mgjsList"));
    this.mgtsList = JSON.parse(sessionStorage.getItem("mgtsList"));
    this.mgqkList = JSON.parse(sessionStorage.getItem("mgqkList"));
    this.ysppmList = JSON.parse(sessionStorage.getItem("ysppmList"));
    this.bqList = JSON.parse(sessionStorage.getItem("bqList"));
    this.wntjList = JSON.parse(sessionStorage.getItem("wntjList"));
    // console.log(this.newbookgc);
  },
  methods: {
    async handlehomeApi1(currPage) {
      let data = await homeApi(currPage);
      this.tadayList = data.result.list[0].data;
      this.newList = data.result.list[1].data;
      this.allList = data.result.list[2].data[0];
      this.artList = data.result.list[2].data[1];
      this.djList = data.result.list[2].data[2];
    },
    async handlehomeApi2(currPage) {
      let data = await homeApi(currPage);
      this.zhenList = data.result.list[0].data;
      this.bagList = data.result.list[1].data;
    },
    personScroll() {
      let width = this.booksList.length * 1.3;
      console.log(this.$refs.personTop);
      this.$refs.personTop.style.width = width + "rem";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personTop, {
            startX:0,
            scrollX: false,
            scrollY: false,
            click: true,
            probeType: 3,
             eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  },
  mounted() {
    this.$refs.scroll.handlepullingUp(() => {
      // this.$store.dispatch("home/handlehomeApi3",3);
      this.$store.dispatch("home/handlehomeApi4", 4);
      this.$store.dispatch("home/handlehomeApi5", 5);
      this.$store.dispatch("home/handlehomeApi6", 6);
      this.$store.dispatch("home/handlehomeApi7", 7);
      this.$store.dispatch("home/handlehomeApi8", 16);
    });
    this.$refs.scroll.handleScroll();
  }
};
</script>
<style lang="scss" scope>
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
// .main_pic {
//   width: 100%;
//   height: 3.2rem;
//   display: flex;
//   overflow: auto;
//   a {
//     display: block;
//     width: 100%;
//     height: 100%;
//     flex-shrink: 0;
//   }
//   img {
//     width: 100%;
//     height: 100%;
//   }
// }
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
    margin-bottom: 0.05rem;
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
  // height: 4.23rem;
  overflow: hidden;
}
.model_box {
  margin: 0 0.3rem;
  height: 100%;
  /* transition-timing-function: ease-out; */
}
.swiper {
  width: 13rem;
  height: 100%;
  // display: flex;
  overflow: auto;
  box-sizing: content-box;
  white-space: nowrap;
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
  border: 1px solid #eee;
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
/* main_newgc  */
.main_newgc {
  width: 100%;
}
.main_newgc_list {
  width: 6.9rem;
  margin: 0 auto;
}
.newgc_list_box {
  width: 100%;
  height: 3rem;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  .newgc_l {
    width: 2rem;
    height: 2.8rem;
    float: left;
    margin: 0.1rem 0;
    position: relative;
    line-height: 2.8rem;
    text-align: center;
    font-size: 0;
    img {
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
      margin-top: 0.6rem;
    }
  }
}
.newgc_l div {
  width: 1.12rem;
  height: 0.6rem;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0.45rem;
  min-width: 1.12rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  background: rgba(158, 16, 14, 0.8);
  color: #fff;
  padding: 0 0.14rem 0 0.04rem;
  border-radius: 0 0.7rem 0.7rem 0;
  span:nth-child(1) {
    font-size: 0.26rem;
  }
  span:nth-child(2) {
    font-size: 0.3rem;
  }
}
.newgc_r {
  width: 4.6rem;
  height: 3rem;
  float: right;
  border-bottom: 1px solid #f3f3f3;
}
.newgc_r_1 {
  width: 100%;
  height: 0.42rem;
  line-height: 0.42rem;
  font-size: 0.3rem;
  font-weight: 700;
  color: #262626;
  margin-top: 0.2rem;
  overflow: hidden;
}
.newgc_r_2 {
  width: 100%;
  height: 0.72rem;
  font-size: 0.24rem;
  color: #999;
  text-align: justify;
  line-height: 0.36rem;
  margin-top: 0.2rem;
  overflow: hidden;
}
.newgc_r_3 {
  margin-top: 0.4rem;
  font-size: 0;
  height: 0.44rem;
  overflow: hidden;
  span {
    position: relative;
    display: inline-block;
    width: auto;
    height: 0.44rem;
    text-align: center;
    line-height: 0.42rem;
    padding: 0 0.16rem;
    font-size: 0.24rem;
    color: #997f55;
    background-size: 100% 100%;
    margin-right: 0.14rem;
    border: 1px solid rgba(153, 127, 85, 0.6);
    border-radius: 0.08rem;
    margin-bottom: 0.1rem;
  }
}
.author {
  color: #262626;
}
.newgc_r_desc {
  color: #999;
  text-align: justify;
  width: 100%;
  height: 0.72rem;
  font-size: 0.24rem;
  line-height: 0.36rem;
  overflow: hidden;
  margin-top: 0.2rem;
}
/* main over */
.main_hyh {
  height: 0.8rem;
  width: 100%;
  text-align: center;
  line-height: 0.4rem;
  padding-top: 0.4rem;
  font-size: 0.26rem;
  color: #365899;
}
.books_list1 {
  width: 100%;
  overflow: hidden;
}
.books_list_m {
  width: 6.9rem;
  margin: 0 auto;
}
.list_m_box {
  width: 100%;
  // display: flex;
  overflow: auto;
}
.list_m_box_m {
  flex-shrink: 0;
  width: 2.1rem;
  margin-right: 0.2rem;
}
.list_m_box_m .pic {
  position: relative;
  width: 2.1rem;
  height: 2.1rem;
  text-align: center;
  line-height: 2.1rem;
  border-radius: 0.08rem;
  font-size: 0;
  overflow: hidden;
}
.list_m_box_m .pic img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.list_m_box_m .title {
  width: 2.1rem;
  height: 0.8rem;
  line-height: 0.4rem;
  font-size: 0.26rem;
  color: #262626;
  overflow: hidden;
  margin-top: 0.16rem;
}
.list_m_box_m .pri {
  width: 100%;
  height: 0.42rem;
  line-height: 0.42rem;
  color: #9e100e;
  margin-top: 0.04rem;
}
.list_m_box_m .pri span:nth-of-type(1) {
  font-size: 0.24rem;
}
.list_m_box_m .pri span:nth-of-type(2) {
  font-size: 0.3rem;
}
.list_m_box_m .pri i {
  font-size: 0.22rem;
  color: #999;
}
.cj {
  position: absolute;
  left: 0.1rem;
  bottom: 0.06rem;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.22rem;
  color: #fff;
}
.art_item {
  width: 1005;
}
.art_item_box {
  width: 6.9rem;
  margin: 0 auto;
}
.art_item_x {
  display: inline-block;
  height: 0.64rem;
  line-height: 0.62rem;
  border: 1px solid hsla(0, 0%, 78%, 0.6);
  border-radius: 0.64rem;
  font-size: 0.28rem;
  color: #262626;
  padding: 0 0.3rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
}
.recommend_list {
  width: 100%;
  background: linear-gradient(#fff, #f8f8f8 5.42rem, #f8f8f8);
}
.recommend_list ul {
  width: 7.1rem;
  margin: 0 auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
}
.recommend_list ul li {
  width: 3.46rem;
  height: 5.42rem;
  background: #fff;
  border-radius: 0.08rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
}
.recommend_list ul li a {
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
}
.recommend_list ul li a .img_box {
  width: 3.46rem;
  height: 3.46rem;
  text-align: center;
  line-height: 3.46rem;
  font-size: 0;
}
.recommend_list ul li a .img_box img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
}
.recommend_list ul li a .title {
  width: 3.06rem;
  height: 0.8rem;
  line-height: 0.4rem;
  font-size: 0.26rem;
  overflow: hidden;
  margin: 0.14rem auto 0;
}
.recommend_list ul li a .middle_box {
  width: 3.06rem;
  height: 0.36rem;
  line-height: 0.36rem;
  margin: 0.04rem auto 0;
}
.recommend_list ul li a .middle_box .phase {
  float: left;
  padding: 0 0.1rem;
  height: 0.36rem;
  font-size: 0.22rem;
  color: #999;
  background: #fafafa;
  border-radius: 0.08rem;
}
.recommend_list ul li a .middle_box .address {
  float: right;
  font-size: 0.22rem;
  color: #999;
}
.recommend_list ul li a .price {
  width: 3.06rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.28rem;
  color: #9e100e;
  margin: 0.06rem auto 0;
}
.recommend_list ul li a .price span:nth-of-type(1) {
  font-size: 0.24rem;
}
.recommend_list ul li a .price span:nth-of-type(2) {
  font-size: 0.3rem;
} /* main_newgc  */
.main_newgc {
  width: 100%;
}
.main_newgc_list {
  width: 6.9rem;
  margin: 0 auto;
}
.newgc_list_box {
  width: 100%;
  height: 3rem;
}
.newgc_list_box a {
  display: block;
  width: 100%;
  height: 100%;
}
.newgc_l {
  width: 2rem;
  height: 2.8rem;
  float: left;
  margin: 0.1rem 0;
  position: relative;
  line-height: 2.8rem;
  text-align: center;
  font-size: 0;
}
.newgc_l img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  margin-top: 0.6rem;
}
.newgc_l div {
  width: 1.12rem;
  height: 0.6rem;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0.45rem;
  min-width: 1.12rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  background: rgba(158, 16, 14, 0.8);
  color: #fff;
  padding: 0 0.14rem 0 0.04rem;
  border-radius: 0 0.7rem 0.7rem 0;
}
.newgc_l div span:nth-child(1) {
  font-size: 0.26rem;
}
.newgc_l div span:nth-child(2) {
  font-size: 0.3rem;
}
.newgc_r {
  width: 4.6rem;
  height: 3rem;
  float: right;
  border-bottom: 1px solid #f3f3f3;
}
.newgc_r_1 {
  width: 100%;
  height: 0.42rem;
  line-height: 0.42rem;
  font-size: 0.3rem;
  font-weight: 700;
  color: #262626;
  margin-top: 0.2rem;
  overflow: hidden;
}
.newgc_r_2 {
  width: 100%;
  height: 0.72rem;
  font-size: 0.24rem;
  color: #999;
  text-align: justify;
  line-height: 0.36rem;
  margin-top: 0.2rem;
  overflow: hidden;
}
.newgc_r_3 {
  margin-top: 0.4rem;
  font-size: 0;
  height: 0.44rem;
  overflow: hidden;
}
.author {
  color: #262626;
}
.newgc_r_3 span {
  position: relative;
  display: inline-block;
  width: auto;
  height: 0.44rem;
  text-align: center;
  line-height: 0.42rem;
  padding: 0 0.16rem;
  font-size: 0.24rem;
  color: #997f55;
  background-size: 100% 100%;
  margin-right: 0.14rem;
  border: 1px solid rgba(153, 127, 85, 0.6);
  border-radius: 0.08rem;
  margin-bottom: 0.1rem;
}
.newgc_r_desc {
  color: #999;
  text-align: justify;
  width: 100%;
  height: 0.72rem;
  font-size: 0.24rem;
  line-height: 0.36rem;
  overflow: hidden;
  margin-top: 0.2rem;
}
/* main over */
.main_hyh {
  height: 0.8rem;
  width: 100%;
  text-align: center;
  line-height: 0.4rem;
  padding-top: 0.4rem;
  font-size: 0.26rem;
  color: #365899;
}
.books_list1 {
  width: 100%;
  overflow: hidden;
}
.books_list_m {
  width: 6.9rem;
  margin: 0 auto;
  overflow: unset;
}
.list_m_box {
  // width: 100%;
  display: flex;
  overflow: auto;
  flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
}
.list_m_box_m {
  flex-shrink: 0;
  float: left;
  width: 2.1rem;
  height: 3.7rem;
  margin-right: 0.2rem;
}
.list_m_box_m .pic {
  position: relative;
  width: 2.1rem;
  height: 2.1rem;
  text-align: center;
  line-height: 2.1rem;
  border-radius: 0.08rem;
  font-size: 0;
  overflow: hidden;
}
.list_m_box_m .pic img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.list_m_box_m .title {
  width: 2.1rem;
  height: 0.8rem;
  line-height: 0.4rem;
  font-size: 0.26rem;
  color: #262626;
  overflow: hidden;
  margin-top: 0.16rem;
}
.list_m_box_m .pri {
  width: 100%;
  height: 0.42rem;
  line-height: 0.42rem;
  color: #9e100e;
  margin-top: 0.04rem;
}
.list_m_box_m .pri span:nth-of-type(1) {
  font-size: 0.24rem;
}
.list_m_box_m .pri span:nth-of-type(2) {
  font-size: 0.3rem;
}
.list_m_box_m .pri i {
  font-size: 0.22rem;
  color: #999;
}
.cj {
  position: absolute;
  left: 0.1rem;
  bottom: 0.06rem;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.22rem;
  color: #fff;
}
.art_item {
  width: 1005;
}
.art_item_box {
  width: 6.9rem;
  margin: 0 auto;
}
.art_item_x {
  display: inline-block;
  height: 0.64rem;
  line-height: 0.62rem;
  border: 1px solid hsla(0, 0%, 78%, 0.6);
  border-radius: 0.64rem;
  font-size: 0.28rem;
  color: #262626;
  padding: 0 0.3rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
}
.recommend_list {
  width: 100%;
  background: linear-gradient(#fff, #f8f8f8 5.42rem, #f8f8f8);
}
.recommend_list ul {
  width: 7.1rem;
  margin: 0 auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
}
.recommend_list ul li {
  width: 3.46rem;
  height: 5.42rem;
  background: #fff;
  border-radius: 0.08rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
}
.recommend_list ul li a {
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
}
.recommend_list ul li a .img_box {
  width: 3.46rem;
  height: 3.46rem;
  text-align: center;
  line-height: 3.46rem;
  font-size: 0;
}
.recommend_list ul li a .img_box img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
}
.recommend_list ul li a .title {
  width: 3.06rem;
  height: 0.8rem;
  line-height: 0.4rem;
  font-size: 0.26rem;
  overflow: hidden;
  margin: 0.14rem auto 0;
}
.recommend_list ul li a .middle_box {
  width: 3.06rem;
  height: 0.36rem;
  line-height: 0.36rem;
  margin: 0.04rem auto 0;
}
.recommend_list ul li a .middle_box .phase {
  float: left;
  padding: 0 0.1rem;
  height: 0.36rem;
  font-size: 0.22rem;
  color: #999;
  background: #fafafa;
  border-radius: 0.08rem;
}
.recommend_list ul li a .middle_box .address {
  float: right;
  font-size: 0.22rem;
  color: #999;
}
.recommend_list ul li a .price {
  width: 3.06rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.28rem;
  color: #9e100e;
  margin: 0.06rem auto 0;
}
.recommend_list ul li a .price span:nth-of-type(1) {
  font-size: 0.24rem;
}
.recommend_list ul li a .price span:nth-of-type(2) {
  font-size: 0.3rem;
}
.inner {
  text-align: center;
  line-height: 0.3rem;
  padding: 0.4rem 0;
  font-size: 0.26rem;
  color: #c2c2c2;
  background: #f8f8f8;
}
</style>