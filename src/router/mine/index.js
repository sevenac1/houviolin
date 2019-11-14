export default {
    path:"/mine",
    component:_=>import("@page/mine"),
    name:"mine",
    meta:{
        flag:true,
        requiredAuth:true,
    }
}