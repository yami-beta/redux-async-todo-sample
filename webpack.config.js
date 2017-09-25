const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob');
const path = require('path');

let entry = {};
glob.sync('./src/index.js').forEach(function (file) {
  entry[path.basename(file, '.js')] = ['react-hot-loader/patch', file];
});

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    ...plugins,
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ];
}

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1, modules: true } },
          'postcss-loader',
        ],
      }
    ],
  },
  plugins: plugins,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
  },
};
