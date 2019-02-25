const express = require("express");
const router = express.Router();
const Plant = require("../models/plantModel");

//general search over the keywords of each plant
router.get("/search/:string", (req, res) => {
  let arr = req.params.string.toLowerCase().split(" ");
  let query = [];

  for (let str of arr) {
    query.push({ keywords: str });
  }

  Plant.find({ $or: query }, (err, list) => {
    if (err) return console.log(err);
    console.log(
      "Query '" + req.params.string + "' gave " + list.length + " result(s)."
    );
    return res.json({ list: list, tokens: arr });
  });
});

//retrieves all plant in a category
router.get("/category/:category/:name", (req, res) => {
  Plant.find(
    { [req.params.category]: new RegExp("^" + req.params.name + "$", "i") },
    (err, plant) => {
      if (err) return console.log(err);
      console.log("Retrieved " + req.params.category + " - " + req.params.name);
      return res.json(plant);
    }
  );
});

//creates a new plant
router.post("/new", (req, res) => {
  if (!req.session.login) {
    //not logged in, can't create
    res.status(403);
    return;
  }

  let plant = new Plant(req.body);

  plant.save((err, saved) => {
    if (err) return console.log(err);
    console.log("Saved " + saved.commonName);
    return res.send(saved);
  });
});

//deletes a specific plant
router.delete("/delete/:id", (req, res) => {
  if (!req.session.login) {
    //user isn't logged in
    console.log("Unauthorized delete");
    res.status(403);
    return;
  }

  Plant.findByIdAndRemove(req.params.id, (err, deleted) => {
    if (err) return console.log(err);
    console.log("Deleted " + deleted.commonName);
    return res.sendStatus(200);
  });
});

// Retrieves all the plants in the database
router.get("/all", (req, res) => {
  Plant.find({}, (err, plants) => {
    if (err) return console.log(err);
    console.log("Fetching all plants");
    return res.json(plants);
  });
});

//retrieves a random plant from the database
router.get("/random", (req, res) => {
  Plant.find({}, (err, plants) => {
    if (err) return console.log(err);
    console.log("Retrieved a random plant");
    let plant = plants[Math.floor(Math.random() * plants.length)];
    return res.json({ list: [plant], tokens: [] });
  });
});

module.exports = router;
