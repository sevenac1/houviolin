
let state = {
    tabInedx:JSON.parse(sessionStorage.getItem("tabIndex"))?JSON.parse(sessionStorage.getItem("tabIndex")):0,
}
let actions = {
    handletabIndex({commit},index){
        commit("handleMutationIndex",index);
    }
}
let mutations = {
    handleMutationIndex(state,index){
        state.tabInedx = index;
        console.log(state.tabInedx);

        sessionStorage.setItem("tabIndex",index);
    }
}

export default{
    state,
    actions,
    mutations,
    namespaced:true
}