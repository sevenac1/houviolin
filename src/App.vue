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
<<<<<<< HEAD

=======
  components:{
    tabBar,
  },
created(){
  console.log(this,this.$route);
},
>>>>>>> 610e55d4f29c4b2d6a074ea0cedfb6a4f24921ca


}
</script>

<style >

</style>
