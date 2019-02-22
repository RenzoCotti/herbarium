const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const Admin = require("../models/adminModel");

router.post("/new", (req, res) => {
  let admin = new Admin(req.body);

  //we already have an admin
  Admin.find({}, (err, list) => {
    if (list.length > 1) return res.sendStatus(403);
    else {
      admin.save(admin, (err, saved) => {
        return res.sendStatus(200);
      });
    }
  });
});

//deletes all instances of admin
router.delete("/delete", (req, res) => {
  Admin.deleteMany({}, (err, deleted) => {
    return res.sendStatus(200);
  });
});

router.get("/list", (req, res) => {
  Admin.find({}, (err, list) => {
    return res.send(list);
  });
});

//logins the admin
//to setup with tokens
router.post("/login", (req, res) => {
  if (req.session.login) {
    //already logged in
    res.status(205).send("Already logged in, dummy");
    return;
  }

  let uname = req.body.username;
  let pw = req.body.password;

  Admin.find({ username: uname }, (err, list) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    } else if (list.length === 0) return res.sendStatus(404);
    else {
      //impossible than there are more than 1 users
      bcrypt.compare(pw, list[0].password, function(err, cmp) {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        } else if (cmp) {
          //same password
          req.session.login = true;
          // req.session.uname = found[0].username;
          return res.sendStatus(200);
        } else {
          return res.sendStatus(403);
        }
      });
    }
  });
});

router.get("/status", (req, res) => {
  res.send({ login: req.session.login });
});

module.exports = router;
