npm install vue
npm install --global vue-cli
vue init webpack exp3
cd exp3
npm install
npm run dev
npm run build  #Vue 项目下生成一个 dist 目录，一般包含 index.html 文件及 static 目录，static 目录包含了静态文件 js、css 以及图片目录 images。

#assets: 放置一些图片，如logo等。
#components: 目录里面放了一个组件文件，可以不用。
#App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。
#main.js: 项目的核心文件。

npm install -g cnpm --registry=https://registry.npm.taobao.org

npm install webpack -g
cnpm install -g shelljs
cnpm install webpack 
cnpm i extract-text-webpack-plugin
cnpm i webpack-merge
cnpm i eslint-friendly-formatter

cnpm i
cnpm run build

npm run start

http://localhost:8080/#/

cnpm install -g webpack-simple 
vue init webpack-simple exp4