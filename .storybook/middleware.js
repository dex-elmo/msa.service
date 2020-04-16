const configureMiddleware = require('../config/configureMiddleware')
const proxy = require('http-proxy-middleware')

module.exports = configureMiddleware(router => {
  //
  router.use('/api/echo', proxy({
    target: 'http://localhost:28080',
    pathRewrite: {
      '/api/echo': '',
    },
    secure: false,
    crossOrigin: true,
  }))
})
