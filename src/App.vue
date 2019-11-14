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
<<<<<<< HEAD

=======
  components:{
    tabBar,
    VueTouch
  },
created(){
},
>>>>>>> 610e55d4f29c4b2d6a074ea0cedfb6a4f24921ca


}
</script>

<style >

</style>
