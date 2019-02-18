const express = require("express");
const router = express.Router();
const Admin = require("../models/adminModel");

router.post("/new", (req, res) => {
  let admin = new Admin(req.body);

  //we already have an admin
  Admin.find({}, (err, list) => {
    console.log(res);
    if (list.length > 1) res.sendStatus(403);
    else {
      admin.save(admin, (err, saved) => {
        console.log(saved);
        res.sendStatus(200);
      });
    }
  });
});

//deletes all instances of admin
router.delete("/delete", (req, res) => {
  Admin.deleteMany({}, (err, deleted) => {
    res.sendStatus(200);
  });
});

//logins the admin
//to setup with tokens
router.post("/login", (req, res) => {
  let uname = req.body.username;
  let pw = req.body.password;

  Admin.find({ username: uname }, (err, list) => {
    if (pw === list[0].password) res.sendStatus(200);
    else res.sendStatus(403);
  });
});

router.get("/list", (req, res) => {
  Admin.find({}, (err, list) => {
    res.send(list);
  });
});

module.exports = router;
