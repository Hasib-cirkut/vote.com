const jwt = require('jsonwebtoken');

const config = process.env;

function verify(req, res, next) {
	const token = req.body.token || req.query.token || req.headers['x-access-token'];

	console.log(token);

	if (!token) {
		//if token is unavailable, send user a 403

		return res.status(403).send({
			message: 'An auth token is required'
		});
	}

	try {
		const decoded = jwt.verify(token, config.JWT_TOKEN);
		req.user = decoded;
	} catch (err) {
		return res.status(401).send({
			message: 'Invalid Token.'
		});
	}

	return next();
}

module.exports = verify;
