const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/index.js',
    ]
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'app.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2017'],
            plugins: [
              [
                'transform-react-jsx',
                { pragma: 'h' },
              ],
              'transform-class-properties',
              'transform-object-rest-spread',
            ],
          },
        }
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  devServer: {
    inline: true,
    port: 9001,
    compress: true,
    stats: { colors: true },
  },
}
