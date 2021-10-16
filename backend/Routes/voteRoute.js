const express = require('express');
const router = express.Router();

const VoteThreadModel = require('../Models/VoteThread');
const VotePostModel = require('../Models/VotePost');

const auth = require('../middleware/auth.js');


router.get('/', async (req, res) => {


	const slug = req.query.slug;

	try {

		/* return all vote posts associated with the provided threadId */
		let res = await VotePostModel.find({
			threadId: slug
		})

		res.send(res)

	} catch (e) {
		res.send({
			code: "content!found",
			message: "Content Not Found."
		})
	}
})

router.post('/like', async (req, res) => {
	try {
		const {
			id,
			state
		} = req.body;

		if (state === 'inc') VotePostModel.findOneAndUpdate({
			_id: id
		}, {
			$inc: {
				votes: 1
			}
		}).exec();
		else if (state === 'dec') VotePostModel.findOneAndUpdate({
			_id: id
		}, {
			$inc: {
				votes: -1
			}
		}).exec();

		res.send(`vote ${state === 'inc' ? 'added' : 'subtracted'}`);
	} catch (e) {}
});

module.exports = router;