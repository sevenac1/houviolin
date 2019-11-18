
let state = {
     cart:JSON.parse(sessionStorage.getItem("cart"))?JSON.parse(sessionStorage.getItem("cart")):[],
     shopList:JSON.parse(sessionStorage.getItem("soucang"))?JSON.parse(sessionStorage.getItem("soucang")):[],
}
let actions = {
    handle({commit}){
        commit("mutationsCart")
    },
    hanalesc({commit}){
        commit("handleMutationsc")
    }
}
let mutations = {
    mutationsCart(state){
      
    },
    handleMutationsc(state){
        console.log(state.shopList.length)
      state.le=state.shopList.length;
    }
}

export default{
    state,
    actions,
    mutations,
    namespaced:true
}