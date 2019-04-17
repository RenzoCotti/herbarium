//modules import
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);


//constants for server
const app = express();
const config = require("./config");
// const creds = {
//   key: fs.readFileSync(__dirname + "/config/certs/server.key"),
//   cert: fs.readFileSync(__dirname + "/config/certs/server.crt")
// };

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

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
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { secure: true, maxAge: 1000 * 60 * 60 * 4 }
  })
);

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, "../../dist")));
//cache? to look into in the future, for images
// app.use(express.static(path.join(__dirname, 'public'), {
//   maxAge: cacheTime
//  }))

app.use(bodyParser.json());

const plantRouter = require("./router/plantRouter");
const adminRouter = require("./router/adminRouter");



app.use("/api/plant", plantRouter);
app.use("/api/admin", adminRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve('dist')));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
  });
}



// app.use(express.static(__dirname + '../../dist'));

// app.use(function (req, res) {
//   res.sendFile(__dirname + '../../index.html')
// });

let port = process.env.PORT || 5000;

app.listen(port);
console.log(`Server running on port ${port}!`)