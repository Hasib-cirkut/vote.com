const express = require('express');
const router = express.Router();

const ThreadModel = require('../Models/VoteThread');

const auth = require('../middleware/auth.js');

/*
    GET all the threads to show on the main section of the app
*/
router.get('/', async (req, res) => {
	let response = await ThreadModel.find({});

	res.send(response);
});

module.exports = router;
