const { merge:webpackMerge } = require('webpack-merge')
const common = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path')

module.exports = webpackMerge(common(), {
    mode:'development',
    devtool:'inline-source-map', // for source code mapping in case of error
    devServer:{
        contentBase:path.resolve(__dirname ,'./public')
    },
    plugins:[
        new BundleAnalyzerPlugin(),
    ]

})