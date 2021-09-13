let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NotificationSchema = new Schema({
	username: { type: String, required: true },
	message: { type: String, required: true }, // approved / denied
	type: { type: String, required: true }, // thread / votePost

	threadId: { type: String, required: false }, // applicable for approved and votePost Only
	viewed: { type: Boolean, default: false } // notification is seen by user or not
});

module.exports = mongoose.model('notification', NotificationSchema);
