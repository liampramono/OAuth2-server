module.exports = (router, app, protectedApiRoutesMethods) => {
	router.post('/enter', app.oauth.authorise(), protectedApiRoutesMethods.accessProtectedResources);

	return router;
}