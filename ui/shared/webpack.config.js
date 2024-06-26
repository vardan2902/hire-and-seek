const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const PLUGINS = [
    new ModuleFederationPlugin(
        {
            name: 'SharedUI',
            filename: 'entry.js',
            exposes: {
                './Button': './src/ui/button/index.tsx',
                './StyledComponents': './src/styled/index.ts',
                './LabeledInput': './src/ui/labeled-input/index.tsx'
            },
            shared: [
                'react',
                'styled-components'
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
        open: false,
        port: 3001,
        historyApiFallback: true
    },
    plugins: PLUGINS,
    module: {
        rules: LOADERS
    },
};