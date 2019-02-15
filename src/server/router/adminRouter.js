const express = require("express");
const router = express.Router();
const Admin = require("../models/adminModel");

router.post("/new", (req, res) => {
  let admin = new Admin(req.body);

  //we already have an admin
  Admin.find({}, (err, list) => {
    console.log(res);
    if (list.length > 1) res.sendStatus(403);
  });

  Admin.save(admin, (err, saved) => {
    console.log(saved);
    res.sendStatus(200);
  });
});

//deletes all instances of admin
router.delete("/delete", (req, res) => {
  Admin.remove({}, (err, deleted) => {
    console.log(deleted);
  });
});

router.post("/login", (req, res) => {
  let uname = req.body.username;
  let pw = req.body.password;

  Admin.find({ username: uname }, (err, list) => {
    console.log();
  });
});

module.exports = router;
