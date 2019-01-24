const express = require("express");
const router = express.Router();
var Plant = require("../models/plantModel");

//placeholder for database

router.get("/plant", (req, res) => {
  Plant.find({ commonName: "sage" }, (err, plant) => {
    res.json(plant[0]);
  });
});

router.get("/list", (req, res) => {
  Plant.find({}, (err, plants) => {
    res.json(plants);
  });
});

router.get("/random", (req, res) => {
  Plant.find({}, (err, plants) => {
    let rand = Math.round(Math.random());
    res.json(plants[rand]);
  });
});

module.exports = router;
