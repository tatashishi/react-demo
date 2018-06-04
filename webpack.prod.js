
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode:'production',
  entry: __dirname + "/src/index.js",
  output:{
    path: path.resolve(__dirname, './dist'),
    filename:'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'demo',
      template : __dirname + '/index.html',
    }),
    new UglifyJSPlugin()
  ],
  module:{
    rules:[
      {
        test:/\.(css|scss|less)$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(js|jsx)$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react'],
        }
      }
    ]
  }
};