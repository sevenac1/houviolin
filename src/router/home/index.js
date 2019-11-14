
export default {
    name:"home",
    path:"/home",
    component:_=>import("@page/home"),
    meta:{
        flag:true,
        requiredAuth:false,
    }
}