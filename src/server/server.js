//modules import
const express = require("express");
const path = require("path");
const http = require("http");
const fs = require("fs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//constants for server
const app = express();
const config = require("./config/config");
const creds = {
  key: fs.readFileSync(__dirname + "/config/certs/server.key"),
  cert: fs.readFileSync(__dirname + "/config/certs/server.crt")
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//setting up mongoose
mongoose.connect(config.dbURL, { useNewUrlParser: true });
//Using default promises
mongoose.Promise = global.Promise;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
//cache? to look into in the future, for images
// app.use(express.static(path.join(__dirname, 'public'), {
//   maxAge: cacheTime
//  }))

app.use(bodyParser.json());

const plantRouter = require("./router/plantRouter");

app.use("/api", plantRouter);

var httpServer = http.createServer(app);

httpServer.listen(8080);
