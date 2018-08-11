module.export = {
	accessProtectedResources: accessProtectedResources,
}

function accessProtectedResources(req, res) {
	res.send('You have gained access to the restricted area');
}