const { merge:webpackMerge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = webpackMerge(common(), {
    mode:'production',
    optimization:{
        usedExports:true,
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