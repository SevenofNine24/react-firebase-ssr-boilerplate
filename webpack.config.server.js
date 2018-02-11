const base = require("./webpack.config.js")
const path = require("path")
const webpack = require("webpack")
const plugins = require("./plugins.config.js")

module.exports = Object.assign({}, base, {
  entry: "./server.js",
  target: "node",
  externals: {
    "express": "commonjs express"
  },
  plugins: plugins,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js"
  },
  devtool: false
})