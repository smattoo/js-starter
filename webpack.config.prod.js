import path from 'path';
import webpack from 'webpack';


export default {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/client/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
