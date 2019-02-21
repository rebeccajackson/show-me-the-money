const path = require('path');

module.exports = {
  entry: './client/index.js',

  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.js|\.jsx$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'source-map',

  mode: 'development'
};
