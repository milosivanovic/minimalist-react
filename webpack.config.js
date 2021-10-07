const ErrorOverlayPlugin = require('../../error-overlay-webpack-plugin')

module.exports = {
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
		options: {
			loader: 'jsx',
			target: 'es2020',
		}
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [new ErrorOverlayPlugin()],
  devtool: 'source-map',
  devServer: {
    hot: true,
  },
};
