const path=require("path");
module.exports={
    devServer:{
        proxy:{
            "/operation":{
                target:"https://m.kongfz.com",
                changeOrigin:true
            },
            "/book":{
                target:"https://m.kongfz.com",
                changeOrigin:true
            },
            "/home":{
                target:"http://m.kongfz.cn/mobile",
                changeOrigin:true
            },
            "/list":{
                target:"http://m.kongfz.cn/mobile",
                changeOrigin:true
            }
          
        
        }
    },
    //别名配置
     configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@page":path.join(__dirname,"./src/page"),
                "@router":path.join(__dirname,"./src/router"),
                "@utils":path.join(__dirname,"./src/utils")

            }
        }
    }

}


