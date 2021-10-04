const express = require('express');
const router = express.Router();

const RequestModel = require('../Models/Request');

const auth = require('../middleware/auth.js');

router.get('/threads', async (req, res) => {
	let response = await RequestModel.find({ type: 'thread' });

	res.send(response);

	console.log(typeof response);
});

module.exports = router;
