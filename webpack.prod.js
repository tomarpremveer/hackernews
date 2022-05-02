const { merge:webpackMerge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');


module.exports = webpackMerge(common(), {
    mode:'production',
    output:{
        path:path.join(path.resolve(__dirname),"public"),
        filename:'[name].[contenthash].bundle.js',
        clean:true,
        chunkFilename:'[contenthash].js'
    },
    optimization:{
        minimize:true,
        minimizer:[new TerserPlugin({
            test:/\.js$/,
            //exclude:'/node-modules/',
            parallel:true,
            minify:TerserPlugin.terserMinify
        })],
    },
    resolve: {
        alias: {
            'react-dom$': 'react-dom/profiling',
            'scheduler/tracing': 'scheduler/tracing-profiling'
        }
      }
})