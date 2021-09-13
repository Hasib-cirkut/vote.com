let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RequestSchema = new Schema({
	threadId: { type: String, required: false },
	username: { type: String, required: true },
	title: { type: String, required: true },
	desc: { type: String },
	genre: { type: String, required: true },
	type: { type: String } // thread / votepost
});

module.exports = mongoose.model('request', RequestSchema);
