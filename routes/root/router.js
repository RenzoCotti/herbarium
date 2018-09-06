/** @module root/router */
'use strict';

/* Imports */
const express = require('express');
const middleware = require('../middleware');
const path = require('path');

/* Create router */
const router = express.Router();

/* Supported methods */
router.all('/', middleware.supportedMethods('GET, OPTIONS'));

/* Home */
router.get('/', function(req, res, next) {
  if (req.accepts('text/html')) {
		if(req.session.uname){
			res.status(200).send("Logged in as: "+req.session.uname);
		} else {
			res.sendFile(path.resolve('index.html'));
		}
  }
  else {
    res.sendStatus(404);
  }
});

/* Export router for root */
module.exports = router;
