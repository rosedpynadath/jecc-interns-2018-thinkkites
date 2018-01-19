var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    "utils": "./src/common/utils/index.js",
    "users": "./src/pages/users.js",
    "datasource": "./src/pages/datasource.js"
  },
  output: {
    path: path.resolve(__dirname, "./www/js"),
    publicPath: "/js/",
    filename: "[name].bundle.js",
    library: "[name]",
    libraryTarget:'var'
  },
  externals: {
    "jquery": "jQuery",
    "bootstrap": "bootstrap"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["es2015", "react"]
      }
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  stats: {
    colors: true
  },
  devtool: "source-map"
};
