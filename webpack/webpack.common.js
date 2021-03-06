const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      components: path.resolve(__dirname, '..', './src/components'),
      assets: path.resolve(__dirname, '..', './src/assets'),
      hooks: path.resolve(__dirname, '..', './src/hooks'),
      styles: path.resolve(__dirname, '..', './src/styles'),
      api: path.resolve(__dirname, '..', './src/api'),
      data: path.resolve(__dirname, '..', './src/data'),
      App: path.resolve(__dirname, '..', './src/App'),
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
      // webpack 5 имеет собственные loaders для работы с большинством расширений картинок
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
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
      title: 'Portfolio',
      favicon: './src/assets/favicon.svg',
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
};
