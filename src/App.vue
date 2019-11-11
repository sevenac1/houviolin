<template>
  <div class="app">
    <router-view></router-view>
    <tabBar />
  </div>
 
</template>

<script>
import tabBar from "./components/tabBar"
export default {
  name: 'App',
  components:{
    tabBar,
  },
created(){
  console.log(this,this.$route);
},


}
</script>

<style >

</style>
