// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
module.exports = {
  devServer: {
    proxy: {
      '/getErrorList': {
        target: 'http://localhost:8083/',
        changeOrigin: false, //  target是域名的话，需要这个参数，
        secure: false, //  设置支持https协议的代理,
      },
      '/getmap': {
        target: 'http://localhost:8083/',
        changeOrigin: false,
        secure: false,
      },
      '/getmgetRecordScreenIdp': {
        target: 'http://localhost:8083/',
        changeOrigin: false,
        secure: false,
      },
    },
  },
  configureWebpack: {
<<<<<<< HEAD
    resolve: { extensions: ['.ts', '.tsx', '.json'] },
=======
    resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
>>>>>>> b31aa4780f2f4c9fcf454a342be00fad715283ee
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  },
};
