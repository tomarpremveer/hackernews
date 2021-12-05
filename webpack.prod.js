const { merge:webpackMerge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = webpackMerge(common(), {
    mode:'production',
    output:{
        path:path.join(path.resolve(__dirname),"public"),
        filename:'[contenthash].bundle.js',
        clean:true,
        chunkFilename:'[contenthash].js'
    },
    optimization:{
        minimizer:[new UglifyJsPlugin({
            test:/\.js$/,
            exclude:'/node-modules/',
        })],
        splitChunks:{
            cacheGroups:{
                vendor:{
                    chunks:'all',
                    test:/node_modules/,
                    name:'vendor'
                }
            }
        }
    }
})