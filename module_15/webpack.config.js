const path = require('path')

module.exports = {
    watch: true,
    entry: './src/index.js',
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'}
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'bundle.js'
    },
    devServer: {
        watchFiles: path.join(__dirname, 'src/components'),
        port: 8080,
        hot: true
    },
    mode: "development",
}