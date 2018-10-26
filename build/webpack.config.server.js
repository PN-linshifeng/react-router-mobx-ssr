const merge = require('webpack-merge');
const path = require("path");
const webpack = require('webpack');
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_BASE': '"http://127.0.0.0:3000"'
    })
  ]
});
