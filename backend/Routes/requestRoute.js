const express = require('express');
const router = express.Router();
const multer = require('multer');

const Auth = require('../middleware/auth');

const UserModel = require('../Models/User');
const RequestModel = require('../Models/Request');
const VotePostModel = require('../Models/VotePost');
const VoteThreadModel = require('../Models/VoteThread');

const cloudinary = require('cloudinary');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public');
	},
	filename: (req, file, cb) => {
		cb(null, 'image.jpg');
	}
});

const upload = multer({
	storage: storage
}).single('image');

router.post('/thread', Auth, async (req, res) => {
	const {
		username,
		title,
		desc,
		token
	} = req.body;
	const type = 'thread';

	console.log(req.body);

	try {
		const threadReq = new RequestModel({
			username,
			title,
			desc,
			genre: 'Misc',
			type
		});

		let response = await threadReq.save();

		if (response) {
			res.status(200).send({
				message: 'Thread Request Accepted.',
				code: 'accepted'
			});
		}
	} catch (e) {
		console.log(e);

		res.status(502).send({
			message: 'Some problem in database. Try again Later',
			code: 'denied'
		});
	}
});

router.post('/votePost', async (req, res) => {
	upload(req, res, (err) => {
		if (err) {
			res.sendStatus(500);
		}

		cloudinary.uploader.upload('./public/image.jpg', function (error, result) {
			if (error) {
				console.error(error);
				res.status(500).send({
					message: 'There was a problem while uploading the image. Please Try again Later.'
				});
			} else {
				///Extract the url from result object

				const imageUrl = result.url;
				///create a database entry as a request model

				const votePost = new RequestModel({});
				///delete the image from public folder
			}
		});
	});
});

router.post('/approve', async (req, res) => {
	try {
		const {
			id
		} = req.body;

		//check type and act accordingly

		let request = await RequestModel.findById(id);

		let requestId = request._id;
		let {
			username,
			title,
			desc,
			type,
			genre
		} = request;

		let threadId = request.threadId;

		console.log(request);

		///check the type and act accordingly

		if (type === 'thread') {
			/// add the thread to VoteThread Collection

			let newThread = new VoteThreadModel({
				username,
				title,
				genre,
				desc
			});

			newThread = await newThread.save();

			// 	/// Remove the request using requestId from Request Collection

			await RequestModel.findByIdAndDelete(requestId);

			res.send({
				message: 'Request added to Threads and Deleted from requests',
				code: 'approved'
			});
		} else if (type === 'votepost') {
			let newVotePost = new VotePostModel({
				threadId,
				username,
				title,
				desc
			});

			newVotePost = await newVotePost.save();

			await RequestModel.findByIdAndDelete(requestId);

			res.send({
				message: 'Request added to VotePosts and Deleted from requests'
			});
		}
	} catch (e) {}
});

router.post('/deny', async (req, res) => {
	try {
		const {
			id,
			username
		} = req.body;

		console.log(req.body);


		//Delete the request from request Collection

		let deleted = await RequestModel.findByIdAndDelete(id);

		//TODO: Send notification to user

		res.send({
			message: 'The Post is deleted',
			code: 'deleted'
		});
	} catch (e) {
		res.send({
			error: e,
			code: "could!del",
			message: "Some Problem Occured while deleteting."
		})
	}
});

module.exports = router;