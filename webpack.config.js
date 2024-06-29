const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    index: './index.js'
  },
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // Add any other necessary plugins or options
          }
        }
      }
    ]
  }
};
