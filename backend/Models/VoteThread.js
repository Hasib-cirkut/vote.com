let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let VoteThreadSchema = new Schema({
	username: { type: String, required: true },
	title: { type: String, required: true },
	genre: { type: String, required: true },
	desc: { type: String, required: true },
	votes: { type: Number, default: 0 }
});

module.exports = mongoose.model('voteThread', VoteThreadSchema);
