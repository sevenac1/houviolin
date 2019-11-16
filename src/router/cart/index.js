export default {
    path:"/cart",
    component:_=>import("@page/cart"),
    name:"cart",
    meta:{
        flag:true,
        requiredAuth:false,
    }
}