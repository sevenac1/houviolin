import http from "@utils/require"
export const searchApi=(query)=>http({
    method:"get",
    url:"/api-search/Suggest/Suggest/suggest",
    params:{
        query:query,
        bizType:"wap"
    }
});
export const serachApp=()=>http({
    method:"get",
    url:'/api-search/Suggest/Suggest/app'
})

// https://m.kongfz.com/api-search/Suggest/Suggest/app
//  https://m.kongfz.com/api-search/Suggest/Suggest/suggest?bizType=wap&query=1