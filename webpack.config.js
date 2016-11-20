var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/app',
        loader: 'babel?presets[]=es2015'
      }
    ]
  },
  output: {
    filename: 'index.bundle.js',
    path: __dirname + '/prod'
  },
  plugins: [HTMLWebpackPluginConfig]
};
