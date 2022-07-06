const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: `./src/${process.env.MAIN_ENTRY || 'index.tsx'}`,
    devtool: 'inline-source-map',
    output: {
    path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 4000
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
