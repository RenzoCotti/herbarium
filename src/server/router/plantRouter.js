const express = require("express");
const router = express.Router();
const Plant = require("../models/plantModel");

//placeholder for database

// router.get("/plant/:name", (req, res) => {
//   Plant.find(
//     { commonName: new RegExp("^" + req.params.name + "$", "i") },
//     (err, plant) => {
//       res.json(plant);
//     }
//   );
// });

router.get("/search/:string", (req, res) => {
  let arr = req.params.string.toLowerCase().split(" ");
  let query = [];

  for (let str of arr) {
    query.push({ keywords: str });
  }

  Plant.find({ $or: query }, (err, list) => {
    res.json({ list: list, tokens: arr });
  });
});

router.get("/category/:category/:name", (req, res) => {
  Plant.find(
    { [req.params.category]: new RegExp("^" + req.params.name + "$", "i") },
    (err, plant) => {
      res.json(plant);
    }
  );
});

router.post("/new", (req, res) => {
  if (!req.session.login) {
    //not logged in, can't create
    res.status(403);
    return;
  }

  let plant = new Plant(req.body);

  plant.save((err, saved) => {
    console.log(err);
    return res.send(saved);
  });
});
router.get("/all", (req, res) => {
  Plant.find({}, (err, plants) => {
    res.json(plants);
  });
});

router.delete("/delete/:id", (req, res) => {
  if (!req.session.login) {
    //already logged in
    console.log("here");
    res.status(403);
    return;
  }

  Plant.findByIdAndRemove(req.params.id, (err, deleted) => {
    console.log(err);
    console.log(deleted);
    res.json(deleted);
  });
});

router.get("/all", (req, res) => {
  Plant.find({}, (err, plants) => {
    res.json(plants);
  });
});

router.get("/random", (req, res) => {
  Plant.find({}, (err, plants) => {
    let plant = plants[Math.floor(Math.random() * plants.length)];
    res.json({ list: [plant], tokens: [] });
  });
});

module.exports = router;
