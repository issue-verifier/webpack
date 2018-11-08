const webpack = require('webpack');

module.exports = {
  // mode: "production",
  mode: "development",
  entry: {
    "bundle": ["webpack-hot-middleware/client", "./index.js"]
  },
  output: {
    filename: "[name].js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};