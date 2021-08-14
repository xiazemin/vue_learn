https://segmentfault.com/a/1190000014368466

src文件夹（前端所有代码）；
build文件夹(打包相关的webpack配置文件)；
service文件夹(存放后端代码)；
data文件夹(存放json数据)；
server.js(node服务)

在src目录中创建views(存放所有.vue组件)，router(存放前端路由配置),store(存放vuex配置),man.js(单页面入口文件),app.vue（单页面首页组件）,

node下创建index.html作为载体。

接下来是配置文件：在build文件夹中创建webpack.config.js

先安装各种插件
vue
vue-loader
webpack
css-laoder
sass-loader
vue-style-loader
babel-loader

最终我们启动项目是用server.js启动，所以在这里我们这样写


index.html要先写成：

https://github.com/lfb/nodejs-koa-blog

node server

用express启服，同时实现webpack的热加载和server.js的热加载；

#Field 'browser' doesn't contain a valid alias configuration
main.js名字拼错了

https://blog.csdn.net/fqq_5280/article/details/86562488

cnpm i webpack-cli --save

webpack --config