// node的path路径模块,用于设置文件路径
const path = require('path');

module.exports = {
  mode: "production",   //"production"生产环境、"development"开发环境
  entry: {
    index: './src/index.js',
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",  //这里起什么名字，根目录html文件引入的js也是什么名字
  }
};







































