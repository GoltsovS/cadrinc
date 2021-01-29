const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { SRC, DIST } = require('../../../vars/paths');

module.exports = merge(common, {
  mode: 'production',
  entry: './src/client/index.tsx',
  output: {
    path: DIST.CLIENT,
    filename: '[name]-[hash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(SRC.CLIENT, 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(SRC.CLIENT, 'favicon.ico'),
          to: DIST.CLIENT,
        },
      ],
    }),
  ],
});
