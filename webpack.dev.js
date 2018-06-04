
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode:'development',
  entry: __dirname + "/src/index.js",
  output:{
    path: path.resolve(__dirname, './dist'),
    filename:'bundle.js',
  },
  devtool:'inline-source-map',
  devServer:{
    hot: true,
    contentBase:'./dist',
    port:8088
  }, 
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'demo',
      template : __dirname + '/index.html',
    }),
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