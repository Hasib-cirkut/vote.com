const express = require('express');
const router = express.Router();

const UserModel = require('../Models/User');
const RequestModel = require('../Models/Request');

const jwt = require('jsonwebtoken');

const checkExistingUser = require('../middleware/checkExistingUser')

router.post('/login', async (req, res) => {
	try {
		const {
			username,
			password
		} = req.body;

		let oldUser = await UserModel.findOne({
			username
		});

		console.log(oldUser);

		if (oldUser && oldUser.password === password) {
			//user found

			//create a jwt token for this user

			const token = jwt.sign({
				user_id: oldUser._id
			}, process.env.JWT_TOKEN);

			return res.status(200).send({
				user: oldUser,
				token,
				message: 'userfound'
			});
		} else {
			res.send({
				message: 'user!found'
			});
		}
	} catch (err) {
		res.status(403).send({
			message: err
		});
	}
});

router.post('/register', async (req, res) => {
	try {

		const {
			username,
			email,
			password,
			displayName,
			type
		} = req.body;

		let user = new UserModel({
			username,
			email,
			password,
			displayName,
			type
		});

		user.save(function (err) {
			if (err) {
				if (err.name === 'MongoError' && err.code === 11000) {
					// Duplicate username
					return res.status(500).send({
						success: false,
						message: 'User already exist!'
					});
				}

				// Some other error
				return res.status(500).send(err);
			} else {
				res.send({
					success: true,
					code: 'useradded'
				})
			}

		});

	} catch (e) {
		if (e.code === 11000) {
			res.send({
				message: 'duplicate'
			});
		}
	}
});


module.exports = router;