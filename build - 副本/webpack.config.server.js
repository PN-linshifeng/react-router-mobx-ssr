const merge = require('webpack-merge');
const path = require("path");
// var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin'); //server 不需要生成HTML文件
// var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  target: 'node',
  // mode: 'production', //development production
  // devtool: 'source-map', //'inline-source-map', //这有助于解释说明我们的目的（仅解释说明，不要用于生产环境）
  entry: {
    app: './src/server.js'
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: "",
    libraryTarget: 'commonjs2'
  },

  externals: Object.keys(require('../package.json').dependencies),

  plugins: [

    // 提取css样式插件
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // })

  ],
});
