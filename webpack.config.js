module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loader: 'babel-loader'}
    ]
  }
}
