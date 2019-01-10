import path from 'path';

const webpackConfig = {
    entry: './src/index.js',
    mode: process.env.NODE_ENV || 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            }
        ]
    }
};

export default webpackConfig;