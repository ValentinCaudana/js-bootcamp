const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public/scripts"), // __dirname : \Users\Lenovo\desktop\code\js-bootcamp\boilerplate/public/scripts
        filename: "bundle.js",
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_nodules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["env"],
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: "source-map"
};


