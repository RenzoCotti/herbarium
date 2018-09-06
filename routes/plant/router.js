/** @module plant/router */
'use strict';

/* Imports */
const express = require('express');
const middleware = require('../middleware');
const mongoose = require('mongoose');
const path = require('path');

require ('../../models/Plant');
require ('../../models/User');

/* Create router */
const router = express.Router();
const User = mongoose.model('User');
const Plant = mongoose.model('Plant');

/* Supported methods */
router.all('/', middleware.supportedMethods('GET, POST, OPTIONS'));

/* Get all Plants */
router.get('/', function(req, res, next) {
	Plant.find({}, function(err, found){
		if(err){
			res.sendStatus(404);
		}
		else{
			res.send(found);
		}
	})
});

router.get('/new', function (req, res) {
	if(req.session.login){
		res.sendFile(path.resolve('newplant.html'));
	} else {
		res.status(403).send("You need to login to add new plants.");
	}
})

// /* adds one user */

// router.post('/', function(req, res){
// 	if(req.session.login){
// 		let newPlant = new Plant({
// 			title: req.body.title,
// 			content: req.body.content
// 		});
//
// 		newPlant.save(function(err, saved){
// 			if(err){
// 				console.log(err);
// 				res.sendStatus(403);
// 				return;
// 			}
// 			res.status(201).json(saved);
// 		})
// 	} else {
// 		res.status(403).send("You need to login to post new Plants.");
// 	}
//
// });



/* Export router for root */
module.exports = router;
