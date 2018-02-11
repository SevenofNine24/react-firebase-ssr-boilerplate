const base = require("./webpack.config.js")
const path = require("path")
const webpack = require("webpack")
const plugins = require("./plugins.config.js")

module.exports = Object.assign({}, base, {
  entry: "./server.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js"
  },
  externals: {
    "express": "commonjs express"
  },
  plugins: plugins.concat([
  ]),
  devtool: false
})