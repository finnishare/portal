
var path = require("path");
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: [".js"]
    },
    entry: {
        app: ['./src/js/index.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js",
        library: 'Portal',
        libraryTarget: 'umd'
    },
    module: {

        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/transform-runtime']
                }
            }
        }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: false,
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, "public/index.html"),
            title:'portal demo',
            inject: true
        })
        ]
};
