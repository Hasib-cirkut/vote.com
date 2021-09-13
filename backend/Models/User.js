let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
	username: { type: String, unique: true, required: true },
	email: { type: String, unique: true, required: true },
	password: String,
	displayName: { type: String, default: '' },
	type: { type: String, default: 'basic' }
});

module.exports = mongoose.model('user', userSchema);
