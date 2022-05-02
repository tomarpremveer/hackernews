const { merge:webpackMerge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = webpackMerge(common(), {
    mode:'production',
    output:{
        path:path.join(path.resolve(__dirname),"public"),
        filename:'[name].[contenthash].bundle.js',
        clean:true,
        chunkFilename:'[contenthash].js'
    },
    optimization:{
        minimizer:[new UglifyJsPlugin({
            test:/\.js$/,
            exclude:'/node-modules/',
        })],
    },
    resolve: {
        alias: {
            'react-dom$': 'react-dom/profiling',
            'scheduler/tracing': 'scheduler/tracing-profiling'
        }
      }
})