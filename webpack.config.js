const path = require("path")
const webpack = require("webpack")
const plugins = require("./plugins.config.js")
const loadable = require("react-loadable/webpack")

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
    new loadable.ReactLoadablePlugin({
      filename: './build/react-loadable.json',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      filename: "manifest.js",
      minChunks: Infinity
    })
  ]),
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    port: 5000
  }
}