# webpack4 study project

### 学习笔记

2019-1-13
1. package.json里的name 不能设为webpack,否则会报错
2. 如果需要输出多个js文件，output.filename设为[name].js就能自动匹配入口文件定义时的key

2019-1-14
1. 使用webpack引入css文件必须安装2个插件css-loader和style-loader,并且在webpack module里配置
2. 使用html-webpack-plugin插件编译index.html的时候会把所有的js文件自动引入到编译后的index.html文件中,如果要生成多个html需要多次配置，另外js文件会通过chunks配置自动引入html文件中
