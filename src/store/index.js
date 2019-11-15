import Vue from "vue";
import Vuex from "vuex";
import tabBar from "./tabBar"
import home from "./home"
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        tabBar,
        home
    }
})