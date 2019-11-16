<template>
<div>


    <div class="contt">
           <div id="header">
            <span class="iconfont icon-fanhui  fanhui"></span>
            <span class="iconfont icon-dianpu dianpu"></span>
            <span class="iconfont icon-heng heng"></span>
        <img :src="a.bigImg" alt="">
    </div>
    <div id="container">
        <div class="titles">
            <span class="zy">自营</span>
            <span class="detail">{{a.itemName}}</span>
            <p>普通藏书票+帆布袋，《读宋诗随笔》+《宋词赏析》+《唐人七绝诗浅释》+《古今诗选》+特制礼盒，港澳台不参与本次活动。</p>
            <p class="q">
               <span class="nowprice">
                   <i class="fu">￥</i>
                   <i class="nq">{{a.maxPrice}}</i>
               </span>
               <span class="discount">8.9折</span>
               <span class="yprice">
                   <i>￥</i>
                   <i >{{a.beginPrice}}</i>
               </span>
               <span class="dizhi">北京朝阳</span>

            </p>
            <p class="kucun">
                <span class="quanxin">全新</span>
                <span class="kc">库存</span>
            </p>
            <p class="timu top-">
                <span class="wt">作者</span>
                <span class="da">程千帆 沈祖棻</span>
            </p>
            <p class="timu">
                <span class="wt">出版社</span>
                <span class="da">陕西师范大学出版社</span>
            </p>
            <p class="timu">
                <span class="wt">年代</span>
                <span class="da">2010年至今</span>
            </p>
            <p class="timu">
                <span class="wt">装帧</span>
                <span class="da">精装</span>
            </p>
            <p class="timu">
                <span class="wt">定价</span>
                <span class="da">267.4元</span>
            </p>
            <p class="timu">
                <span class="wt">货号</span>
                <span class="da">代发</span>
            </p>
            <p class="timu">
                <span class="wt">上书时间</span>
                <span class="da">2019-11-08</span>
            </p>
            <p class="address">
                <span class="sz">送至</span>
                <span class="diqu">北京朝阳区</span>
            </p>
            <p class="address">
                <span class="sz">运费</span>
                <span class="diqu">买家承担</span>
            </p>
            <p class="address">
                <span class="sz">活动</span>
                <span class="diqu">满99.00元包邮（快递）</span>
            </p>
    </div>
    </div>

      </div> 
          <div id="foot">
        <div class="foot-total">
            <a href="" class="dp">
                <span class="iconfont icon-dianpu zt"></span>
                <i>店铺</i>
            </a>
            <a href="" class="dp">
                <span class="iconfont icon-lianxi zt"></span>
                <i>联系</i>
            </a>
            <a href="" class="dp">
                    <span class="iconfont icon-shoucang zt"></span>
                    <i>收藏</i>
            </a>
            <v-touch  class="gwc" @tap="handleSumbit">加入购物车</v-touch>
            <a href="" class="buy">立即购买</a>
           
        </div>
    </div> 
    </div>
</template>
<script>
import Vue from 'vue';
import { Popup } from 'vant';
Vue.use(Popup);
export default {
    name:"Detaillist",
    data(){
        return {
             itemlist:[],
             itemid:0,
             a:[],
        }
       
    },
    created(){
        this.itemlist=JSON.parse(sessionStorage.getItem("zz"))
    },
    mounted(){
            this.itemid=this.$route.params.itemid;
            for(let i=0;i<this.itemlist.length;i++){
                if(Number(this.itemlist[i].itemId)==this.itemid){
                    console.log(111);
                    this.a=this.itemlist[i];
                    console.log(this.a)
                }
            }
          
    },
    methods:{
        handleSumbit(){
            console.log(this.itemid);
        }
    },
}
</script>
<style >
.contt{
 background: #c7c7c7;
 position: absolute;
 top:0;
 left:0;
 bottom: 0;
 right: 0;
 margin-bottom: 1.1rem
}
#header{
    width: 298px;
    height: 375px;
    text-align: center;
    margin: auto;
    position: relative;
   
}
#header img{
    width:100%;
    height: 100%;
}
.icon-fanhui {
    position: absolute;
    top: .16rem;
    width: .56rem;
    height: .56rem;
    left: -.7rem;
}
.dianpu{
    position: absolute;
    top: .16rem;
    right: .2rem;
}
.heng{
    position: absolute;
    top: .16rem;
    right: -.7rem;
    width: .56rem;
    height: .56rem;    

}

.container{
    height: 100%;
    width: 100%;
}
.ms{
    width: 100%;
    max-width: 7.5rem;
    padding: 0 .3rem;
    height: .9rem;
    line-height: .9rem;
    font-size: .26rem;
    color: #856d49;
    letter-spacing: 0;
    background: #fbf6e8;
    z-index: 200;
    overflow: hidden;
}
.titles{
    overflow: hidden;
    margin: .24rem auto 0;
    padding: 0 .3rem;
    color: #262626;
    letter-spacing: 0;
    line-height: .48rem;
    width: 100%;
    background: #fff;
    padding-bottom: 1.1rem;
}
.zy{
    display: inline-block;
    height: .3rem;
    line-height: .3rem;
    padding: 0 .08rem;
    border-radius: .06rem;
    font-size: .22rem;
    font-weight: 400;
    background: #d10e0b;
    color: #fff;
}
.detail{
    color: #262626;
    letter-spacing: 0;
    line-height: .48rem;
    font-size: .32rem;
    font-weight: 600
}
.q{
    overflow: hidden;
    width: 6.9rem;
    margin-top: .16rem;
    margin-left: .28rem;
    line-height: .62rem;
}
.nowprice{
    line-height: .62rem;
    display: block;
    float: left;
    height: .62rem;
}
.discount{
    float: left;
    height: .62rem;
    line-height: .81rem;
    font-size: .24rem;
    color: #d48c68;
    display: block;
    margin-left: .2rem;
    margin-right: .2rem;
}
.yprice{
    float: left;
    text-decoration: line-through;
    height: .62rem;
    line-height: .81rem;
    font-size: .24rem;
    color: #999;
    letter-spacing: .7px;
    display: block;
    font-size: .24rem;
    color: #999;
}
.dizhi{
    float: right;
    height: .62rem;
    line-height: .77rem;
    font-size: .24rem;
    color: #999;
    letter-spacing: 0;
    display: block;
    margin-right: .4rem;
}
.fu{
    color: #9e100e;
    font-size: .28rem;
}
.nq{
    font-size: .44rem;
    color: #9e100e;

}
.kucun{
    overflow: hidden;
    width: 6.9rem;
    margin-top: .1rem;
    padding-bottom: .2rem;
    margin-right: .4rem;
    border-bottom: 1px solid #ccc;
  
}
.quanxin{
    float: left;
    padding: .02rem .18rem 0;
    height: .52rem;
    line-height: .5rem;
    letter-spacing: 0;
    text-align: center;
    color: #666;
    border-radius: .08rem;
    background: #f7f7f7;
}
.kc{
    float: right;
    letter-spacing: 0;
    height: .6rem;
    font-size: .24rem;
    line-height: .6rem;
    color: #999;
}
.top-{
    padding-top:.2rem;
}
.wt{
    float: left;
    width: 1.29rem;
    text-align: left;
    color: #c7c7c7;
    display: block;
}
.da{
    float: left;
    width: 5.3rem;
    text-align: left;
    color: #262626;
}
.timu{
    overflow: hidden;
    width: 100%;
    font-size: .26rem;
    letter-spacing: 0;
    line-height: .47rem;
}
.address{
    position: relative;
    width: 100%;
    height: .9rem;
    line-height: .9rem;
    border-bottom: 1px solid #f3f3f3;

}
.sz{
    float: left;
    width: .77rem;
    font-size: .26rem;
    color: #999;
    letter-spacing: 0;
    display: block;
}
.diqu{
    float: left;
    width: 5.65rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .26rem;
    color: #262626;
    letter-spacing: 0;
    display: block;
}
#foot{
    width: 100%;
    min-height: 1.1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 200;
}
.dp{
    float: left;
    margin-top: .15rem;
    color: #666;
    display: flex;
    flex-direction: column;
    width: .48rem;
    height: .8rem;
    margin-right: .8rem;
    align-items: center;
    justify-content: center;


}
.dp i{
    width: .5rem;
} 
.foot-total{
    display: flex;
    padding: .2rem;

}
.zt{
    margin-bottom: .1rem;
}
.buy{
    margin-top: .15rem;
    height: .8rem;
    font-size: .28rem;
    line-height: .8rem;
    text-align: center;
    background: #9e100e;
    color: #fff;
    border-radius: 0 5px 5px 0;
    width: 1.7rem;
    padding:0 .2rem ;

}
.gwc{
    width: 1.7rem;
    margin-top: .15rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    font-size: .28rem;
    background: #d48c68;
    color: #fff;
    padding:0 .2rem;

}
    
</style>