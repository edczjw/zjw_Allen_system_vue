'use strict'                  //严格模式
const path = require('path')  //node的path模块 用来统一路径

module.exports = {
  // 在线编译
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/":{
                                            // 你接口的域名
        target:"http://127.0.0.1:3000",
                                            // 接口跨域时添加
        changeOrigin:true,
                                            // 要重写api地址时添加 因为有时候可能是部分接口代理跨域，需要一个能被匹配到的前缀，但是接口并不需要这个前缀，所以需要重写
        pathRewrite:{
          "^/":"/"                          //用/代替http://localhost:3000
        }
      }
    },
    host: 'localhost',                      //主机
    port: 8083,                             //端口
    autoOpenBrowser: false,                 //编译结束以后自动开启浏览器
    errorOverlay: true,                     //是否查询错误
    notifyOnErrors: true,                   //是否通知错误
    poll: false,
    devtool: 'cheap-module-eval-source-map', //当js抛出异常时，显示报错的是第几行
    cacheBusting: true,                     //是否缓存破坏
    cssSourceMap: true                      //记录压缩的代码  用来找到源码位置
  },

  // 打包
  build: {
    index: path.resolve(__dirname, '../dist/index.html'), //模板
    assetsRoot: path.resolve(__dirname, '../dist'),       //打包后文件要存放的路径
    assetsSubDirectory: 'static',                         //除index.html外静态资源存放的路径
    assetsPublicPath: '/',                                //代表打包后，index.html里面引用资源的的相对地址
    productionSourceMap: true,                            //置为false，既可以减少包大小，也可以加密源码  true 的时候  会生成map文件  可以查看源码  追踪报错
    devtool: '#source-map',                               //便于使用开发者工具追踪报错具体在哪个源文件
    productionGzip: false,                                //默认关闭gzip  因为很多流行的静态资源主机  例如surge  netlify，已经为所有静态资源开启gzip
    productionGzipExtensions: ['js', 'css'],              //需要使用gzip 压缩的文件扩展名
    bundleAnalyzerReport: process.env.npm_config_report   //性能优化 打包文件分析工具 process是node.js的进程的有关信息以及控制进程
  }
}
