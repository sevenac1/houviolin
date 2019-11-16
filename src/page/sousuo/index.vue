<template>
  <div id="app">
    <div class="search" >
      <div class="search_content" >
        <form action="javascript:void(0);" class="search_from">
          <input
            type="search"
            maxlength="50"
            placeholder="商品名称 作者 出版社 ISBN"
            class="search_input"
            autofocus="autofocus"
            name
            v-model="value"
          />
          <v-touch class="cancle" tag="div" @tap="handleCanc()"></v-touch>
        </form>
      </div>
      <v-touch class="serach_btn" tag="div" @tap="handleBack()"> 取消</v-touch>
    </div>
    <div class="search_tab_list">
      <div class="search_tab_item">
        <span>商品</span>
      </div>
      <div class="search_tab_item">
        <span>书目</span>
      </div>
      <div class="search_tab_item">
        <span>拍卖</span>
      </div>
      <div class="search_tab_item">
        <span>店铺</span>
      </div>
    </div>
    <div class="search_main" v-if="flag1">
      <div class="search_history_shadow">
        <ul class="search_history_list">
          <li  v-for="(item,index) in list" :key="item.id" >
            <span>{{item.keyword}}</span>
          </li>
        </ul>
      </div>
  
    </div>
    <div v-if="flag2" class="srerch-new" >
      <ul>
        <li v-for="(item) in list2" :key="item.id">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {xianApi} from "@api/xian"
import {searchApi,serachApp} from "@api/search"
export default {
  name:"sousuo",
  created() {
    this.ind=this.$route.params.index;
    this.handleserachApp();
  },
  data(){
    return {
      ind:0,
      flag1:true,
      flag2:false,
      list2:[],
      list:[],
      value:'',
      history:{
        titile:"历史搜索",
        img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAVNJREFUSA3tVTFOw0AQvLMQD6AyEj9wwRvskvyBbyRVCp5BScMHSDrb+QKFfxAprngAhc2OdCvtHYe9iJNJEUvWrWd3dryTc84axdV13XXf90/W2sdxHG8lhbATYS95nm+LoviUuVh8FQNDDGKEralxmDLuBdZUg9zmW0EAqATdZIbWVVVVe9mjaZoVib6hRiOYSfJPsZvChGKoJ2yHlWsQT12W3nBHxQ9TRaly5MJeNWEqQerjb4K6rkfcqQRi/Zae0JyfIDYVbmmzFpMcjme/w9gO1mIsItfzs1S+XYr4MmEKF70eF0s9O1I8LG7p7D8NzjCazDtBtNisI7HjZJY0URDrt7il/ytIv80JDrVtezfhlCrFPbgnk8IJD0gMw/DMBC78zQouejjOQXKtfHCF74TdSPwP8UeWZfdlWR65hzchEiggG15DK5igWcFFj1AM3C8ixZj0FulhaQAAAABJRU5ErkJggg=='
      },
    }
  },
  watch: {
    value(newvalu){
      this.flag1=false;
      this.flag2=true;
      this.handleSearch(newvalu);
      if(!newvalu){
        this.flag1=true;
      }
    }
  },
  methods: {
   async handleSearch(query){
      let data1=await searchApi(query);
      this.list2=data1.data;
    },
     async handleserachApp(){
    let data=await serachApp();
    this.list=data.data.wordList;
  },
 
  handleCanc(){
    this.flag=true;
    this.value='';
  },
  handleBack(){
    if(this.ind==1){
     this.$router.back();
    }
    if(this.ind==2){
     this.$router.back();
    }
    if(this.ind==3){
      this.$router.back();
    }
  },
  },
 
};
</script>
<style>
#app {
  width: 7.5rem;
  margin: 0 auto;
  display: flex;
  height: 100%;
  position: relative;
  flex-direction: column;
}
.search {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.16rem 0.3rem;
  position: fixed;
}
.search_content {
  display: flex;
  align-items: center;
  width: 6rem;
  height: 0.68rem;
  padding: 0 0.2rem;
  margin-right: 0.3rem;
  border-radius: 0.08rem;
  background: #f7f7f7;
  position: relative;
}
.search_from {
  width: 100%;
}
.cancle{
  width: .68rem;
  height: .68rem;
  position: absolute;
  top:0;
  right: 0;
  
}
.search_input {
  width: 100%;
  height: 0.68rem;
  line-height: 0.42rem;
  font-size: 0.3rem;
  background: #f7f7f7;
  border: none;
  outline: none;
}
.serach_btn {
  height: 0.68rem;
  line-height: 0.68rem;
  font-size: 0.3rem;
  color: #262626;
}
.search_tab_list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.88rem;
  margin-top: 1rem;
  border-bottom: 0.02rem solid #eaeaea;
  position: fixed;
  box-shadow: 0px 1px 5px #ccc;
}
.search_tab_item {
  height: 0.78rem;
  width: 25%;
  line-height: 0.76rem;
  font-size: 0.32rem;
  color: #262626;
  display: flex;
  justify-content: center;
}
.search_tab_item span {
  height: 0.78rem;
  text-align: center;
  min-width: 0.66rem;
  line-height: 0.78rem;
  border-bottom: 0.04rem solid #fff;
  font-size: 0.32rem;
  color: #262626;
}
.search_tab_item .active {
  color: #9e100e;
  border-color: #9e100e;
}
.search_main {
  margin-top: 1.8rem;
  flex: 1;
  flex-direction: column;
}
.search_history_shadow {
  padding: 0.4rem;
}
.search_history_shadow .search_history_bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.48rem;
}
.search_history_shadow .search_history_bar span {
  font-size: 0.26rem;
  color: #999999;
}
.search_history_shadow .search_history_bar div {
  height: 0.48rem;
  width: 0.48rem;
  padding: 0.1rem;
}
.search_history_shadow .search_history_bar div img {
  width: 100%;
  height: 100%;
}
.search_history_list {
  margin-top: 0.3rem;
}
.search_history_list li {
  float: left;
  max-width: 90%;
  height: 0.54rem;
  padding: 0.1rem 0.2rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  border-radius: 0.08rem;
  font-size: 0.26rem;
  color: #999999;
  text-align: center;
  background: #fafafa;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  position: relative;
}
.search_history_list li span {
  overflow: hidden;
  text-overflow: ellipsis;
  height: 0.34rem;
  line-height: 0.34rem;
}
.srerch-new{
  position: absolute;
  top:0;
  margin-top: 1.8rem;
  left:0;
  padding-left: 20px;
  background: #fff;
}
.srerch-new li{
  height: 50px;
  line-height: 50px;
  width: 100%;
  
}
</style>