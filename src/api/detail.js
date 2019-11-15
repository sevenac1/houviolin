import http from "@utils/require"
export const datailApi=(getCartNum)=>http({
    method:"get",
    url:"/api-cart/jsonp",
})