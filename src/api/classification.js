import http from "@utils/require"
export const allApi=()=>http({
    method:"get",
    url:"/api-search/product/home/mobile?bizType=wap&host=msearch",
    // params:{
    //     bizType:wap,
    //     host:msearch
    // }
});