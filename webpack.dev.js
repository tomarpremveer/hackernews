const { merge:webpackMerge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = webpackMerge(common(), {
    mode:'development',
    devtool:'inline-source-map', // for source code mapping in case of error
    devServer:{
        contentBase:'./dist'
    }

})