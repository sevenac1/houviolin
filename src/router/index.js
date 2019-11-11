import Vue from "vue"
import VueRouter from "vue-router"
import home from "./home"
import books from "./books"
import auction from "./auction"
import cart from "./cart"
import mine from "./mine"
Vue.use(VueRouter);
const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        books,
        auction,
        cart,
        mine,
        {
            path:"/login",
            component:_=>import("@page/login"),
            name:"login",
            meta:{
                title:123
            }
        }
    ]
})
export default router;