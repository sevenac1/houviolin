import http from "@utils/require"
<<<<<<< HEAD
<<<<<<< HEAD
export const xianApi=(pageShow,page,order)=>http({
=======
export const xianApi=(pageShow,page)=>http({
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
export const xianApi=(pageShow,page)=>http({
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
    methods:"POST",
    url:"/list/getList",
    params:{

pageShow:pageShow ,
<<<<<<< HEAD
<<<<<<< HEAD
page: page,
order:order
=======
page: page
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
=======
page: page
>>>>>>> 3ba5d35e57460cb77e672a73b2c222d638e60330
    }

})