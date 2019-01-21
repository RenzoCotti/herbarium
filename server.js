//modules import
const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");
const mongoose = require("mongoose");

//constants for server
const app = express();
const config = require("./config/config");
const creds = {
  key: fs.readFileSync(__dirname + "/config/certs/server.key"),
  cert: fs.readFileSync(__dirname + "/config/certs/server.crt")
};

//setting up mongoose
mongoose.connect(config.dbURL);
//Using default promises
mongoose.Promise = global.Promise;
//database connection
var db = mongoose.connection;

//placeholder for database
const plants = require("./content");

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/plant", (req, res) => {
  res.json(plants[3]);
});

app.get("/plants", (req, res) => {
  res.json(plants);
});

app.get("/random", (req, res) => {
  res.json(plants[Math.random() * plants.length]);
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

var httpsServer = https.createServer(creds, app);

httpsServer.listen(5000);
