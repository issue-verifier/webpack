const TerserPlugin = require('terser-webpack-plugin'); // es2015に対応していため

module.exports = {
  // mode: "production",
  mode: "development",
  devtool: false,
  entry: "./index.js",
  output: {
    filename: "bundle.js",
  },
  optimization: {
    // minimize: false,
    usedExports: true
  },
  plugins: [
    new TerserPlugin()
  ]
};