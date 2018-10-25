const merge = require('webpack-merge');
const path = require("path");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin'); //server 不需要生成HTML文件
// var MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  target: 'node',
  mode: 'production', //development production
  // devtool: 'source-map', //'inline-source-map', //这有助于解释说明我们的目的（仅解释说明，不要用于生产环境）
  entry: {
    app: './src/server.js'
  },
  externals: ['react-helmet'],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: "",
    libraryTarget: 'commonjs2'
  },
  //压缩js
  // optimization: {
 //   minimizer: [
 //     new UglifyJsPlugin({
 //       uglifyOptions: {
 //         compress: false
 //       }
 //     })
 //   ]
 // },

});
console.log("444")
