const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    }
}

__dirname
// \Users\Lenovo\desktop\code\js-bootcamp\boilerplate/public/scripts