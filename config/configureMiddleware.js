const proxy = require('http-proxy-middleware')

function configureMiddleware (callback) {
  //
  return (router) => {
    if (typeof callback === 'function') {
      callback(router)
    }

    router.use('/api/**', proxy({
      target: 'http://34.84.45.31',
      secure: false,
      crossOrigin: true,
    }))
  }
}

module.exports = configureMiddleware
