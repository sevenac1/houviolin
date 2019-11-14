<template>
  <div class="app">
    <router-view></router-view>
    <tabBar v-if="$route.meta.flag"/>
  </div>
 
</template>

<script>
import VueTouch from 'vue-touch'
import tabBar from "@common/components/tabBar"

export default {
  name: 'App',

  components:{
    tabBar,
    VueTouch
  },
created(){
},


}
</script>

<style >

</style>
