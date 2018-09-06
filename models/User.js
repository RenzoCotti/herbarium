'use strict';
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const bcrypt = require('bcrypt');
const saltRounds = 10;

//id auto added by mongoose
const UserSchema = exports.UserSchema = new mongoose.Schema({
	//name of the user, String
	name : {type: String, required: true},
	//username, used for login
	username : {type: String, required: true, unique: true},
	//password of the user, hashed with bcrypt
	pass : {type: String, required: true},
});

UserSchema.pre('save', function (next) {
	let that = this;
	if (!(that.name)){
		that.name = "Not specified.";
	}
	bcrypt.hash(that.pass, saltRounds, function(err, hash) {
  // Store hash in your password DB.
	that.pass = hash;
	next();
	});

});

//register model for schema
mongoose.model('User', UserSchema);
