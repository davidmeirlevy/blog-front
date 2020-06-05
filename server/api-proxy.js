const proxy = require('http-proxy-middleware')
const { authService, contentService, adminPanel, assetsService, tenant } = require('../config')

/**
 * This function is a temporary thingy because I'm too lazy right now
 * to insert an nginx router to the whole application.
 * when the nginx router will be added - this file can be removed.
 * @param app: Express.Application
 */
module.exports = function apiProxy (app) {

  function getProxy (target) {
    return proxy({
      target,
      changeOrigin: true,
      headers: {
        tenant
      }
    })
  }

  app.use([
      '/api/signin',
      '/api/signup',
      '/api/token',
      '/api/me',
      '/api/users',
      '/api/verification'
    ], getProxy(`${authService.protocol}://${authService.url}:${authService.port}`))

  app.use([
    '/api/categories',
    '/api/posts',
    '/api/menus',
    '/api/tags',
    '/api/configurations'
  ], getProxy(`${contentService.protocol}://${contentService.url}:${contentService.port}`))

  app.use([
    '/api/assets',
    '/api/storage',
  ], getProxy(`${assetsService.protocol}://${assetsService.url}:${assetsService.port}`))

  app.use('/gp-admin', getProxy(`${adminPanel.protocol}://${adminPanel.url}:${adminPanel.port}`))
}
