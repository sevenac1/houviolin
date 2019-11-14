<template>
  
    <Better ref="scroll" class="in">
        <div id="list">
                        <ul class="list-item">
                                <router-link  class="item" v-for="item in itemList"  tag="li" to="/home">
                        
                                        <div class="box-img">
                                                <img :src="item.bigImg" alt="">
                                        </div>
                                        <div class="box-right">
                                                <p class="title">{{item.itemName}}</p>
                                                <p class="datail">
                                                        <span class="cred">当前价 </span>
                                                        <span class="fu">¥ </span>
                                                        <span class="prices">{{item.maxPrice}}</span>
                                                        <span class="jia">{{item.bidNum}}次出价</span>
                                                </p>
                                                <p class="sy">剩余<span class="timer">{{item.lostTime}}</span>
                                                </p>
                                                <p class="bottom">
                                                        <span>起拍价</span>
                                                        <span>{{item.beginPrice}}</span>
                                                </p>
                                        </div>
                               
                                </router-link>>
                        </ul>
              <div>{{value}}</div>
        </div>  
    </Better> 
</template>
<script>
import {xianApi} from "@api/xian"
export default {
    name:"Salesvolume",
    props:{
            value:[]
            
    },
    data(){
        return {
              i:2 ,    
            itemList:[],
        }
    },
      created(){
        
        //      this.value=Number(this.value);
        //      console.log(this.value);
       this.handlexianApi(20,1,0);
    },
    methods:{
         async handlexianApi(pageShow,page,order){
            let data=await xianApi(pageShow,page,order);
           console.log(data.data.itemList);
           
           this.itemList==data.data.itemList?data.data.itemList:'',
           this.itemList=[...this.itemList,...data.data.itemList];
             
        },
    },
        mounted(){
              this.$refs.scroll.handlepullingUp(()=>{
                         this.handlexianApi(20,this.i++);
                })
        },
        watch:{
                itemList(){
                this.$refs.scroll.handlefinishPullUp(); 
                },
                value(){
                        console.log(this.value)
                        switch (this.value){
                                case 0 :
                                this.handlexianApi(20,1,0);        // 请求一个接口排序
                                break;
                                case 1 :
                                  this.handlexianApi(20,1,9);       // 请求一个接口排序
                                break;
                                case 2 :
                                  this.handlexianApi(20,1,2);       // 请求一个接口排序
                                break;
                                case 3 :
                                    this.handlexianApi(20,1,1);     // 请求一个接口排序
                                break;                        
                                case 4 :
                                    this.handlexianApi(20,1,4);     // 请求一个接口排序
                                break;
                                case 5 :
                                    this.handlexianApi(20,1,3);     // 请求一个接口排序
                                break;
                                case 6 :
                                    this.handlexianApi(20,1,8);     // 请求一个接口排序
                                break;
                                case 7 :                               case 5 :
                                    this.handlexianApi(20,1,7);     // 请求一个接口排序
                                break;


                        }
                }
        }
}
</script>
<style lang="scss">
    
</style>