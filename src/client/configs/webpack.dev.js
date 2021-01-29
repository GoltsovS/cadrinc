const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const { ROOT, SRC } = require('../../../vars/paths');

module.exports = merge(common, {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/client/index.tsx'],
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC.CLIENT, 'index.html'),
      hash: true,
    }),
  ],
});
