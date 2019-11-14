<template>
     <div id="app">
        <div class="header">
            <v-touch tag="span" @tap="taggleBack">
                <img src="http://login.kongfz.com/mobile/images/login/back.png" alt="">
            </v-touch>
            <span>镜头下的中国</span>
            <!-- <span class="iconfont icon-sousuo"></span> -->
            <span class="iconfont icon-shenglvehao"></span>
        </div>
        <div class="main">
            <div class="main_head">
                <img src="http://img0.kfzimg.com/activity/6/50/650ae1226aa65d8d0ee501b28df9a965.jpg" alt="">
            </div>
            <div class="main_nav">
                <ul>
                    <span>影像新中国</span>
                    <span>昨日的世界</span>
                </ul>
                <div>
                    <img src="https://promotion.kongfz.com/img/下拉.png" alt="">
                </div>
            </div>
            <div class="main_title">影像新中国</div>
            <ul class="main_list">
                <li class="main_list_demo">
                    <div class="demo_left">
                        <img src="http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/c3df/c3dfba6db0862921c425aa810ab0711b_0_1_300_300.jpg"
                            alt="">
                    </div>
                    <div class="demo_right">
                        <div class="demo_right_box1">中国的颜色</div>
                        <div class="demo_right_box2">[法]尚陆(Jean Loh) 后浪 编者；[法]布鲁诺·巴贝（Bruno Barbey）
                            摄影/北京联合出版有限公司/2019-04/精装</div>
                        <div class="demo_right_box3">
                            布鲁诺·巴贝是第一个用彩色胶卷大量拍摄中国的玛格南摄影师。从1973年至2018年，拍摄时间跨越46年，拍摄地点涉及国内二十多个城市，客观展现当时中国的时代特征。</div>
                    </div>
                </li>
                <li class="main_list_demo">
                    <div class="demo_left">
                        <img src="http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/c3df/c3dfba6db0862921c425aa810ab0711b_0_1_300_300.jpg"
                            alt="">
                    </div>
                    <div class="demo_right">
                        <div class="demo_right_box1">中国的颜色</div>
                        <div class="demo_right_box2">[法]尚陆(Jean Loh) 后浪 编者；[法]布鲁诺·巴贝（Bruno Barbey）
                            摄影/北京联合出版有限公司/2019-04/精装</div>
                        <div class="demo_right_box3">
                            布鲁诺·巴贝是第一个用彩色胶卷大量拍摄中国的玛格南摄影师。从1973年至2018年，拍摄时间跨越46年，拍摄地点涉及国内二十多个城市，客观展现当时中国的时代特征。</div>
                    </div>
                </li>
                <li class="main_list_demo">
                    <div class="demo_left">
                        <img src="http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/c3df/c3dfba6db0862921c425aa810ab0711b_0_1_300_300.jpg"
                            alt="">
                    </div>
                    <div class="demo_right">
                        <div class="demo_right_box1">中国的颜色</div>
                        <div class="demo_right_box2">[法]尚陆(Jean Loh) 后浪 编者；[法]布鲁诺·巴贝（Bruno Barbey）
                            摄影/北京联合出版有限公司/2019-04/精装</div>
                        <div class="demo_right_box3">
                            布鲁诺·巴贝是第一个用彩色胶卷大量拍摄中国的玛格南摄影师。从1973年至2018年，拍摄时间跨越46年，拍摄地点涉及国内二十多个城市，客观展现当时中国的时代特征。</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        taggleBack(){
            this.$router.back();
        }
    }
}
</script>
<style >
#app{
    width:7.5rem;
    margin:0 auto;
    display:flex;
    height:100%;
    position: relative;
    flex-direction: column;
}
.header{
    position: relative;
    width: 100%;
    text-align: center;
    height: 0.88rem;
    line-height: 0.56rem;
    font-size: 0.34rem;
    color: #262626;
    padding:0.16rem 0.2rem 0.16rem 0.16rem;
    border-bottom:1px solid #f1f1f1;
}
.header span:nth-child(1){
    float:left;
    width:0.8rem;
    height:0.88rem;
    padding:0.24rem 0.2rem;
    position: absolute;
    top:0;
    left:0;
}
.header span:nth-child(1) img{
    width:0.4rem;
    height:0.4rem;
}
.header span:nth-child(3){
    position:absolute;
    display:block;
    width:0.56rem;
    height:0.56rem;
    right:0.2rem;
    top:0.16rem;
}
.main{
    flex:1;
    background-color: rgb(230, 238, 240);
}
.main_head{
    height:3.2rem;
    margin-bottom:0.05rem;
}
.main_head img{
    width:100%;
    height:100%;
}
.main_nav{
    height:1.02rem;
    margin-top:0.2rem;
    background:#fff;
}
.main_nav ul{
    width:6.6rem;
    height:100%;
    float:left;
}
.main_nav ul span{
    width:1.5rem;
    height:0.94rem;
    margin-left:0.4rem;
    text-align:center;
    line-height:0.94rem;
    font-family: PingFangSC-Regular;
    font-size: .3rem;
    /* font-weight:bold; */
}

.main_nav div{
    float:right;
    height:100%;
    width:0.9rem;
    display: flex;
    justify-content:center;
    align-items:center
}
.main_title{
    height: .8rem;
    font-size: .3rem;
    text-align:center;
    line-height:0.8rem;
    font-weight:bold;
    margin-top:.24rem;
    margin-bottom:0.112rem;
}
.main_list{
    display:flex;
    flex-direction: column;
}
.main_list_demo{
    height:3.2rem;
    padding:0 0.24rem;
    background:#fff;
    border-bottom:1px solid #cfcfcf;
}
.demo_left{
    float: left;
    width:3rem;
    height:100%;
    padding: 0.1rem 0;
}
.demo_left img{
    width:2.58rem;
    height:100%;
    margin:0 auto;
}
.demo_right{
    float: right;
    width:4rem;
    height:100%;
    padding:0.2rem 0 0.2rem  0.2rem;
}
.demo_right_box1{
    font-family: MicrosoftYaHei;
    font-size: .14rem;
    color: #333;
    letter-spacing: 0;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    margin-top: .03rem;
}
.demo_right_box2{
    color: #999;
    -webkit-line-clamp: 2;
    white-space: normal;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    margin-top: .09rem;
    line-height:0.36rem;
    height:0.72rem;
}
.demo_right_box3{
    height:0.96rem;
    font-family: MicrosoftYaHei;
    color: #ba7e48;
    letter-spacing: 0;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    display: -webkit-box;
    white-space: normal;
    font-size: .12rem;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: .09rem;
}

</style>