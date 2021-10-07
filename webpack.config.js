//const webpack = require('webpack');
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
        use: 'babel-loader',
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
