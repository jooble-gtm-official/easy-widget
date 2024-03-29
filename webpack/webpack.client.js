const path = require('path');
const moduleFederationPlugin = require('./module-federation');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const paths = require('../config/paths');
const CISP = require("../babelPlugins/changeImgSrcPrefics/src");

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'production',
  devtool: false,
  entry: {
    clientAppEntrypoint: [
      '@babel/polyfill',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/easy-widget/client/',
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
        oneOf: [
          {
            test: /\.css$/,
            include: /node_modules/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: false
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [require('autoprefixer')],
                },
              },
              { loader: 'resolve-url-loader' },
            ],
          },
        ],
      }
    ],
  },
  plugins: [
    ...moduleFederationPlugin.client,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.publicAssetsDir,
          to: paths.appDistClient
        }
      ]
    }),
  ],
};
