import axios from "axios"
// import qs from "qs"
const server=axios.create({
    timeout:5000,
    withCredentials:true
})
server.interceptors.request.use((config)=>{
    if(config.method=="GET"){
        config.params={...config.dadta};
    }
    return config;

    // config.headers["content-type"]="applicetion/json";  
    // config.headers["content-type"]="application/json";
    // config.headers["token"]=""

},(err)=>{
    Promise.reject(err);
})
server.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data
    }
},(err)=>{
    Promise.reject(err);
})
export default server;
