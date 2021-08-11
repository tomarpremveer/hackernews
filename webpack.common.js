const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function (env,argv) {
    return {
        entry:{
            main:"./src/index.js"
        },
        output:{
            path:path.join(path.resolve(__dirname),"dist"),
            filename:'[name].bundle.js',
            clean:true,
        },
        plugins:[
            new HtmlWebpackPlugin({
                title:'Production',
                template:'./src/templates/index.html',
            }),
        ],
        module:{
            rules :[
                {
                    test:/\.css$/i,
                    use:["style-loadaer","css-loader"]
                },
                {
                    test:/\.(js)$/,
                    exclude:'/node-modules/',
                    use:{
                      loader: 'babel-loader',
                    }
                },
            ]
        }
    }
}