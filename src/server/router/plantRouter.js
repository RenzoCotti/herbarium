const express = require("express");
const router = express.Router();
var Plant = require("../models/plantModel");

//placeholder for database
const plants = require("../utility/content");

router.get("/plant", (req, res) => {
  Plant.find({ commonName: "sage" }, (err, plant) => {
    res.json(plant);
  });
});

router.get("/list", (req, res) => {
  res.json(plants);
});

router.get("/random", (req, res) => {
  res.json(plants[Math.random() * plants.length]);
});

module.exports = router;
