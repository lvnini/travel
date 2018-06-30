module.exports = {
  // lintOnSave: false,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite:{
          '^/api': '/mock'
        }
      }
    }
  }
 }