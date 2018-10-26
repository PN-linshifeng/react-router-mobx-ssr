const merge = require('webpack-merge');
const path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成HTML文件
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// var SpritesmithPlugin = require('webpack-spritesmith'); //生成雪碧图
// var CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件夹
const baseConfig = require('./webpack.base.js');
const devMode = process.env.NODE_ENV !== 'production';

let config = merge(baseConfig, {
  mode: 'production', //development production
  // devtool: 'source-map', //'inline-source-map', //这有助于解释说明我们的目的（仅解释说明，不要用于生产环境）
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
    //清理文件夹
    // new CleanWebpackPlugin(['dist']),
    //生成HTML
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
    }),
    new HtmlWebpackPlugin({
      template: "!!ejs-compiled-loader!" + path.join(__dirname, "../src/server.ejs"),
      filename: 'server.ejs',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeAttributeQuotes: true,
        trimCustomFragments: true
      }
    }),
    // new webpack.HotModuleReplacementPlugin(), // 启用 HMR

    //提取css样式插件
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  //压缩js
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false,
          maxLineLength: 500
        }
      })
    ]
  },

});

if (devMode) {
  config.mode = 'development';
  config.devtool = 'inline-source-map';
  config.entry = {
    app: ['react-hot-loader/patch', './src/index.js']
  };
  config.devServer = {
    contentBase: path.join(__dirname, "../dist"), //告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先 。跟入口的path相同
    publicPath: '/public/', //打包文件目录，跟output.publicPath相同
    compress: true, //是否gzip压缩
    port: 8100,
    open: true,
    host: '0.0.0.0',
    historyApiFallback: {
      index: '/public/index.html'
    },
    hot: true, // 使用热加载插件 HotModuleReplacementPlugin
    overlay: {
      warnings: true,
      errors: true
    }
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config;
