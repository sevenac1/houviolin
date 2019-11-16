<template>
<div class="ption">
<Better ref="scroll" class="in">
    <div class="min">   
    <div class="booklist"    v-for="(item,index) in totalList" :key="Number(item.id)">
        <div id="title-two">
          
            <div>
                    <span class="bond">{{item.name}}</span>
                    <span class="num">{{item.num}}</span>
            </div>
     
            <a href="" class="too-title">
                <span>全部</span>
                <img class="title-two-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAARtJREFUWAnt1j0OgjAUB3BrPICXoJObmxuJN3BxdIHNyXM4uQGJq4s3MGEzcfAC5RIewATf8yNh6ADt+zu9JnyVUn78mwKjkRZNQBPQBDQBTUAT8CXQtq2pqmrGW995qbrgzoui2BDuaIw5J0myTtP0KYXq9jPuHgzcvxLuQchV0zSnuq4nA6/v1TwYmOe5I+ASjQwe4t/jl2U5pxQvtEwRwx0NZCgSKQJEIsWAKKQoEIEMnsWM8ZUsy+5Uv+Nz/Apyzm197frWiQN5wtDN9wzgWW2tPfTF+NqJDjFiNosBEbj3KPhiHVqHwokAkbhoIBoXBaTfLUsd3FDfYMZxiXnNLNC4DzFwTbi//FEH8vQyTUAT0AQ0AU3gm8ALHbTEH/xuryUAAAAASUVORK5CYII=" alt="">
            </a>
        </div>
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
</div>
</template>
<script>
import  {auctionApi} from "@api/auction"
export default {
    name:"Paimai",
    data(){
        return {
             totalList:[],
             i:2
        }
    },
     methods:{
        async handleauctionApi(catPage){
            let data=await auctionApi(catPage);
            // console.log(data);
            // console.log(data.data.list);
            this.totalList==data.data.list?data.data.list:'';
           this.totalList=[...this.totalList,...data.data.list];
        //    console.log(this.totalList);
             sessionStorage.setItem("gzmr",JSON.stringify(data.data.list))
        }
    },
    created(){
         this.handleauctionApi(1); 
    },
     mounted(){
              this.$refs.scroll.handlepullingUp(()=>{
                 if(this.i<6){
                         this.handleauctionApi(this.i++);
                    }
                  
                })
        },
          watch:{
            totalList(){
            this.$refs.scroll.handlefinishPullUp(); 
             
     },
   
     }     

}
</script>
<style lang="scss">
.ption{
    position: absolute;
    top:0rem;
    left: 0rem;
    width: 100%;
    height: 10px;
}
.min{
    background: #fff;
    padding-bottom:1rem;
    min-height: 1110px;
}

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
    .con{
        height: 96px;
         padding: 0 .4rem 0rem .4rem;
           margin-bottom: .48rem;
    }
  
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
            height: 100%;
        }
        span{
            position: absolute;
            left: .14rem;
            bottom: .5rem;
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