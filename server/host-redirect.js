function setHostRedirect (app, applicationUrl) {
  const host = new URL(applicationUrl).host

  function hostRedirect (req, res, next) {
    const requestHost = req.header('host')

    if (requestHost === host) {
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
