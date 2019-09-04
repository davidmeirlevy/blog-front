module.exports = {
  port: process.env.PORT || 3000,
  contentService: {
    protocol: process.env.CONTENT_SERVICE_PROTOCOL || 'http',
    url: process.env.CONTENT_SERVICE_URL || 'localhost',
    port: process.env.CONTENT_SERVICE_PORT || 9001,
  },
  authService: {
    protocol: process.env.AUTH_SERVICE_PROTOCOL || 'http',
    url: process.env.AUTH_SERVICE_URL || 'localhost',
    port: process.env.AUTH_SERVICE_PORT || 9000,
  },
  adminPanel: {
    protocol: process.env.ADMIN_PANEL_PROTOCOL || 'http',
    url: process.env.ADMIN_PANEL_PROTOCOL_URL || 'localhost',
    port: process.env.ADMIN_PANEL_PROTOCOL_PORT || 3001,
  },
};
