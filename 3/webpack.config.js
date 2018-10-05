const path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成HTML文件
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //生成css
var SpritesmithPlugin = require('webpack-spritesmith'); //生成雪碧图
var CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件夹

module.exports = {
	// mode: 'development', //development production
	// devtool: 'inline-source-map', //这有助于解释说明我们的目的（仅解释说明，不要用于生产环境）
	entry: ['./src/index.js'],
	output: {
		filename: 'js/[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/"
	},
	module: {
		rules: [
			// 样式
			{
				test: /\.(css|sass|scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						'css-loader',
						'postcss-loader',
						'sass-loader',
					]
				})

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
				}
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
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true, //是否gzip压缩
		port: 9100,
		open: true,
		hot: true // 使用热加载插件 HotModuleReplacementPlugin
	},
	plugins: [
		//清理文件夹
		// new CleanWebpackPlugin(['dist']),
		//生成HTML
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
		new webpack.HotModuleReplacementPlugin(), // 启用 HMR

		//提取css样式插件
		new ExtractTextPlugin({
			filename: 'style.css',
			disable: true,
		}),
	],
};