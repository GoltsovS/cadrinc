const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { SRC, DIST } = require('../../../vars/paths');

module.exports = {
    mode: 'production',
    entry: './src/client/index.tsx',
    output: {
        path: DIST.CLIENT,
        filename: '[name]-[hash].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ],
            },
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
};