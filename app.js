'use strict';

/* Imports */
var config = require('./config');
var express = require('express');

// Connect to MongoDB here
const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(config.mongoUrl + config.dbName);

// var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session')
// var dustjs = require('adaro');
var app = express();
// var methodOverride = require('method-override');

/* Configure app */
// app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));  // parse application/x-www-form-urlencoded
app.use(bodyParser.json());    // parse application/json
app.use(session({
  secret: 'bisquit',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 40000 }
}))
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'bower_components')));
// app.use(methodOverride(function(req, res) {
//   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//     var method = req.body._method;
//     delete req.body._method;
//     return method;
//   }
// }));

/* Initialize routers here */
var routers = require('./routes/routers');
app.use('/', routers.root);
app.use('/users', routers.users);
app.use('/login', routers.login);
app.use('/plant', routers.plant);
app.use('/img', routers.img);

module.exports = app;
process.title = 'herbarium'
process.env.PORT = config.PORT;
