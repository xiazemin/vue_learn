const path=require('path')
const VueLoaderPlugin=require('vue-loader/lib/plugin')

module.exports={
    entry:path.join(__dirname,'app.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'build.js'
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {   
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'css-loader',
                    'vue-style-loader'
                ]
            }
        ] 
    }
}