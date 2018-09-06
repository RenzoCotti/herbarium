/** @module users/router */
'use strict';

/* Imports */
const express = require('express');
const middleware = require('../middleware');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


require ('../../models/User');

/* Create router */
const router = express.Router();
const User = mongoose.model('User');


/* Supported methods */
router.all('/', middleware.supportedMethods('GET, POST, OPTIONS'));

// /* adds one user */
router.post('/', function(req, res){
	if(req.session.login){
		//already logged in
		res.status(205).send("Already logged in, dummy");
		return;
	}

	let uname = req.body.uname;
	let pass = req.body.pass;


	User.find({username: uname}, function(err, found){
		if(err){
			console.log(err);
			res.sendStatus(403);
			return;
		}

		//impossible than there are more than 1 users
		bcrypt.compare(pass, found[0].pass, function(err, cmp) {
			if(err){
				console.log(err);
				res.sendStatus(500);
			} else if(cmp){
				//same password
				req.session.login = true;
				req.session.uname = found[0].username;
				res.sendStatus(200);
			} else {
				res.sendStatus(403);
			}
		});
	})
});

router.get('/', function(req, res){
	if(req.session.login){
		//logged in
		req.session.login = false;
		req.session.uname = undefined;
		res.status(200).send("Logged out successfully");
	} else {
		//trying to logout when not yet logged in
		res.status(403).send("You need to login to be able to log out");
	}
})



/* Export router for root */
module.exports = router;
