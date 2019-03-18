//modules import
const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");

//constants for server
const app = express();
const config = require("./config/config");
const creds = {
  key: fs.readFileSync(__dirname + "/config/certs/server.key"),
  cert: fs.readFileSync(__dirname + "/config/certs/server.crt")
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//setting up mongoose
mongoose.connect(config.dbURL, {
  auth: {
    user: config.uname,
    password: config.pword
  },
  useNewUrlParser: true
});
//Using default promises
mongoose.Promise = global.Promise;

//cookie of 5 min
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 1000 * 60 * 30 }
  })
);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
//cache? to look into in the future, for images
// app.use(express.static(path.join(__dirname, 'public'), {
//   maxAge: cacheTime
//  }))

app.use(bodyParser.json());

const plantRouter = require("./router/plantRouter");
const adminRouter = require("./router/adminRouter");

app.use("/api/plant", plantRouter);
app.use("/api/admin", adminRouter);

var httpsServer = https.createServer(creds, app);

httpsServer.listen(443);
