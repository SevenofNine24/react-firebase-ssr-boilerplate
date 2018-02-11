const path = require("path")
const webpack = require("webpack")
const plugins = require("./plugins.config.js")

module.exports = {
  devtool: "source-map",
  entry: "./client.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "client.js"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: plugins.concat([
  ]),
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    port: 5000
  }
}