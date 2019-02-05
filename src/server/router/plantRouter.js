const express = require("express");
const router = express.Router();
var Plant = require("../models/plantModel");

//placeholder for database

router.get("/plant/:name", (req, res) => {
  Plant.find(
    { commonName: new RegExp("^" + req.params.name + "$", "i") },
    (err, plant) => {
      console.log(plant);
      res.json(plant);
    }
  );
});

router.get("/category/:category/:name", (req, res) => {
  Plant.find(
    { [req.params.category]: new RegExp("^" + req.params.name + "$", "i") },
    (err, plant) => {
      console.log(err);
      res.json(plant);
    }
  );
});

router.get("/list", (req, res) => {
  Plant.find({}, (err, plants) => {
    res.json(plants);
  });
});

router.get("/random", (req, res) => {
  Plant.find({}, (err, plants) => {
    res.json([plants[Math.floor(Math.random() * plants.length)]]);
  });
});

module.exports = router;
