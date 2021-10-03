let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let VotePostSchema = new Schema({
	threadId: { type: Schema.Types.ObjectId },
	username: { type: String, required: true },
	title: { type: String, required: true },
	imageUrl: { type: String },
	desc: { type: String },
	votes: { type: Number, default: 0 }
});

module.exports = mongoose.model('votePost', VotePostSchema);
