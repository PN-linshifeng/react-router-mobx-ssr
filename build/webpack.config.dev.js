const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');
const path = require("path");

module.exports = merge(baseConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		app: ['react-hot-loader/patch', './src/index.js']
	},
	output: {
		filename: 'js/[name].bundle.js',
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

		new webpack.HotModuleReplacementPlugin(), // 启用 HMR
	],
});