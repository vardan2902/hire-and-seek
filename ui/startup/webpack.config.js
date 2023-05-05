const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const PLUGINS = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'static', 'index.html')
    }),
    new ModuleFederationPlugin(
        {
            name: 'HireAndSeek',
            filename: 'consumer.js',
            remotes: {
                SharedUI: 'SharedUI@http://localhost:3001/entry.js',
                Home: 'Home@http://localhost:3002/entry.js'
            },
            shared: [
                'react',
                'SharedUI'
            ]
        }
    ),
];

const LOADERS = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
    },
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
    },
    {
        test: /\.(png|jpe?g|gif)$/,
        use: ['url-loader']
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }
];


module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    entry: {
        index: path.resolve(__dirname, 'src', 'index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        hot: true,
        open: true,
        port: 3000,
        historyApiFallback: true
    },
    plugins: PLUGINS,
    module: {
        rules: LOADERS
    },
};