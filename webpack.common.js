const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function (env,argv) {
    return {
        entry:{
            app:"./src/index.js"
        },
        output:{
            path:path.resolve(__dirname,"dist"),
            filename:'[name].bundle.js',
            clean:true,
        },
        plugins:[
            new HtmlWebpackPlugin({
                title:'Production',
                template:'./src/templates/index.html',
            })
        ],
        module:{
            rules :[
                {
                    test:'/\.css$/i',
                    use:["style-loadaer","css-loader"]
                },
                // {
                //     test:'/\.[jsx|js]$/',
                //     use:[]
                // },
                // {
                //     test:'/\.html$/',
                //     use:['html-loader']
                // }
            ]
        }
    }
}