//项目路径设置
var path = require('path');
var __path = {
  appPath: path.resolve(__dirname, "src"), //app目录
  entry: path.resolve(__dirname, "src/index.js"), //入口js
  build: path.resolve(__dirname, "build"), //构建目录
  HTMLPath: path.resolve(__dirname, "view"), //html目录
  resoursePath: path.resolve(__dirname, "src/static/"), //所有资源目录
  JSPath: path.resolve(__dirname, "src/static/js"), //js目录
  CSSPath: path.resolve(__dirname, "src/static/css"), //css目录
  IMGPath: path.resolve(__dirname, "src/static/img"), //image目录
  publicPath: path.resolve(__dirname, "./dist") //发布资源目录，资源构建完成后的输出目录
};
module.exports = __path;