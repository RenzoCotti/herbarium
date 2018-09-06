/** @module img/router */
'use strict';

/* Imports */
const express = require('express');
const middleware = require('../middleware');
const mongoose = require('mongoose');
const fs	= require('fs');
const formidable = require('formidable');
const path = require('path');



/* Create router */
const router = express.Router();


/* Supported methods */
router.all('/', middleware.supportedMethods('GET, POST, OPTIONS'));

// /* adds one user */
router.post('/', function(req, res){

	var form = new formidable.IncomingForm();
	form.encoding = 'utf-8';
	form.uploadDir = __dirname;// + "/img/";
	form.keepExtensions = true;

	form.parse(req, function(err, fields, files) {
		if(err) {
			console.log(err);
			res.end();
		} else {
			console.log(files.upload);
			//renames the file and moves it into the proper folder
			let fileName = files.upload.name;
			console.log(__dirname+ "../../img/" +fileName);
			fs.rename(files.upload.path, __dirname+ "/../../img/" +fileName);

			//placeholder
			res.status(201).send("file "+fileName+" uploaded.");
		}
	});

});

router.get('/', function(req, res){
	res.sendFile(path.resolve('newimg.html'));
});



/* Export router for root */
module.exports = router;
