module.exports = {
  // mode: "production",
  mode: "development",
  entry: './index.js',
  output: {
    publicPath: '/dist/'
  },
	optimization: {
		usedExports: true,
		concatenateModules: true,
		occurrenceOrder: true // To keep filename consistent between different modes (for example building only)
	}
}