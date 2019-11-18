export default {
    path:"/cart",
    component:_=>import("@page/cart"),
    name:"cart",
    meta:{
        flag:true,
        requiredAuth:true,
    },
    beforeEnter: (to, from, next) => {
        console.log(to,from);
        if(to.path="/cart"){
            next()
        }else{
            alert("请登录");
            next("/cart");
        }
    }
}