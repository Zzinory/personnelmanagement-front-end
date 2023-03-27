// module.exports={
//     devServer:{
//         port:8080,
//         open:true,
//         proxy:{
//             '/api':{
//                 target:'http://localhost:8888',
//                 changeOrigin:true,
//                 ws:true,
//                 pathRewrite:{
//                     '^/api': ''
//                 }
//             }
//         }
//     },
//     //关掉又爱又恨的eslint
//     lintOnSave:false
// }

const { defineConfig } = require('@vue/cli')
module.exports = defineConfig({
  devServer: {
    port:8080,
    open:true,
    proxy: {
      '/api': {
        target:'http://localhost:8888',
        pathRewrite:{'^/api':''}//路径改写
      }
    }
  },
  //关掉又爱又恨的eslint
  lintOnSave:false
})
