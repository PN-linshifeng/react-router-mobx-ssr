const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成HTML文件
var MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css
const SpritesmithPlugin = require('webpack-spritesmith'); //生成雪碧图
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件夹
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/public"
  },
  module: {
    rules: [
      //js  编译之前先检测
      {
        test: /.(js|jsx)$/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter') // 默认的错误提示方式
          }
        },
        enforce: 'pre', // 编译前检查
        exclude: path.resolve(__dirname, '../node_modules'), // 不检测的文件
        include: path.resolve(__dirname, '../src'), // 要检查的目录
      },
      // 样式
      {
        test: /\.(css|sass|scss)$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, {
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
    //清理文件夹
    // new CleanWebpackPlugin(['dist']),
    //生成HTML
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // new webpack.HotModuleReplacementPlugin(), // 启用 HMR

    //提取css样式插件
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
};
