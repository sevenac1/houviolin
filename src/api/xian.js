import http from "@utils/require"
export const xianApi=(pageShow,page)=>http({
    methods:"POST",
    url:"/list/getList",
    params:{

pageShow:pageShow ,
page: page
    }

})