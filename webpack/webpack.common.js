const path = require('path')
const DotEnv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@components': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './index.html'),
      inject: true,
    }),
    new DotEnv({
      path: path.resolve(__dirname, '..', '.env'),
    }),
  ],
  stats: 'errors-only',
}
