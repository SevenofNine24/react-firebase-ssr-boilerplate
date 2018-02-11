const webpack = require("webpack")
const loadable = require("react-loadable/webpack")
const path = require('path')

module.exports = process.env.NODE_ENV === "production" ? [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin()
] : [
  new webpack.HotModuleReplacementPlugin()
]