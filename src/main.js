import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import "@common/components"
import "@common/filter"
import VueTouch from "vue-touch"
import "./lib/loading/index.js"
// import ViolinUI from "./lib"

import { Lazyload } from 'vant';

Vue.use(Lazyload);
// Vue.use(ViolinUI)
Vue.use(VueTouch,{name:"v-touch"});

import "@common/components"
Vue.use(VueTouch,{name:"v-touch"})

new Vue({
  store,
  router,
  VueTouch,
  render: h => h(App)
}).$mount('#app')

