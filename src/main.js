import Vue from 'vue'
import App from './App.vue'
import router from "./router"
<<<<<<< HEAD
<<<<<<< HEAD
import VueTouch from "vue-touch"
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(VueTouch,{name:"v-touch"});
import "@common/components"
Vue.use(VueTouch,{name:"v-touch"})
=======


>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======


>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
new Vue({
  router,
  VueTouch,
  render: h => h(App)
}).$mount('#app')

