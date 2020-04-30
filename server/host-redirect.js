function setHostRedirect (app, applicationUrl) {
  const { host, protocol } = new URL(applicationUrl)

  function hostRedirect (req, res, next) {
    const requestHost = req.header('host')
    const requestProtocol = req.header('protocol')

    if (requestHost === host && requestProtocol === protocol) {
      next()
    } else {
      res.redirect(301, new URL(req.path, applicationUrl))
    }
  }

  app.use(hostRedirect)
}

module.exports = function (app) {
  const { applicationUrl } = require('../config')
  if (!applicationUrl) {
    return
  }
  setHostRedirect(app, applicationUrl)
}
