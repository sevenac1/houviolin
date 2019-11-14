<template>
  <div class="scroll_container">
    <!-- <div class="scroll_loading" v-if="loadingFlag">
      <i class="fa fa-spinner fa-pulse"></i>
    </div> -->
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>


<script>
<<<<<<< HEAD
import  {auctionApi} from "@api/auction"
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
import BScroll from "better-scroll";
export default {
  name: "Better",
  data(){
      return{
          loadingFlag:false
      }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //开启下拉刷新
      pullDownRefresh: {
        threshold:30
      },
      //开启上拉加载更多
      pullUpLoad: true,
      //scroll事件的配置项
      probeType:1,
      click:true,
      tap:true
    });
  },
  methods: {
    handleScrollTo(y){
      this.scroll.scrollTo(0,y,300)
    },
    handleScroll(){
        this.scroll.on("scroll",this.handleScrollCb)
    },
<<<<<<< HEAD
    // handleScrollCb({y}){
    //   if(y>=500){
    //        console.log(y);
    //     }
    // },
    //下拉刷新
    handlepullingDown(callback) {
      this.scroll.on("pullingDown", () => {
        console.log(333);
=======
    handleScrollCb({y}){
      if(y>=30){
            this.loadingFlag = true;
        }
    },
    //下拉刷新
    handlepullingDown(callback) {
      this.scroll.on("pullingDown", () => {
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
        callback();
      });
    },
    handlefinishPullDown() {
      //通知better-scroll进行下一次下拉刷新
      this.scroll.finishPullDown();
      //重新计算better-scroll;
      this.scroll.refresh();
        setTimeout(()=>{
            this.loadingFlag = false;
        },500)
    },
    //上拉加载更多
    handlepullingUp(callback){
      this.scroll.on('pullingUp',()=>{
          callback();
      })
    },
    handlefinishPullUp(){
      //通过better-scroll可以进行下一次加载了
      this.scroll.finishPullUp();
      //重新计算better-scroll
      this.scroll.refresh();
    }
  }
};
</script>


<style>
.wrapper,
.scroll_container {
  height: 100%;
<<<<<<< HEAD
  background: #fff;
  
=======
  overflow: hidden;
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
}
.scroll_loading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
}
</style>