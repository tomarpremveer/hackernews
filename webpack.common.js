const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function (env,argv) {
    return {
        entry:{
            main:"./src/index.js"
        },
        output:{
            path:path.join(path.resolve(__dirname),"public"),
            filename:'[name].bundle.js',
            clean:true,
            chunkFilename:'[name].js'
        },
        plugins:[
            new HtmlWebpackPlugin({
                title:'HackerNews Clone',
                template:'./src/templates/index.html',
            }),
            new BundleAnalyzerPlugin(),
        ],
        module:{
            rules :[
                {
                    test:/\.css$/,
                    use:['style-loader','css-loader'],
                    sideEffects:true,
                },
                {
                    test:/\.js$/,
                    exclude:'/node-modules/',
                    use:{
                      loader: 'babel-loader',
                    }
                },
            ]
        }
    }
}