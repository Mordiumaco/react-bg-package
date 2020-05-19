const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // moduel export (옛날 방식..)
  entry: "./src/index.js", // 리액트 파일이 시작하는 곳
  output: {
    // bundled compiled 파일
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
        exclude: /node_module/, // node module 폴더는 babel 컴파일에서 제외
        use: {
          loader: "babel-loader", // babel loader가 파이프를 통해 js 코드를 불러옴
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 생성한 템플릿 파일
    }),
  ],
};
