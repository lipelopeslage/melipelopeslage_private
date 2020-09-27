const path = require('path')

module.exports = {
  entry: {
    "header": "./src/components/header",
    "search": "./src/components/search",
    "input": "./src/components/input",
    "button": "./src/components/button",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          modules: false
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
}
