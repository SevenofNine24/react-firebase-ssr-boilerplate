const path = require("path")
const webpack = require("webpack")
let plugins = process.env.NODE_ENV === "production" ? [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin()
] : [
  new webpack.HotModuleReplacementPlugin()
]
module.exports = {
  devtool: "source-map",
  entry: "./client.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "client.bundle.js",
    publicPath: "/assets/"
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
  plugins: plugins,
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true
  }
}