const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: '../dist',// 打包项目输出目录
  // 使用运行时编译器的 Vue 构建版本
  //runtimeCompiler: true,
  // 开启生产环境SourceMap，设为false打包时不生成.map文件
  //productionSourceMap: false,
  // 关闭ESLint，如果你需要使用ESLint，把lintOnSave设为true即可
  //lintOnSave: false,
  devServer: {
    port: 8080, // 端口号
    host: '0.0.0.0',
    hot: true,
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    },  // 配置多个代理
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  }
}