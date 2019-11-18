<template>
    <div>
         <div id="head">
         <span class="iconfont icon-xinxi  one" ></span>
        <span class="iconfont icon-wode  two" ></span>
    </div>
    <div id="user-box">
        <div class="user-logo">
            <img src="http://user.kongfz.com/data/member_pic/4850/11314850.jpg" alt="">
        </div>
        <div class="mess">
            <div class="mess-name"> 书友_275520</div>
            <div class="mess-detail">
                <span>买家好评</span>
                <i class="shu"></i>
                <span>信誉 0</span>
            </div>
        </div>
        <div class="sellbtn">
            <span>我要买书</span>
        </div>
    </div>
    <div id="section-box">
        <div class="section-left">
            <div class="left-one">0</div>
            <div class="left-two">我的竞拍</div>
        </div>
        <div class="section-left">
            <div>{{this.$store.state.cart.shopList.length}}</div>
            <div>收藏夹</div>
        </div>
        <div class="section-left">
            <div>{{this.$store.state.cart.cart.length}}</div>
            <div>足迹</div>
        </div>
    </div>
    <div id="section-mess">
        <div class="dingdan">
            <span class="paimai">我的订单</span>
            <span class="gd">查看更多</span>
        </div>
        <ul class="se-li">
          
            <li class="se-list">
                    <span class="iconfont icon-daiqueren"></span>
                    <div class="queren">待确认</div>
            </li>
            <li class="se-list">
                    <span class="iconfont icon-daiqueren"></span>
                    <div class="queren">待确认</div>
            </li>
            <li class="se-list">
                    <span class="iconfont icon-daiqueren"></span>
                    <div class="queren">待确认</div>
            </li>
            <li class="se-list cl">
                    <span class="iconfont icon-daiqueren"></span>
                    <div class="queren">待确认</div>
            </li>
            <li class="se-list">
                    <span class="iconfont icon-daiqueren"></span>
                    <div class="queren">待确认</div>
            </li>
            <li class="se-list">
                    <span class="iconfont icon-daiqueren"></span>
                    <div class="queren">待确认</div>
            </li>
        </ul>
    </div>
    <div id="section-mess">
            <div class="dingdan">
                <span class="paimai">我的拍卖</span>
                <span class="gd">查看更多</span>
            </div>
            <ul class="se-li">
              
                <li class="se-list">
                        <span class="iconfont icon-daiqueren"></span>
                        <div class="queren">待确认</div>
                </li>
                <li class="se-list">
                        <span class="iconfont icon-daiqueren"></span>
                        <div class="queren">待确认</div>
                </li>
                <li class="se-list">
                        <span class="iconfont icon-daiqueren"></span>
                        <div class="queren">待确认</div>
                </li>
              
            </ul>
        </div>

    </div>
</template>
<script>
export default {
    name:"Mine",
    created(){
        console.log(this)}
}
</script>
<style >
    #head{
    height: .8rem;
    line-height: .8rem;
    margin-bottom: .4rem;
    padding: 0 .3rem;
}
.one{
   float: right; 
   display: block;
   margin-left: .5rem;
}

.two{
    float: right; 
    margin-left: .5rem;
    display: block;
    
 }
 .icon-xinxi,.icon-wode{
    font-size: .48rem; 
 }
 #user-box{
    position: relative;
    height: 1.3rem;
    padding-left: .3rem;
    margin-bottom: .4rem;
 }
 .user-logo{
     float: left;
     width: 1.3rem;
     height: 1.3rem;
     margin-right: .24rem;
     border-radius: 50%;
     overflow: hidden;
 }
 .user-logo img{
     width: 100%;
     height: 100%;
 }
 .mess{
    padding: .16rem 0;
 }
 .mess .mess-name{
    margin-bottom: .12rem;
    line-height: .52rem;
    font-size: .38rem;
    color: #262626;
 }
 .mess-detail{
    line-height: .34rem;
    font-size: .24rem;
    color: #666;
 }
 .shu{
    display: inline-block;
    width: 1px;
    height: .24rem;
    line-height: .24rem;
    margin: 0 .1rem;
    font-size: 0;
    background: #c7c7c7;
    vertical-align: middle;
 }
 .sellbtn{
    position: absolute;
    right: 0;
    top: .2rem;
    width: 2rem;
    height: .58rem;
    line-height: .56rem;
    padding-left: .18rem;
    border: 1px solid #365899;
    border-radius: .29rem 0 0 .29rem;
    border-right: none;
    background: #fff;

 }
 #section-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .26rem .65rem;
    margin-bottom: .26rem;
    box-shadow: 0 0.06rem 0.16rem 0 hsla(0,0%,60%,.1);
    border-radius: .24rem;
}
.section-left{
    width: 1.1rem;
    text-align: center;
}
.left-one{
    line-height: .42rem;
    font-size: .3rem;
    color: #262626;
}
.left-two{
    line-height: .37rem;
    font-size: .26rem;
    color: #262626; 
}
#section-mess{
    margin-bottom: .26rem;
    box-shadow: 0 0.06rem 0.16rem 0 hsla(0,0%,60%,.1);
    border-radius: .24rem;
    background: #fff;

}
.dingdan{
    height: .86rem;
    line-height: .84rem;
    padding: 0 .3rem;
    border-bottom: 1px solid #eaeaea;
    font-size: .28rem;
    color: #262626;
}

.gd{
    float: right;
}
.se-li{
    padding: .3rem .28rem;
    height: 3rem;
}
.se-list{
    float: left;
    width: 1.2rem;
    margin-right: .56rem;
    margin-bottom: .6rem;
    text-align: center;
}
.icon-daiqueren{
    font-size: .48rem;
}
.queren{
    margin-top: .1rem;
    line-height: .33rem;
    font-size: .24rem;
    color: #262626;
}
.cl{
    margin-right: 0rem;
}
.paimai{
    float: left;
}
*{box-sizing:content-box; }

 
</style>