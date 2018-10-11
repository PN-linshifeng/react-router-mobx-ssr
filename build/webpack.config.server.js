const path = require("path");
// var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin'); //server 不需要生成HTML文件
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var SpritesmithPlugin = require('webpack-spritesmith'); //生成雪碧图
var CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件夹

module.exports = {
  target: 'node',
  mode: 'development', //development production
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
  module: {
    rules: [
      // 样式
      {
        test: /\.(css|sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-resources-loader',
          options: {
            resources: ['./src/scss/mixin/*.scss'],
            sourceMap: true
          }
        }]

      },
      // 图片
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: "images/[name].[ext]",
            limit: 4 * 1024,
          }
        }]
      },
      //字体
      {
        test: /\.(woff|woff2|eot|otf|ttf)/,
        use: [{
          loader: 'url-loader',
          options: {
            name: "font/[name].[ext]",
            limit: 8192,
          }
        }]
      },
      //js
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
        exclude: /node_modules/
      },
      //html
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }, {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "@src": path.resolve("src"),
      "@component": path.resolve("src/component"),
      "@container": path.resolve("src/container"),
      "@images": path.resolve("src/static/images"),
    },

  },

  plugins: [

    // new webpack.HotModuleReplacementPlugin(), // 启用 HMR

    // 提取css样式插件
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
};
