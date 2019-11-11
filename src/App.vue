<template>
  <div class="app">
  <router-view></router-view>
  
  </div>
 
</template>

<script>

export default {
  name: 'App',
created(){
  console.log(this,this.$route);
},


}
</script>

<style >

</style>
