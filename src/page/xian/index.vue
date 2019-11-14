<template>
<<<<<<< HEAD
<<<<<<< HEAD

    <div>
         <div id="hea">
                <v-touch tag="div" class="back" @tap="handleback()"> 
                        <span class="iconfont icon-fanhui"></span>
                </v-touch>
=======
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
    <div>
         <div id="hea">
                <a href="" class="back">
                        <span class="iconfont icon-fanhui"></span>
                </a>
<<<<<<< HEAD
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
                <div class="paimai">全部拍卖</div>
                <div class="srearch">
                        <span class="iconfont icon-chaxun"></span>
                </div>
                <div class="fenlei">
                        <span class="iconfont icon-heng"></span>
                </div>
        </div>
        <div >
                <div id="nav">
<<<<<<< HEAD
<<<<<<< HEAD
                    <van-dropdown-menu active-color="#ee0a24">
                        <div class="ttt">
                                  <van-dropdown-item v-model="value1" :options="option1" />
                        </div>
                  
=======
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
                <div  class="dw">                 
                </div>  
                    <van-dropdown-menu active-color="#ee0a24">
                    <van-dropdown-item v-model="value1" :options="option1" />
<<<<<<< HEAD
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
                    <van-dropdown-item v-model="value2" :options="option2" />
                    </van-dropdown-menu>
                <div>
                        <span  class="nav-title">筛选</span>
                </div>  
        </div>
               
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
     
    <Salesvolume :value="value1"/>
      
    </div>

</template>
<script>
import Salesvolume from "@components/paixu"
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);

export default {
    name:"xian",
    components:{
        Salesvolume
    },
    data(){
        return {
            value1: 0,
            value2: 'a',
=======
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
        <div id="list">
                        <ul class="list-item">
                                <li class="item" v-for="item in itemList" :key="item.itemId">
                        
                                        <div class="box-img">
                                                <img :src="item.bigImg" alt="">
                                        </div>
                                        <div class="box-right">
                                                <p class="title">{{item.itemName}}</p>
                                                <p class="datail">
                                                        <span class="cred">当前价 </span>
                                                        <span class="fu">¥ </span>
                                                        <span class="prices">{{item.beginPrice}}</span>
                                                        <span class="jia">{{item.bidNum}}次出价</span>
                                                </p>
                                                <p class="sy">剩余<span class="timer">{{item.lostTime}}</span>
                                                </p>
                                                <p class="bottom">
                                                        <span>起拍价</span>
                                                        <span>{{item.beginPrice}}</span>
                                                </p>
                                        </div>
                               
                                </li>
                        </ul>
                
        </div>

      
    </div>
</template>
<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
import {xianApi} from "@api/xian"
export default {
    name:"xian",
    data(){
        return {
            itemList:[],
              value1: 0,
             value2: 'a',
<<<<<<< HEAD
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
      option1: [
        { text: '剩余时间由少到多',value: 0},
        { text: '剩余时间由多到少',value: 1},
            { text: '起拍价格由低到高',value: 2},
        { text: '起拍价格由高到低',value: 3},
            { text: '最高竞价由低到高',value: 4},
        { text: '最高竞价由高到低',value: 5},
        { text: '出价次数由低到高',value: 6},
        { text: '出价次数由高到低',value: 7},

      ],
            option2: [
        { text: '线装古旧书',value: 'a'},
        { text: '剩余时间由多到少',value: 'b'},
            { text: '起拍价格由低到高',value: 'c'},
        { text: '起拍价格由高到低',value: 'd'},
            { text: '最高竞价由低到高',value: 'e'},
        { text: '最高竞价由高到低',value: 'f'},
        { text: '出价次数由低到高',value: 'g'},
        { text: '出价次数由高到低',value: 'h'},

      ],
     


        }
    },
<<<<<<< HEAD
<<<<<<< HEAD
    methods:{
       
          onConfirm() {
      this.$refs.item.toggle();
    },
             handleback(){
                 this.$router.back();
             }
    
    },
   
=======
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
    created(){
       this.handlexianApi(20,1);
    },
    methods:{
        async handlexianApi(pageShow,page){
            let data=await xianApi(pageShow,page);
            console.log(data.data.itemList);
            this.itemList=data.data.itemList;
        },
          onConfirm() {
      this.$refs.item.toggle();
    }
    }
<<<<<<< HEAD
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
}
</script>
<style lang="scss">
.van-dropdown-menu__item{
    width: 130px;
     
}
.van-dropdown-menu{
<<<<<<< HEAD
<<<<<<< HEAD
    margin-left: -30px
=======
    margin-left: -50px
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
    margin-left: -50px
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
}
.van-ellipsis{
       font-size: .28rem;
}
.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
    border-width:0;
}

<<<<<<< HEAD
<<<<<<< HEAD
.wrapper{
    height: 2549px;
}
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
        #hea{
        width: 100%;
        line-height: .88rem;
        padding: .16rem .2rem .16rem .16rem;
<<<<<<< HEAD
<<<<<<< HEAD
        background: #fff;
        display: flex;
        .back{
            width: .8rem;
            height: .8rem;
=======
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
        background-color: #fff;
        display: flex;
        .back{
            width: .6rem;
            height: .6rem;
<<<<<<< HEAD
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
        }
        .paimai{
            width: 4.08rem;
            height: .56rem;
            text-align: center;
            line-height: .56rem;
            margin-left: 1rem;
            font-size: .34rem;
            color: #262626;
            overflow: hidden;
            font-weight: 700;
            vertical-align: top;
            margin-top: .2rem;
        }
        .srearch{
            width: .4rem;
            height: .4rem;
            margin-right: .2rem;
        }
        .fenlei{
            width: .6rem;
            height: .6rem;
        }
}




#nav{
    display: flex;
    justify-content: space-around;
.nav-title{
    line-height: .6rem;
    color: #202020;
    font-size: .28rem;
}
}

#list{
<<<<<<< HEAD
<<<<<<< HEAD
   

=======
    padding: .2rem;
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
    padding: .2rem;
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
        .item{
            display: flex;
        justify-content: space-between;
        margin: .2rem 0;
        .box-img{
            width: 2.4rem;
            height: 2.4rem;
            border-radius: .16rem;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .box-right{
            width: 4.3rem;
            .title{
                color: #202020;
                font-size: .28rem;
                line-height: .4rem;
                height: .8rem;
                font-weight: 400;
                overflow: hidden;
            }
            .datail{
                color: #9b9b9b;
                font-size: .24rem;
                overflow: hidden;
                line-height: .4rem;
                .cred{
                        color: #d04a47;
                    }
                    .fu{
                        font-size: .22rem;
                        color: #d04a47;
                    }
                    .prices{
                        font-size: .34rem;
                        color: #d04a47;
                    }
                    .jia{
                        height: .32rem;
                        font-size: .22rem;
                        text-align: center;
                        display: inline-block;
                        vertical-align: 0;
                        border-radius: .2rem;
                        padding: 0 .1rem;
                        background-color: #fbfbfb;
                    }
            }
            .sy{
                margin-top: .1rem;
                color: #9b9b9b;
                font-size: .24rem;
                overflow: hidden;
                line-height: .4rem;
                .timer{
                    color: #d04a47;
                    margin-left: .1rem;
                }
            }
            .bottom{
                color: #9b9b9b;
                font-size: .24rem;
                overflow: hidden;
                line-height: .4rem;
            }
        }
        }
 }










</style>