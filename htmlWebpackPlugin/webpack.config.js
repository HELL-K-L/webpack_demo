var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    insert: "./htmlWebpackPlugin/src/insert.js", //直接插入html的代码
    main: "./htmlWebpackPlugin/src/index.js",
    a: "./htmlWebpackPlugin/src/a.js",
    b: "./htmlWebpackPlugin/src/b.js",
    c: "./htmlWebpackPlugin/src/c.js"
  },
  output: {
    path: path.join(__dirname, "../htmlWebpackPlugin/dist"),
    filename: "js/[name]-[chunkhash].js",
    publicPath: "./"
  },
  plugins: [
    // new htmlWebpackPlugin({
    //   filename: "a.html",
    //   template: path.join(__dirname, "../public/index.html"),
    //   title: "kylin hello",
    //   chunks: ["main", "b"],      //多页面应用指定只加载那些文件  配合多入口一同引用
    //   excludeChunks: ["a", "c"],  //多页面应用指定不加载那些文件  配合多入口一同引用
    //   inject: false,              // false 不自动插入依赖
    //   压缩html
    //   minify: {
    //     removeComments: true, //删除注释
    //     collapseWhitespace: true //删除空格
    //   }
    // })
    new htmlWebpackPlugin({
      filename: "a.html",
      template: "./htmlWebpackPlugin/index.html",
      inject: false,
      excludeChunks: ["b", "c"],
      title: "hello world a"
    }),
    new htmlWebpackPlugin({
      filename: "b.html",
      inject: false,
      template: "./htmlWebpackPlugin/index.html",
      excludeChunks: ["a", "c"],
      title: "hello world b"
    }),
    new htmlWebpackPlugin({
      filename: "c.html",
      inject: false,
      template: "./htmlWebpackPlugin/index.html",
      excludeChunks: ["a", "b"],
      title: "hello world c"
    })
  ]
};
