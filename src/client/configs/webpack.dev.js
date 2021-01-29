const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const { ROOT } = require('../../../vars/paths');

module.exports = merge(common, {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/client/index.tsx'],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(ROOT, 'dist', 'client'),
  },
});
