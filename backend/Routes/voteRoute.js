const express = require('express');
const router = express.Router();

const VoteThreadModel = require('../Models/VoteThread');
const VotePostModel = require('../Models/VotePost');

router.post('/addThread', async (req, res) => {
	try {
		const { username, title, genre, desc } = req.body;

		let votePost = new VoteThreadModel({
			username,
			title,
			genre,
			desc
		});

		let savedPost = await votePost.save();

		res.send({
			message: 'vote thread added'
		});
	} catch (e) {}
});

router.post('/like', async (req, res) => {
	try {
		const { id, state } = req.body;

		if (state === 'inc') VotePostModel.findOneAndUpdate({ _id: id }, { $inc: { votes: 1 } }).exec();
		else if (state === 'dec') VotePostModel.findOneAndUpdate({ _id: id }, { $inc: { votes: -1 } }).exec();

		res.send(`vote ${state === 'inc' ? 'added' : 'subtracted'}`);
	} catch (e) {}
});

module.exports = router;
