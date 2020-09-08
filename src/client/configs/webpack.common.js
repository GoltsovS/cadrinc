const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ROOT } = require('../../../vars/paths');

module.exports = {
    entry: './src/client/index.tsx',
    output: {
        path: path.join(ROOT, 'dist', 'client'),
        filename: 'build.js',
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
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(ROOT, 'src', 'client', 'index.html'),
                    to: path.join(ROOT, 'dist', 'client')
                },
            ]
        }),
    ],
};