const path = require('path');
module.exports = {
  entry: './browser/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map'
};
