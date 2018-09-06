/** @module users/router */
'use strict';

/* Imports */
const express = require('express');
const middleware = require('../middleware');
const mongoose = require('mongoose');

require ('../../models/User');

/* Create router */
const router = express.Router();
const User = mongoose.model('User');


/* Supported methods */
router.all('/', middleware.supportedMethods('GET, POST, OPTIONS'));

/* Get all users */
router.get('/', function(req, res, next) {
	User.find({}, function(err, found){
		if(err){
			res.sendStatus(404);
		}
		else{
			res.send(found);
		}
	})
});

/* get one user */
router.get('/:id', function(req, res){
	User.findById(req.params.id, function(err, found){
		if(err){
			res.sendStatus(404);
		}
		else{

		}
	})
});

// /* adds one user */
router.post('/', function(req, res){
	let newUser = new User({
		name: req.body.name,
		username: req.body.username,
		pass: req.body.pass
	});

	newUser.save(function(err, saved){
		if(err){
			console.log(err);
			res.sendStatus(403);
			return;
		}
		res.status(201).json(saved);
	})
});



/* Export router for root */
module.exports = router;
