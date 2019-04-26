//modules import
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);


//constants for server
const app = express();
//try to import the config, on dev there is none
var config = {};
try {
  config = require("./config/config");
} catch (e) {
  console.log(e)
}

//setting up mongoose
mongoose.connect(process.env.dbURL || config.dbURL, {
  auth: {
    user: process.env.uname || config.uname,
    password: process.env.pword || config.pword
  },
  useNewUrlParser: true,
  useFindAndModify: false
});
//Using default promises
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//cookie of 4h
app.use(
  session({
    secret: process.env.sessionSecret || config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 1000 * 60 * 60 * 4 }
  })
);




const plantRouter = require("./router/plantRouter");
const adminRouter = require("./router/adminRouter");
app.use("/api/plant", plantRouter);
app.use("/api/admin", adminRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve('dist')));
  app.use(express.static(path.resolve('public')));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
  });
}

let port = process.env.PORT || 5000;

app.listen(port);
console.log(`Server running on port ${port}!`)