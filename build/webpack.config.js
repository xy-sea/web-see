const path = require('path')
module.exports = {
  entry: './browser/index.js', // 入口, 可以为相对路径, 当然绝对路径也没错
  output: {
    // 输出配置
    path: path.join(__dirname, './dist'), // 输出的目录
    filename: 'bundle.js' // 输出的文件名
  },
  mode: 'production' // 打包的模式, production | development
}
