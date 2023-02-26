const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = [ 'index', 'HappyBirthday/index', 'Games/Platformer/index', 'Games/Paint/index', ];

module.exports = {
    entry: pages.reduce((config, page) => {
        config[page] = `./client/${page}.ts`;
        return config;
    }, {}),
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash].css'
        }),
    ].concat(
        pages.map(page => new HtmlWebpackPlugin({
            inject: true,
            template: `./client/${page}.html`,
            filename: `${page}.html`,
            chunks: [page]
        }))
    )
};