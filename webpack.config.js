var webpack = require('webpack');

module.exports = {
    entry: {app: './app.ts',},
    output: {filename: 'app.js'},

    // resolve TypeScript and Vue file
    resolve: {
        extensions: ['*', '.ts', '.vue', '.js']
    },

    module: {
        rules: [
            {
                test: /\.vue$/, loader: 'vue-loader', options: {
                // instruct vue-loader to load TypeScript
                loaders: {js: 'vue-ts-loader',},
                // make TS' generated code cooperate with vue-loader
                esModule: true
            }
            },
            {test: /\.ts$/, loader: 'vue-ts'}
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: true}
        })

    ],
    resolveLoader: {
        moduleExtensions: ['-loader']
    }
};