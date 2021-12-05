const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function () {
    return {
        entry:{
            main:"./src/index.js", //this is where the webpack will start building the dependency graph
        },
        plugins:[
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                title:'HackerNews Clone',
                template:'./src/templates/index.html',
            }),
        ],
        module:{
            rules :[
                {
                    test:/\.css$/,
                    use:[MiniCssExtractPlugin.loader,'css-loader'],
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