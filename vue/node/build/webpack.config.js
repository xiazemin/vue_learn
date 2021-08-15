//webpack.config.js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
mode:'development',//webpack4新加的，不写会报黄
entry: {
    main: path.resolve(__dirname, '../src/main.js')
},
output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js'
},
module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                'less': [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        }
    }, 
    {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },]
},
resolve: {
alias: {//开发环境使用vue.esm.js',官网有说明
        'vue$': 'vue/dist/vue.esm.js'
    },
    //reuqire加载文件会自动为以下后缀的文件（如：./app.vue可以写成./app了）
    extensions: ['*', '.js', '.vue', '.json']
  },
plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
]
}