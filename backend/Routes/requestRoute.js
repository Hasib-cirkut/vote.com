const express = require('express');
const router = express.Router();

const UserModel = require('../Models/User');
const RequestModel = require('../Models/Request');
const VotePostModel = require('../Models/VotePost');
const VoteThreadModel = require('../Models/VoteThread');

router.post('/approve', async (req, res) => {
	try {
		const { id } = req.body;

		//check type and act accordingly

		let request = await RequestModel.findById(id);

		let requestId = request._id;
		let { username, title, desc, type, genre } = request;

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

			console.log('here');

			// 	/// Remove the request using requestId from Request Collection

			await RequestModel.findByIdAndDelete(requestId);

			res.send({
				message: 'Request added to Threads and Deleted from requests'
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
		const { requestId, username } = req.body;

		//Delete the request from request Collection

		let deleted = await RequestModel.findByIdAndDelete(requestId);

		//TODO: Send notification to user

		res.send({
			message: 'deleted'
		});
	} catch (e) {}
});

module.exports = router;
