const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: "development",
  devtool: 'eval-source-map',
  plugins: [

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build/js'),
    publicPath: 'js'
  }
});