const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ROOT, SRC } = require('../../../vars/paths');

module.exports = {
    mode: 'production',
    entry: './src/client/index.tsx',
    output: {
        path: path.join(ROOT, 'dist', 'client'),
        filename: '[name]-[hash].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(SRC.CLIENT, 'index.html'),
        })
    ],
};