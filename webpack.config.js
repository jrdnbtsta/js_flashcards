const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},

            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},

            { test: /(.css|\.scss)$/, loaders: ['style', 'css']},

            { test: /\.html$/, loader: 'html-loader', exclude: /node_modules/}
        ]
    }
}