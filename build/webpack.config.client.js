const path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成HTML文件
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var SpritesmithPlugin = require('webpack-spritesmith'); //生成雪碧图
// var CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件夹

module.exports = {
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
		path: path.resolve(__dirname, '../dist'),
		publicPath: "/public"
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
	// devServer: {
	// 	contentBase: path.join(__dirname, "dist"),
	// 	compress: true, //是否gzip压缩
	// 	port: 8001,
	// 	open: true,
	// 	historyApiFallback: true, //不跳转
	// 	hot: true // 使用热加载插件 HotModuleReplacementPlugin
	// },
	plugins: [
		//清理文件夹
		// new CleanWebpackPlugin(['dist']),
		//生成HTML
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),

		// 定义为生产环境，编译 React 时压缩到最小
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		// 	}
		// }),

		// new webpack.HotModuleReplacementPlugin(), // 启用 HMR

		//提取css样式插件
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
};