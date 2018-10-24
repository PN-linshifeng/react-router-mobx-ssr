const merge = require('webpack-merge');

const path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成HTML文件
// var MiniCssExtractPlugin = require("mini-css-extract-plugin");
// var SpritesmithPlugin = require('webpack-spritesmith'); //生成雪碧图

const baseConfig = require('./webpack.base.js');
// var CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件夹

module.exports = merge(baseConfig, {
  // mode: 'development', //development production
  devtool: 'source-map', //'inline-source-map', //这有助于解释说明我们的目的（仅解释说明，不要用于生产环境）
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router-dom'
    ],
    app: './src/index.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
    }),
    //服务器渲染使用
    new HtmlWebpackPlugin({
      template: '!!ejs-compiled-loader!' + path.join(__dirname, "../src/server.ejs"),
      filename: 'server.ejs'
    }),
  ],
});
