<template>
    <Better ref="scroll" class="in">
        <div id="list">
        
                        <ul class="list-item">
                                <router-link  class="item" v-for="item in itemList"  tag="li" :to="{name:'detaillist',params:{itemid:item.itemId}}">
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
                               
                                </router-link>
                               
                        </ul>
                     
        </div>  
    </Better> 
</template>
<script>
import {xianApi} from "@api/xian"
export default {
    name:"Salesvolume",
  props:['id'],
    data(){
        return {
              a:2 , 
              b:1 ,   
              c:1 ,
              d:1 ,
              e:1 ,
              f:1 ,
              g:1 ,
            itemList:[],
            listid:0,
        }
    },
      created(){

        this.handlexianApi(20,1,0);
       
    },
    methods:{
         async handlexianApi(pageShow,page,order){
          
            let data=await xianApi(pageShow,page,order);
          //  this.itemList==data.data.itemList?data.data.itemList:'';
          //  this.itemList=data.data.itemList;
            this.itemList=[...this.itemList,...data.data.itemList];
            console.log(this.itemList);
               sessionStorage.setItem("zz",JSON.stringify(this.itemList))
        }
    },
        mounted(){
              this.$refs.scroll.handlepullingUp(()=>{
                          switch(this.id){
                                case 0 :  
                                this.handlexianApi(20,this.a++,0);        // 请求一个接口排序
                                break;
                                case 1 :  
                                  this.handlexianApi(20,this.b++,9); 
                                       // 请求一个接口排序
                                break;
                                case 2 :
                                  this.handlexianApi(20,this.c++,2);       // 请求一个接口排序
                                break;
                                case 3 :

                                    this.handlexianApi(20,this.d++,1);     // 请求一个接口排序
                                break;                        
                                case 4 :
                                    this.handlexianApi(20,this.e++,4);     // 请求一个接口排序
                                break;
                                case 5 :
                                    this.handlexianApi(20,this.f++,3);     // 请求一个接口排序
                                break;
                                case 6 :
                                    this.handlexianApi(20,this.g++,8);     // 请求一个接口排序
                                break;
                                case 7 :                               case 5 :
                                    this.handlexianApi(20,this.h++,7);     // 请求一个接口排序
                                break;


                        }
                })
        },
        watch:{
                itemList(){
                this.$refs.scroll.handlefinishPullUp(); 
                },
                id(){
                        switch(this.id){
                                case 0 :  
                                this.itemList.splice(0);
                                 this.handlexianApi(20,this.a++,0);        // 请求一个接口排序
                                break;
                                case 1 :  
                                   this.itemList.splice(0);
                                  this.handlexianApi(20,this.b++,9); 
                                       // 请求一个接口排序
                                break;
                                case 2 :
                                    this.itemList.splice(0);
                                  this.handlexianApi(20,this.c++,2);       // 请求一个接口排序
                                break;
                                case 3 :
                                  this.itemList.splice(0);
                                    this.handlexianApi(20,this.d++,1);     // 请求一个接口排序
                                break;                        
                                case 4 :
                                     this.itemList.splice(0);
                                    this.handlexianApi(20,this.e++,4);     // 请求一个接口排序
                                break;
                                case 5 :
                                     this.itemList.splice(0);
                                    this.handlexianApi(20,this.f++,3);     // 请求一个接口排序
                                break;
                                case 6 :
                                     this.itemList.splice(0);
                                    this.handlexianApi(20,this.g++,8);     // 请求一个接口排序
                                break;
                                case 7 :     
                                 this.itemList.splice(0);                        
                                    this.handlexianApi(20,this.h++,7);     // 请求一个接口排序
                                break;


                        }
                }
        }
}
</script>
<style lang="scss">
    
</style>