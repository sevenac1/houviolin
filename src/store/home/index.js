import {homeApi,homebookApi} from "@api/home";

let state = {
    booksList:JSON.parse(sessionStorage.getItem("booksList")) || [],
    booksList2:JSON.parse(sessionStorage.getItem("booksList2")) || [],
    newbookgc:JSON.parse(sessionStorage.getItem("newbookgc")) || [],
    oldbook:JSON.parse(sessionStorage.getItem("oldbook")) || [],
    newbookcb:JSON.parse(sessionStorage.getItem("newbookcb")) || [],
    newbookphb:JSON.parse(sessionStorage.getItem("newbookphb")) || [],
    jjxzList:JSON.parse(sessionStorage.getItem("jjxzList")) || [],
    ywjlList:JSON.parse(sessionStorage.getItem("ywjlList")) || [],
    gjjlList:JSON.parse(sessionStorage.getItem("gjjlList")) || [],
    mgjsList:JSON.parse(sessionStorage.getItem("mgjsList")) || [],
    mgtsList:JSON.parse(sessionStorage.getItem("mgtsList")) || [],
    mgqkList:JSON.parse(sessionStorage.getItem("mgqkList")) || [],
    ysppmList:JSON.parse(sessionStorage.getItem("ysppmList")) || [],
    bqList:JSON.parse(sessionStorage.getItem("bqList")) || [],
    wntjList:JSON.parse(sessionStorage.getItem("wntjList")) || [],
}

let actions = {
    async handlehomeApi3({commit},currPage){
        let data = await homeApi(currPage);
        commit("handleGetHome"+currPage,data.result.list); 
    },
    async handlehomeApi4({commit},currPage){
        let data = await homeApi(currPage);
        commit("handleGetHome4",data.result.list); 
    },
    async handlehomeApi5({commit},currPage){
        let data = await homeApi(currPage);
        commit("handleGetHome5",data.result.list); 
    },
    async handlehomeApi6({commit},currPage){
        let data = await homeApi(currPage);
        commit("handleGetHome6",data.result.list); 
    },
    async handlehomeApi7({commit},currPage){
        let data = await homeApi(currPage);
        commit("handleGetHome7",data.result.list); 
    },
    async handlehomeApi8({commit},currPage){
        let data = await homebookApi(currPage);
        commit("handleGetHome8",data.data); 
    },
}

let mutations = {
    handleGetHome3(state,list){
        sessionStorage.setItem("booksList",JSON.stringify(list[0].data[0].data));
        sessionStorage.setItem("booksList2",JSON.stringify(list[1].data));
        sessionStorage.setItem("newbookgc",JSON.stringify(list[2].data[0].data));
    },
    handleGetHome4(state,list){
        sessionStorage.setItem("oldbook",JSON.stringify(list[0].data[0].data));
        sessionStorage.setItem("newbookcb",JSON.stringify(list[1].data[0].data));
        sessionStorage.setItem("newbookphb",JSON.stringify(list[2].data[0].data));
    },
    handleGetHome5(state,list){
        sessionStorage.setItem("jjxzList",JSON.stringify(list[0].data[0].data));
        sessionStorage.setItem("ywjlList",JSON.stringify(list[1].data[0].data));
        sessionStorage.setItem("gjjlList",JSON.stringify(list[2].data[0].data));
    },
    handleGetHome6(state,list){
        sessionStorage.setItem("mgjsList",JSON.stringify(list[0].data[0].data));
        sessionStorage.setItem("mgtsList",JSON.stringify(list[2].data[0].data));
    },
    handleGetHome7(state,list){
        sessionStorage.setItem("mgqkList",JSON.stringify(list[0].data[0].data));
        sessionStorage.setItem("ysppmList",JSON.stringify(list[1].data[0].data));
        sessionStorage.setItem("bqList",JSON.stringify(list[1].bqList));
    },
    handleGetHome8(state,list){
        sessionStorage.setItem("wntjList",JSON.stringify(list));
    },
}
 
export default{
    state,
    actions,
    mutations,
    namespaced:true
}