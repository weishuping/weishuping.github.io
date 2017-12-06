var path = require('path');

module.exports = {
    entry: './js/my.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: { inline: true },
    module: {
        loaders: [{
            test: path.join(__dirname, 'js'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            exclude: /node_module/
        }, {
            test: /\.less$/,
            loaders: 'style-loader!css-loader!less-loader',
            exclude: /node_module/
        }, {
            test: /\.(png|svg|jpg|gif)/,
            loaders: 'url-loader',
            options: {
                publicPath: './dist'
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    resolve: {
        alias: { 'vue': 'vue/dist/vue.js' }
    }

}