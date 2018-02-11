const path = require("path")
const webpack = require("webpack")
const plugins = require("./plugins.config.js")
const loadable = require("react-loadable/webpack")

module.exports = {
  devtool: "source-map",
  entry: "./client.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].client.js"
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new loadable.ReactLoadablePlugin({
      filename: path.resolve(__dirname, "build", "react-loadable.json")
    })
  ]),
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    port: 5000
  }
}