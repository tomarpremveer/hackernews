const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
    return {
        entry:{
            main:"./src/index.js" //this is where the webpack will start building the dependency graph
        },
        plugins:[
            new HtmlWebpackPlugin({
                title:'HackerNews Clone',
                template:'./src/templates/index.html',
            }),
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