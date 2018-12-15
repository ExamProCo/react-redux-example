const path    = require('path')
const webpack = require('webpack')

const config_web = {
  target: 'web',
  entry: {
    'application.js' : path.resolve(__dirname, 'src/application.jsx')
  },
  output: {
    path    : path.resolve(__dirname, 'public'),
    filename: '[name]'
  },
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  }
}

module.exports = [
  config_web
]

