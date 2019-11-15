<template>
  <div id="app">
    <div class="header">
      <v-touch tag="span" @tap="taggleBack">
        <img src="http://login.kongfz.com/mobile/images/login/back.png" alt />
      </v-touch>
      <span>书目</span>
      <!-- <span class="iconfont icon-sousuo"></span> -->
      <span class="iconfont icon-shenglvehao"></span>
    </div>
    <div class="main_pic">
        <img :src="detail.img" alt="">
    </div>
    <section class="publish-box">
        <h1 class="book-title">{{detail.name}}</h1>
        <div class="puContent-box">
            <ul class="publish-content">
                <li>
                    <span class="publish-title">作者</span>
                    <span class="publish-con">{{detail.author}}</span>
                </li>
                <li>
                    <span class="publish-title">出版社</span>
                    <span class="publish-con">{{detail.press}}</span>
                </li>
                <li>
                    <span class="publish-title">出版时间</span>
                    <span class="publish-con">{{detail.pudate}}</span>
                </li>
                <li>
                    <span class="publish-title">ISBN</span>
                    <span class="publish-con">{{detail.isbn}}</span>
                </li>
                <li>
                    <span class="publish-title">定价</span>
                    <span class="publish-con">{{detail.price}}</span>
                </li>
            </ul>
            <span class="publish-more"></span>
        </div>
        <div class="db-score-box">
            <span class="db">豆瓣评分</span>
            <span class="db-score">9.3</span>
            <span class="db-score-icon all-start-45"></span>
        </div>
    </section>
    <section class="content-box flexibel">
        <div class="content-title">
            <h2 class="content">内容简介</h2>
            <span class="content-more"></span>
        </div>
        <div class="content-item">
            {{detail.content}}
        </div>
    </section>
    <section class="content-box flexibel">
        <div class="content-title">
            <h2 class="content">作者介绍</h2>
            <span class="content-more"></span>
        </div>
        <div class="content-item">
            {{detail.author}}
        </div>
    </section>
  </div>
</template>
<script>
import {detailApi} from "@api/detail"
export default {
    name:"Detail",
    props:["mid",],
    data(){
        return{
            detail:{}
        }
    },
    created(){
        // console.log(this.$route.query);
        this.detail=this.$route.query;
        console.log(this.detail);
    },
    methods:{
        taggleBack(){
            this.$router.back();
        }
    },
    

};
</script>
<style scope>
#app{
    width:7.5rem;
    margin:0 auto;
    display:flex;
    height:100%;
    position: relative;
    flex-direction: column;
    background-color: #f3f3f3;
}
.header{
    position: fixed;
    width: 100%;
    text-align: center;
    height: 0.88rem;
    line-height: 0.56rem;
    font-size: 0.34rem;
    font-weight:700;
    color: #262626;
    padding:0.16rem 0.2rem 0.16rem 0.16rem;
    background:#fff;
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
.main_pic{
    width:7.5rem;
    height:4.4rem;
    margin:0 auto;
    background-color: #fff;
    margin-top:0.9rem;
}
.main_pic img{
    height:100%;
    margin:0 auto;
}
.publish-box{
    background-color: #fff;
    width: 100%;
    padding: .5rem .4rem .3rem;
}
.publish-box .book-title {
    width: 6.7rem;
    min-height: .53rem;
    line-height: .53rem;
    font-size: .38rem;
    color: #262626;
    text-align: center;
    margin: 0 auto .32rem;
    font-weight: 550;
    word-break: break-all;
}
.publish-box .puContent-box {
    width: 6.7rem;
    height: 100%;
    margin: 0 auto;
    position: relative;
}
.publish-content .publish-title {
    display: inline-block;
    width: 1.4rem;
    text-align: left;
    line-height: .54rem;
    color: #999;
    font-size: .3rem;
    vertical-align: top;
    margin-right: .2rem;
}
.publish-content .publish-con {
    display: inline-block;
    width: 4.8rem;
    line-height: .54rem;
    text-align: left;
    color: #000;
    font-size: .3rem;
}
.publish-box .puContent-box .publish-more {
    width: .4rem;
    height: .4rem;
    position: absolute;
    bottom: .08rem;
    right: 0;
    background-size: 100%;
}
.publish-box .db-score-box {
    padding: .3rem 0 0;
    margin-top: .3rem;
    overflow: hidden;
    border-top: 1px solid #f3f3f3;
}
.publish-box .db-score-box .db {
    width: 1.4rem;
    color: #999;
    vertical-align: top;
    margin-right: .2rem;
}
.publish-box .db-score-box .db, .publish-box .db-score-box .db-score {
    display: inline-block;
    text-align: left;
    line-height: .54rem;
    font-size: .3rem;
    color: #000;
}
.publish-box .db-score-box .db-score-icon {
    float: right;
    display: block;
    vertical-align: middle;
    margin-top: .08rem;
    width: 1.6rem;
    height: .32rem;
    zoom: 1;
    background-repeat: no-repeat;
    background-size: 100%;
}
.db-score-icon.all-start-45 {
    background-position: 0 -.3rem;
}
.author-box, .content-box, .directory-box, .itemlist-box, .series-box, .version-box {
    width: 100%;
    margin-top: .2rem;
    padding: .4rem;
    background-color: #fff;
    box-sizing: border-box;
}
.author-box .author-title, .content-box .content-title, .directory-box .directory-title, .version-box .version-title {
    width: 6.7rem;
    height: .48rem;
    margin: 0 auto;
    font-size: .34rem;
    line-height: .48rem;
    color: #262626;
    font-weight: 700;
    position: relative;
}
.author-box .author-item, .content-box .content-item {
    width: 6.7rem;
    max-height: 1.62rem;
    line-height: .54rem;
    margin: .2rem auto 0;
    color: #666;
    font-size: .3rem;
    word-wrap: break-word;
    text-align: justify;
    overflow: hidden;
}
.author-box .author-title .author, .content-box .content-title .content, .directory-box .directory-title .directory, .version-box .version-title .version {
    font-weight: 550;
        font-size: 100%;
}
.author-box .author-more, .content-box .content-more, .directory-box .directory-more, .version-box .version-more {
    position: absolute;
    right: 0;
    top: -.03rem;
}
.author-box .author-more, .content-box .content-more, .directory-box .directory-more, .series-box .series-more, .version-box .version-more {
    width: .4rem;
    height: .4rem;
    float: right;
    margin-top: .05rem;
    background-size: 100%;
}
.author-box .author-item, .content-box .content-item {
    width: 6.7rem;
    max-height: 1.62rem;
    line-height: .54rem;
    margin: .2rem auto 0;
    color: #666;
    font-size: .3rem;
    word-wrap: break-word;
    text-align: justify;
    overflow: hidden;
}
</style>