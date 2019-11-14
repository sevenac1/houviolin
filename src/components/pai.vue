<template>
<Better ref="scroll" class="in">
<<<<<<< HEAD
<<<<<<< HEAD
    <div class="min">   
    <div class="booklist"    v-for="(item,index) in totalList" :key="Number(item.id)">
        <div id="title-two">
            <div>
                    <span class="bond">{{item.name}}</span>
                    <span class="num">{{item.num}}</span>
            </div>
     
=======
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
    <div class="min">
         <div id="title-two">
            <div>
                    <span class="bond">线装古旧书</span>
                    <span class="num">837</span>
            </div>
<<<<<<< HEAD
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
            <a href="" class="too-title">
                <span>全部</span>
                <img class="title-two-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAARtJREFUWAnt1j0OgjAUB3BrPICXoJObmxuJN3BxdIHNyXM4uQGJq4s3MGEzcfAC5RIewATf8yNh6ADt+zu9JnyVUn78mwKjkRZNQBPQBDQBTUAT8CXQtq2pqmrGW995qbrgzoui2BDuaIw5J0myTtP0KYXq9jPuHgzcvxLuQchV0zSnuq4nA6/v1TwYmOe5I+ASjQwe4t/jl2U5pxQvtEwRwx0NZCgSKQJEIsWAKKQoEIEMnsWM8ZUsy+5Uv+Nz/Apyzm197frWiQN5wtDN9wzgWW2tPfTF+NqJDjFiNosBEbj3KPhiHVqHwokAkbhoIBoXBaTfLUsd3FDfYMZxiXnNLNC4DzFwTbi//FEH8vQyTUAT0AQ0AU3gm8ALHbTEH/xuryUAAAAASUVORK5CYII=" alt="">
            </a>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div class="con"  v-for="(ind) in item.itemList" :key="Number(ind.itemId)" >
            <div class="list-left">
                <img  :src="ind.bigImg" alt="">
                <span>527次浏览</span>
            </div>
            <div class="list-right">
                <div class="list-r-one">
                    <span class="red">「有底」</span>
                   {{ind.itemName}} </div>
                <div  class="list-r-two">
                    <div class="list-r-t">
                        <span>当前价 ¥</span>
                        <span>{{ind.beginPrice}}</span>
                    </div>
                    <div>{{ind.bidNum}}次出价</div>
                </div>
                <div class="list-r-three">
                    <span>起拍价 ¥{{ind.leavePrice}}</span>
                   <div>
                       <span>剩余 </span>
                       <span>{{ind.lostTime}}</span>
                   </div>
                </div>
            </div>
        </div>
    </div>
     
   
    </div>
  </Better> 

</template>
<script>
import  {auctionApi} from "@api/auction"
export default {
    name:"Paimai",
    data(){
        return {
             totalList:[],
             i:2
=======
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
           <div class="booklist" v-for="(item,index) in totalList[0].itemList" :key="item.id">
                    <div class="books-">
                        <div class="list-left">
                            <img :src="item.bigImg" alt="">
                            <span>{{item.viewedNum}}次浏览</span>
                        </div>
                        <div class="list-right">
                            <div class="list-r-one">
                                <span class="red">「有底」</span>
                                {{item.itemName}} </div>
                            <div  class="list-r-two">
                                <div class="list-r-t">
                                    <span>当前价 ¥</span>
                                    <span>{{item.maxPrice}}</span>
                                </div>
                                <div>{{item.bidNum}}次出价</div>
                            </div>
                            <div class="list-r-three">
                                <span>起拍价 ¥{{item.beginPrice}}</span>
                            <div>
                                <span>剩余 </span>
                                <span>{{item.lostTime}}</span>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>

        <!--  -->
        <!-- <Better  > -->
            <div class="booklist" v-for="(item,index) in totalList[0].itemList" :key="index">
                    <div class="books-">
                        <div class="list-left">
                            <img :src="item.bigImg" alt="">
                            <span>{{item.viewedNum}}次浏览</span>
                        </div>
                        <div class="list-right">
                            <div class="list-r-one">
                                <span class="red">「有底」</span>
                                {{item.itemName}} </div>
                            <div  class="list-r-two">
                                <div class="list-r-t">
                                    <span>当前价 ¥</span>
                                    <span>{{item.maxPrice}}</span>
                                </div>
                                <div>{{item.bidNum}}次出价</div>
                            </div>
                            <div class="list-r-three">
                                <span>起拍价 ¥{{item.beginPrice}}</span>
                            <div>
                                <span>剩余 </span>
                                <span>{{item.lostTime}}</span>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
    <!-- </Better> -->

      <div id="title-two">
            <div>
                    <span class="bond">名人墨迹</span>
                    <span class="num">837</span>
            </div>
            <a href="" class="too-title">
                <span>全部</span>
                <img class="title-two-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAARtJREFUWAnt1j0OgjAUB3BrPICXoJObmxuJN3BxdIHNyXM4uQGJq4s3MGEzcfAC5RIewATf8yNh6ADt+zu9JnyVUn78mwKjkRZNQBPQBDQBTUAT8CXQtq2pqmrGW995qbrgzoui2BDuaIw5J0myTtP0KYXq9jPuHgzcvxLuQchV0zSnuq4nA6/v1TwYmOe5I+ASjQwe4t/jl2U5pxQvtEwRwx0NZCgSKQJEIsWAKKQoEIEMnsWM8ZUsy+5Uv+Nz/Apyzm197frWiQN5wtDN9wzgWW2tPfTF+NqJDjFiNosBEbj3KPhiHVqHwokAkbhoIBoXBaTfLUsd3FDfYMZxiXnNLNC4DzFwTbi//FEH8vQyTUAT0AQ0AU3gm8ALHbTEH/xuryUAAAAASUVORK5CYII=" alt="">
            </a>
        </div>

            <div class="booklist" v-for="(item,index) in totalList[1].itemList" :key="item.id">
                    <div class="books-">
                        <div class="list-left">
                            <img :src="item.bigImg" alt="">
                            <span>{{item.viewedNum}}次浏览</span>
                        </div>
                        <div class="list-right">
                            <div class="list-r-one">
                                <span class="red">「有底」</span>
                                {{item.itemName}} </div>
                            <div  class="list-r-two">
                                <div class="list-r-t">
                                    <span>当前价 ¥</span>
                                    <span>{{item.maxPrice}}</span>
                                </div>
                                <div>{{item.bidNum}}次出价</div>
                            </div>
                            <div class="list-r-three">
                                <span>起拍价 ¥{{item.beginPrice}}</span>
                            <div>
                                <span>剩余 </span>
                                <span>{{item.lostTime}}</span>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>

    </div>
</Better>
</template>
<script>
import  {auctionApi} from "@api/auction"
import Better from "@common/components/bscroll"
export default {
    name:"Paimai",
    components:{
        Better
    },
    data(){
        return {
             totalList:[],
             i:1
<<<<<<< HEAD
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
        }
    },
     methods:{
        async handleauctionApi(catPage){
            let data=await auctionApi(catPage);
<<<<<<< HEAD
<<<<<<< HEAD
            console.log(data.data.list);
            this.totalList==data.data.list?data.data.list:'';
           this.totalList=[...this.totalList,...data.data.list];
           console.log(this.totalList);
            // sessionStorage.setItem("gzmr",JSON.stringify(data.data.list))
        }
    },
    // created(){
    //      this.handleauctionApi(1); 
    // },
    //  mounted(){
    //           this.$refs.scroll.handlepullingUp(()=>{
    //               console.log(111);
    //                 if(this.i<6){
    //                      this.handleauctionApi(this.i++);
    //                 }
    //             })
    //     },
    //       watch:{
    //         totalList(){
    //         this.$refs.scroll.handlefinishPullUp(); 
    //  },
   
    // }   

=======
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
           this.totalList=data.data.list;
            sessionStorage.setItem("gzmr",JSON.stringify(data.data.list))
          
        }
    },
    created(){
         this.handleauctionApi(this.i++);  
      
        
    },
    mounted(){
          console.log(this.$refs.scroll)
    }
   

//      mounted(){
//       //上拉加载更多
//     //   this.$refs.scroll.handlepullingUp(()=>{
//     //       console.log(111);
//     //      this.handleauctionApi(i++);
//      this.$refs.scroll.handlepullingDown(()=>{
//        console.log(11);
    
//       })
//       this.$refs.scroll.handleScroll();
//   }
<<<<<<< HEAD
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
}
</script>
<style lang="scss">
.in{
    height: 1400px;
}
.min{
<<<<<<< HEAD
<<<<<<< HEAD
    min-height: 1500px;
    background: #fff;
}

=======
    min-height: 2000px;
}
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
    min-height: 2000px;
}
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
#title-two{
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 20px;
    height: .42rem;
    line-height: .42rem;
    align-items: center;
    .too-title{
        display: flex;
        justify-content: center;
        align-items:center;
        .title-two-img{
            display: inline-block;
            width: .4rem;
        }

    }
    div{
        .bond{
            font-size: .3rem;
            color: #262626;
            font-weight: 700;
        }
        .num{
            font-size: .22rem;
            color: #999;
            padding-top: .1rem;
            padding-left: .1rem;
             font-weight: 700;
        }

    }
}


.booklist{
<<<<<<< HEAD
<<<<<<< HEAD
    .con{
        height: 96px;
         padding: 0 .4rem 0rem .4rem;
           margin-bottom: .48rem;
    }
  
=======
    padding: 0 .4rem .48rem .4rem;
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
    padding: 0 .4rem .48rem .4rem;
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
    .list-left{
        position: relative;
        float: left;
        width: 1.96rem;
        height: 1.96rem;
        line-height: 1.96rem;
        border-radius: .08rem;
        overflow: hidden;
        img{
            width: 100%;
<<<<<<< HEAD
<<<<<<< HEAD
            height: 100%;
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
        }
        span{
            position: absolute;
            left: .14rem;
<<<<<<< HEAD
<<<<<<< HEAD
            bottom: .5rem;
=======
            bottom: .1rem;
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
            bottom: .1rem;
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
            line-height: .3rem;
            font-size: .22rem;
            color: #fff;
            text-shadow: 0 0 0.04rem rgba(0,0,0,.5);
        }
    }
    .list-right{
        float: right;
        width: 4.5rem;
        .list-r-one{
            height: .8rem;
            font-size: .28rem;
            color: #262626;
            line-height: .4rem;
            overflow: hidden;
        }
        .list-r-two{
            width: 100%;
            height: .48rem;
            margin-top: .32rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span:nth-child(1){
                font-size: .24rem;
                color: #9e100e;
            }
             span:nth-child(2){
                font-size: .34rem;
                font-weight: 700;
            }
        }
        .list-r-three{
            display: flex;
            justify-content:space-between;
            align-items:center;
        }

    }
}
    
</style>