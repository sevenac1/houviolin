<template>
    <div id="app">
        <div class="header">
            <span>
                <img src="http://login.kongfz.com/mobile/images/login/back.png" alt="">
            </span>
            <span>注册</span>
        </div>
        <div class="register_form">
            <div class="name clearfix">
                <div class="areaCode">+86</div>
                <input type="text" placeholder="请输入手机号" name="user" @blur="un"  v-model="userInfo.user">
                <v-touch tag="div" @tap="clearun" class="clear" style="display:none">
                    <img src="http://login.kongfz.com/mobile/images/login/clear.png" alt="">
                </v-touch>
            </div>
            <div class="code clearfix">
                <input type="password" placeholder="请输入密码" name="password" @blur="pwd" v-model="userInfo.password">
                <v-touch tag="div" @tap="clearpwd" class="clear" style="display:none">
                    <img src="http://login.kongfz.com/mobile/images/login/clear.png" alt="">
                </v-touch>
            </div>
            <v-touch tag="div"  @tap="flag" :disabled="btn" :class="thiscolor == true ? 'btn red' : 'btn btn_gry' ">注册</v-touch>
        </div>
        <div class="tip">
            注册即表示您同意<span>《孔夫子旧书网服务协议》</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isReturn:false,
            btn:false,
            userInfo:{
                user:'',
                password:'',
            },
            thiscolor:false,
            userArr:[] 
        }
    },
    methods:{
        un(){
            if(this.userInfo.user == ""){
                console.log("用户名不能为空");
                this.thiscolor=false;
            }else{
                // console.log(this.userInfo.user);
            }
        },
        pwd(){
            if(this.userInfo.password == ""){
                console.log("密码不能为空");
                this.thiscolor=false;
            }else{
                this.thiscolor=true;
                console.log(this.userInfo.password);
                
            }
        },
        flag(){
            if(!this.userInfo.user || !this.userInfo.password){
                alert("输入有误");
                return;
            }
            if(window.localStorage.userArr){
                console.log(window.localStorage.userArr);
                var array=JSON.parse(window.localStorage.userArr)
            }else{
                array=[];
            }
            for(var i = 0;i<array.length;i++){
                console.log(array);
                if(this.userInfo.user == array[i].username){
                    alert('该用户已存在');
                    this.thiscolor=false;
                    this.userInfo.user="";
                    this.userInfo.password="";
                    return;
                }
            }
            var obj = {username:this.userInfo.user,password:this.userInfo.password};
            array.push(obj);
            console.log(array);
            window.localStorage.userArr=JSON.stringify(array);
            localStorage.setItem('userArr',window.localStorage.userArr);
            this.userInfo.user="";
            this.userInfo.password="";
            this.$router.push({path:"/login"})
        },
        clearun(){
                this.userInfo.user == ""
            
            
        },
        clearpwd(){
            if(this.userInfo.password == ""){
                this.userInfo.password == ""
            }else{
                alert(1);
                this.userInfo.password == ""
            }
        }
    }
}
</script>
<style >
#app{
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
.register_form{
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

/* .code input{
    padding: 0.34rem 0.8rem 0.34rem 1.1rem
} */
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
.areaCode{
    height:1.08rem;
    padding:0.34rem 0.3rem;
    float:left;
    font-size:0.32rem;
    line-height:0.4rem;
    color:#262626;
    position: absolute;
    left:0;
    top:0;
}
.clearfix input{
    width:100%;
    height:100%;
    padding:0.34rem 0.8rem 0.34rem 1.1rem;
}
/* .code input{
    padding-left:0;
} */
.code .clear{
    /* right:1.66rem; */
}
.code .send{
    position:absolute;
    right:0;
    top:0;
    width:1.62rem;
    height:1.06rem;
    line-height:0.58rem;
    text-align:center;
    font-size:0.26rem;
    color:#c7c7c7;
    padding:0.24rem 0;
}
.code .send span{
   display:block;
   width: 1.66rem;
   height:0.62rem;
   border:1px solid #c7c7c7;
   line-height:0.58rem;
   text-align:center;
   font-size:0.26rem;
   color:#c7c7c7;
   border-radius: 0.08rem;
}
.register_form .btn{
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
.register_form .btn_gry{
    background:#c7c7c7;
}
.register_form .btn_red{
    background:#9E100E;
}
.tip{
    width:100%;
    height:0.34rem;
    text-align:center;
    line-height:0.34rem;
    margin-top:0.4rem;
    font-size:0.26rem;
    color:#999;
}
.tip span{
    color: #d13333!important;
}
.register_form .red{
    background:#c33
}

</style>