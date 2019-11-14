<template>

    <div>
         <div id="hea">
                <v-touch tag="div" class="back" @tap="handleback()"> 
                        <span class="iconfont icon-fanhui"></span>
                </v-touch>
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
                    <van-dropdown-menu active-color="#ee0a24">
                        <div class="ttt">
                                  <van-dropdown-item v-model="value1" :options="option1" />
                        </div>
                  
                    <van-dropdown-item v-model="value2" :options="option2" />
                    </van-dropdown-menu>
                <div>
                        <span  class="nav-title">筛选</span>
                </div>  
        </div>
               
        </div>
     
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
    methods:{
       
          onConfirm() {
      this.$refs.item.toggle();
    },
             handleback(){
                 this.$router.back();
             }
    
    },
   
}
</script>
<style lang="scss">
.van-dropdown-menu__item{
    width: 130px;
     
}
.van-dropdown-menu{
    margin-left: -30px
}
.van-ellipsis{
       font-size: .28rem;
}
.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
    border-width:0;
}

.wrapper{
    height: 2549px;
}
        #hea{
        width: 100%;
        line-height: .88rem;
        padding: .16rem .2rem .16rem .16rem;
        background: #fff;
        display: flex;
        .back{
            width: .8rem;
            height: .8rem;
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