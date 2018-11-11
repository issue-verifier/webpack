const webpack = require('webpack');

module.exports = {
  // mode: "production",
  mode: "development",
  entry: {
    "bundle": [
      'webpack-dev-server/client?http://localhost:8082',
      'webpack/hot/dev-server',
      './index.js'
    ]
  },
  resolve: {
    modules: ['../node_modules', 'node_modules']
  },
  output: {
    filename: "[name].js",
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
  }
};