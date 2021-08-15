//server.js
const webpack=require('webpack')
const webpackConfig=require('./build/webpack.config')
//dev和hot用来实现前端的热加载
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express=require('express')
const path=require('path')

const app=express()

const compiler = webpack(webpackConfig)//删除了打印的回调函数，加上的话这里会执行两遍打包，不晓得为啥

app.use(webpackDevMiddleware(compiler,{
    // public path should be the same with webpack config
    //在项目中这样的路径都会配置到统一的文件中
    publicPath: 'http://localhost:3000/',
    noInfo: true,
    stats: {
        colors: true
    }
}))

app.use(webpackHotMiddleware(compiler))

app.listen(3000,function(){
    console.log('App  is now running on port 3000!');
})