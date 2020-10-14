const { createProxyMiddleware: proxy } = require('http-proxy-middleware')
const fetch = require('node-fetch')
const { authService, contentService, adminPanel, assetsService, tenant, draftsService } = require('../config')

function getProxy (target) {
	return proxy({
		target,
		changeOrigin: true,
		headers: {
			tenant
		},
		onProxyReq (proxyReq, req) {
			proxyReq.setHeader('user', req.user || '')
		}
	})
}

function getProxyTarget (service) {
	return `${service.protocol}://${service.url}:${service.port}`
}

function useProxy (app, service) {
	app.use(service.proxies, getProxy(getProxyTarget(service)))
}

/**
 * This function is a temporary thingy because I'm too lazy right now
 * to insert an nginx router to the whole application.
 * when the nginx router will be added - this file can be removed.
 * @param app: Express.Application
 */
module.exports = function apiProxy (app) {

	const meUrl = getProxyTarget(authService) + '/api/me'

	app.use([
		...contentService.proxies,
		...assetsService.proxies,
		...draftsService.proxies
	], (req, res, next) => {
		if (!(req.headers.authorization || req.headers.cookie && req.headers.cookie.includes('token='))) {
			next()
			return
		}
		fetch(meUrl, {
			headers: {
				'Content-Type': 'application/json',
				cookie: req.headers.cookie,
				authorization: req.headers.authorization
			}
		})
			.then(response => {
				const setCookie = response.headers.raw()['set-cookie']
				if (setCookie) {
					res.set('set-cookie', setCookie)
				}
				if (response.status === 200) {
					return response.text()
				}
			})
			.then(user => {
				req.user = user
				next()
			})
			.catch(() => {
				next()
			})
	})

	useProxy(app, authService)
	useProxy(app, contentService)
	useProxy(app, draftsService)
	useProxy(app, assetsService)
	useProxy(app, adminPanel)
}
