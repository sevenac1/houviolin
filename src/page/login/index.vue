<template>
    <div id="login">
        <div class="header">
            <span>
                <img src="http://login.kongfz.com/mobile/images/login/back.png" alt="">
            </span>
            <span>登录</span>
        </div>
        <div class="login_form">
            <div class="name clearfix">
              <input type="text" autocomplete="off" placeholder="请输入用户名/手机号/邮箱" name="user" v-model="userIn.user"  @blur="un">
              <div class="clear"><img src="http://login.kongfz.com/mobile/images/login/clear.png" alt=""></div>
            </div>
            <div class="password clearfix">
              <input type="password" placeholder="请输入密码" name="password" v-model="userIn.pass" @blur="pwd">
              <div class="showPass" data-attr="password">
                <img src="http://login.kongfz.com/mobile/images/login/biyan.png" alt="">
              </div>
              <div class="clear"><img src="http://login.kongfz.com/mobile/images/login/clear.png" alt=""></div>
            </div>
            <!-- <div class="verify clearfix">
              <input type="text" autocomplete="off" placeholder="请输入验证码" name="verify">
              <div class="verify_img"><img src="" alt=""></div>
              <div class="reload"><img src="http://login.kongfz.com/mobile/images/login/reload.png" alt=""></div>
              <div class="clear"><img src="http://login.kongfz.com/mobile/images/login/clear.png" alt=""></div>
            </div> -->
            <div class="forget_pd">
              <a href="javascript:;" class="forget_pd_to">忘记密码?</a>
            </div>
            <v-touch tag="div" @tap="login" :class="thiscolor == true ? 'btn red' : 'btn btn_gry' ">登录</v-touch>
          </div>
          <div class="link_to clearfix">
            <a href="" class="ins">短信验证码登录</a>
            <router-link tag="a" to="/register" class="register">注册</router-link>
          </div>
          <!-- other_login -->
          <div class="other_login">
            <div class="title clearfix">
              <span class="line f_left"></span>
              <span class="text">使用社交账号登录</span>
              <span class="line f_right"></span>
            </div>
            <div class="icon">
              <a href="javascript:;" class="icon-link" data-icon="qq"><img src="http://login.kongfz.com/mobile/images/login/QQ.png" alt=""></a>
              <a href="javascript:;" class="icon-link" data-icon="weibo"><img src="http://login.kongfz.com/mobile/images/login/weibo.png" alt=""></a>
              <a href="javascript:;" class="icon-link" data-icon="weixin"><img src="http://login.kongfz.com/mobile/images/login/weixin.png" alt=""></a>
            </div>
          </div>
    </div>
</template>
<script>
import {loginApi} from "@api/user"
export default {
    name:"Login",
    data(){
        return{
            userInfo:'',
            thiscolor:false,
            // Info:localStorage.getItem("userArr"),
            userIn:{
                user:'',
                pass:'',
            },
            
        }
    },
    methods: {
        un(){
            if(this.userIn.user == ""){;
                this.thiscolor=false;
            }
        },
        pwd(){
            if(this.userIn.pass == ""){
                this.thiscolor=false;
            }else{
                this.thiscolor=true;
                // console.log(this.userIn.pass);
                
            }
        },
        login(){
            if(this.userIn.user && this.userIn.pass){
                this.userLoginApi(this.userIn.user,this.userIn.pass);
            }else{
                alert("请输入信息")
            }
        },
        async userLoginApi(username,password){
            // console.log(username,password);
            let data = await loginApi(username,password);
            if(data.data.info == "用户名不存在"){
                alert(data.data.info+"，请前去注册");
                this.$router.push("register");
                 this.userIn={};
            }else if(data.data.info == "密码错误"){
                alert(data.data.info+",请重新输入");
                this.userIn={};
            }
            else{
                alert(data.data.info);
                console.log(this.$cookies.get("token"));
                this.$router.push("/home");
                this.userIn={};
            }
        }
    },
}
</script>
<style >
    #login{
    width:7.5rem;
    margin:0 auto;
    display:flex;
    height:100%;
    position: relative;
    flex-direction: column;
}
.header{
    position: relative;
    width: 100%;
    text-align: center;
    height: 1.04rem;
    line-height: 1.04rem;
    font-size: 0.36rem;
    color: #262626;
    font-family: "Helvetica Neue",Helvetica,Tahoma,sans-serif;
}
.header span:nth-child(1){
    float:left;
    width:0.8rem;
    height:1.08rem;
    padding:0.34rem 0.2rem;
    position: absolute;
    top:0;
    left:0;
}
.header span:nth-child(1) img{
    width:0.4rem;
    height:0.4rem;
}
.login_form{
    /* height:4.28rem; */
    width:100%;
    padding-top:0.4rem;
}
.clearfix{
    width:84%;
    margin:0 auto;
    height:1.1rem;
    border-bottom:1px solid #eaeaea;
    position: relative;
}
.clearfix input{
    float:left;
    display:inline-block;
    padding:0.34rem 0;
    line-height:0.4rem;
    font-size:0.32rem;
    text-indent:0.2rem;
    border:0 none;
}
.clear{
    position:absolute;
    right:0;
    top:0.02rem;
    width:0.7rem;
    height:1.06rem;
    padding:0.38rem 0.2rem;
}
.clear img{
    width:100%;
    height:100%;
}
.showPass{
    position:absolute;
    right:0;
    top:0.02rem;
    width:0.8rem;
    height:1.06rem;
    padding:0.34rem 0.2rem;
}
.showPass img{
    width:100%;
    height:100%;
}
.password .clear{
    right:0.6rem;
}
.verify .clear{
    right:2.06rem;
}
.verify .kong{
    width:2.02rem;
    height:1.1rem;
}
.verify .reload{
    position: absolute;
    right: 0;
    top: 0;
    width: 0.3rem;
    height: 1.1rem;
    font-size: 0;
    padding: 0.4rem 0;
}
.verify .reload img{
    width:100%;
    height:100%;
}
.login_form .btn{
    width:84%;
    height:0.94rem;
    line-height:0.94rem;
    margin: 0 auto;
    text-align:center;
    border-radius: 0.08rem;
    margin-top:0.3rem;
    font-size:0.34rem;
    color:#fff;
}
.login_form .verify{
    display:none;
}
.login_form .btn_gry{
    background:#c7c7c7;
}
.login_form .btn_red{
    background:#9E100E;
}
.forget_pd{
    width:84%;
    height:0.44rem;
    padding-top:0.16rem;
    margin:0 auto;
    font-size: 0.26rem;
    color: #999999;
    text-align:right;
}
.forget_pd a{
    color: #999999;
}
.message{
    width:84%;
    height:0.74rem;
    margin:0 auto;
    padding-top:0.4rem;
    font-size: 0.26rem;
    color: #666666;
}
.message span:nth-child(1){
    float:left;
}
.message span:nth-child(2){
    float:right;
}
.link_to{
    border-bottom:0 none;
    height:0.74rem;
    width: 84%;
    margin: 0 auto;
    padding-top: 0.4rem;
    display: flex;
    justify-content:space-between;
}
.link_to a{
    color:#666;
}
.title{
    border-bottom:0 none;
    text-align:center;
    width:6.3rem;
    margin:0;
    display: flex;
    justify-content:space-between;
}
.other_login{
    width:84%;
    margin:0 auto;
    margin-top:2rem;
}
.title span:nth-child(1),.title span:nth-child(3){
    width:1.9rem;
    border-bottom:1px solid #eaeaea;
    margin-top:0.18rem;
    height:0px;
}
.title span:nth-child(1){
    float:left;
}
.title span:nth-child(3){
    float:right;
}
.icon{
    margin:0 auto;
    text-align:center;
}
.icon a{
    width:0.8rem;
    height:0.8rem;
    margin: 0.7rem 0.25rem;
    display:inline-block;
}
.icon a img{
    width:0.8rem;
    height:0.8rem;
}
.login_form .red{
    background:#c33
}  
</style>