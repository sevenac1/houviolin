import http from "@utils/require"
export const loginApi=(username,password)=>http({
    method:"get",
    url:"/users/login",
    params:{
        username:username,
        password,password
    }
});
export const registerApi=(username,password)=>http({
    method:"get",
    url:"/users/register",
    params:{
        username:username,
        password,password
    }
});