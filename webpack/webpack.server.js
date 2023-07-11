const path = require('path');
const moduleFederationPlugin = require('./module-federation');
const CISP = require("../babelPlugins/changeImgSrcPrefics/src");

module.exports = {
  name: 'server',
  target: 'node',
  externals: {
    express: 'express',
  },
  mode: 'production',
  devtool: false,
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, '../src/server/index')],
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs-module',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
          plugins: [CISP],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    ...moduleFederationPlugin.server
  ],
  stats: {
    colors: true,
  },
};
