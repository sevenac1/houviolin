import http from "@utils/require"
export const auctionApi=(catPage)=>http({
    methods: "get",
    url:"/home/auctionIndexforDayHot",
    params:{
        catPage:catPage
    }
  
})
