const localhost = 'localhost'
module.exports = {
  port: process.env.PORT || 3000,
  tenant: process.env.BASIC_TENANT || '0',
  applicationUrl: process.env.APPLICATION_URL,
  contentService: {
    protocol: process.env.CONTENT_SERVICE_PROTOCOL || 'http',
    url: process.env.CONTENT_SERVICE_URL || localhost,
    port: process.env.CONTENT_SERVICE_PORT || 9001,
  },
  authService: {
    protocol: process.env.AUTH_SERVICE_PROTOCOL || 'http',
    url: process.env.AUTH_SERVICE_URL || localhost,
    port: process.env.AUTH_SERVICE_PORT || 9000,
  },
  assetsService: {
    protocol: process.env.ASSETS_SERVICE_PROTOCOL || 'http',
    url: process.env.ASSETS_SERVICE_URL || localhost,
    port: process.env.ASSETS_SERVICE_PORT || 9003,
  },
  adminPanel: {
    protocol: process.env.ADMIN_PANEL_PROTOCOL || 'http',
    url: process.env.ADMIN_PANEL_URL || localhost,
    port: process.env.ADMIN_PANEL_PORT || 3001,
  },
}
