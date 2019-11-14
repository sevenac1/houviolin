import http from "@utils/require"
export const xianApi=(pageShow,page,order)=>http({
    methods:"POST",
    url:"/list/getList",
    params:{

pageShow:pageShow ,
page: page,
order:order
    }

})