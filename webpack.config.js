const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'production',
  devtool: 'source-map'
};
