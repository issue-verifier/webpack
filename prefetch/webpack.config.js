module.exports = {
  // mode: "production",
  mode: "development",
  // devtool: false,
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    publicPath: '/dist/'
  }
};