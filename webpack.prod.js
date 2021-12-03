const { merge:webpackMerge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = webpackMerge(common(), {
    mode:'production',
    output:{
        path:path.join(path.resolve(__dirname),"public"),
        filename:'[contenthash].bundle.js',
        clean:true,
        chunkFilename:'[contenthash].js'
    },
    optimization:{
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