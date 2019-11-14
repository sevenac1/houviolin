import http from "@utils/require"
export const homeApi=(currPage)=>http({
    method:"get",
    url:"/operation/mobile/ajax/getIndexSquare",
    params:{
        currPage:currPage
    }
});

export const homebookApi=(place)=>http({
    method:"get",
    url:"/book/mobile/ajax/getPersonalRecommendItems",
    params:{
        place:place
    }
})