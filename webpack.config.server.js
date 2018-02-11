const base = require("./webpack.config.js")
const path = require("path")

module.exports = Object.assign({}, base, {
  entry: "./app/ServerApp.js",
  output: {
    libraryTarget: "commonjs2",
    libraryExport: "default",
    path: path.resolve(__dirname, "functions"),
    filename: "bundle.js"
  },
  devtool: false
})