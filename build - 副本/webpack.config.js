const path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成HTML文件
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //生成css
var SpritesmithPlugin = require('webpack-spritesmith'); //生成雪碧图
var CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件夹

module.exports = {
	// mode: 'development', //development production
	devtool: 'inline-source-map', //'inline-source-map', //这有助于解释说明我们的目的（仅解释说明，不要用于生产环境）
	entry: {
		vendor: [
			'react',
			'react-dom',
			'react-router-dom'
		],

		app: ['react-hot-loader/patch', './src/index.js']
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
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: 'style-loader',
						options: {
							sourceMap: true
						}
					}, {
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
	devServer: {
		contentBase: path.join(__dirname, "../dist"), //告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先 。跟入口的path相同
		publicPath: '/public', //打包文件目录，跟output.publicPath相同
		compress: true, //是否gzip压缩
		port: 8001,
		open: true,
		historyApiFallback: {
			index: '/public/index.html'
		},
		hot: true, // 使用热加载插件 HotModuleReplacementPlugin
		// ovrylay: {
		// errors: true
		// }
	},
	plugins: [
		//清理文件夹
		// new CleanWebpackPlugin(['dist']),
		//生成HTML
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new webpack.HotModuleReplacementPlugin(), // 启用 HMR

		//提取css样式插件
		new ExtractTextPlugin({
			filename: 'style.css',
			disable: true,
		}),
	],
};