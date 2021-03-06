import Vue from "vue"
import VueRouter from "vue-router"
import home from "./home"
import books from "./books"
import auction from "./auction"
import cart from "./cart"
import mine from "./mine"
import oldline from './olline'
import srearch from "./search"
Vue.use(VueRouter)
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
        oldline,
        srearch,
        {
            path:"/detaillist/:itemid",
            component:_=>import("@page/detailList"),
            name:"detaillist"
        },
        {
            path:"/login",
            component:_=>import("@page/login"),
            name:"login",
            meta:{
                flag:false,
            }
        },
        {
            path:"/register",
            component:_=>import("@page/register"),
            name:"register",
            meta:{
                flag:false,
            }
        },
        {
            path:"/list",
            component:_=>import("@page/list"),
            name:"list",
            meta:{
                flag:false,
            }
        },
      
        {
            path:"/artwork",
            component:_=>import("@page/artwork"),
            name:"artwork",
            meta:{
                flag:false,
            }
        },
        {
            path:"/booklist",
            component:_=>import("@page/booklist"),
            name:"booklist",
            meta:{
                flag:false,
            }
        },
        {
            path:"/newbooks",
            component:_=>import("@page/newbooks"),
            name:"newbooks",
            meta:{
                flag:false,
            }
        },
        {
            path:"/china",
            component:_=>import("@page/china"),
            name:"china",
            meta:{
                flag:false,
            }
        },
        {
            path:"/classification",
            component:_=>import("@page/classification"),
            name:"classification",
            meta:{
                flag:false,
            }
        },
      
    {
        path:"/details",
        component:_=>import("@page/details"),
        name:"details",
    } 
    ],
    
   
    
})

// router.beforeEach((to,from,next)=>{
//     if(to.path !="/login" && to.meta.requiredAuth){
//         if(localStorage.getItem("token")){
//             next()
//         }else{
//             next({name:"login",params:{to:to.path}})
//         }
//     }else{
//         next();
//     }
// })
export default router;