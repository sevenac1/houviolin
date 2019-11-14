import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(VueTouch,{name:"v-touch"});
new Vue({
  router,
  VueTouch,
  render: h => h(App)
}).$mount('#app')

