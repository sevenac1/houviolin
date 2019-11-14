export default {
    path:"/books",
    component:_=>import("@page/books"),
    name:"books",
    meta:{
        flag:true,
        requiredAuth:false,
    }
}