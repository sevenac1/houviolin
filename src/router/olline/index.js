export default {
    path:"/oldline",
    component:_=>import("@page/oldlist"),
    name:"oldline",
    meta:{
        flag:false,
        requiredAuth:false,
    },
    children:[
        {
            path:"/oldline",
            redirect:"/oldline/timemany",
        },
        {
            path:"timemany",
            component:_=>import("@components/list"),
            name:"timemany",
           
        },
        {
            path:"timelittle",
            component:_=>import("@components/list"),
            name:"timelittle",
        },
        {
            path:"beginprice",
            component:_=>import("@components/list"),
            name:"beginprice",
           
        },
        {
            path:"endprice",
            component:_=>import("@components/list"),
            name:"endprice",
        },
        {
            path:"mostprice",
            component:_=>import("@components/list"),
            name:"mostprice",
           
        },
        {
            path:"lessprice",
            component:_=>import("@components/list"),
            name:"lessprice",
        },
        {
            path:"timelittle",
            component:_=>import("@components/list"),
            name:"timelittle",
           
        },
        {
            path:"timemore",
            component:_=>import("@components/list"),
            name:"timemore",
        }
    ]
   

}
    
