const express = require('express');
const router = express.Router();

const UserModel = require('../Models/User');
const RequestModel = require('../Models/Request');

const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
	try {
		const { username, password } = req.body;

		let oldUser = await UserModel.findOne({ username });

		console.log(oldUser);

		if (oldUser && oldUser.password === password) {
			//user found

			//create a jwt token for this user

			const token = jwt.sign({ user_id: oldUser._id }, process.env.JWT_TOKEN, {
				expiresIn: '2h'
			});

			return res.status(200).send({
				user: oldUser,
				token
			});
		}
	} catch (err) {
		res.status(403).send({
			message: 'User not found.'
		});
	}
});

router.post('/register', async (req, res) => {
	try {
		const { username, email, password, displayName, type } = req.body;

		let user = new UserModel({
			username,
			email,
			password,
			displayName,
			type
		});

		let savedUser = await user.save();

		res.send({
			message: 'useradded'
		});
	} catch (e) {
		if (e.code === 11000) {
			res.send({
				message: 'duplicate'
			});
		}
	}
});

router.post('/request', async (req, res) => {
	try {
		const { threadId, username, title, desc, type, genre } = req.body;

		let request = new RequestModel({
			threadId,
			username,
			title,
			desc,
			genre,
			type
		});

		let requestObj = await request.save();

		res.send({
			message: `${type} requested`
		});
	} catch (e) {
		console.error(e);
	}
});

module.exports = router;
