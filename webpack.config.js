const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack');
// node的path路径模块,用于设置文件路径
const path = require('path');

module.exports = {
  //mode: "production",   //"production"生产环境、"development"开发环境
  entry: {
    index: './src/index.js',
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",  //这里起什么名字，根目录html文件引入的js也是什么名字
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {test: /\.ts$/, use: 'ts-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      hash: true,
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './app.html',
      filename: 'app.html',
      hash: true,
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './search.html',
      filename: 'search.html',
      hash: true,
      chunks: ['search']
    })
  ]
};







































