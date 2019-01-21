const mongoose = require("mongoose");
const config = require("../config/config");
const Plant = require("../plant");

mongoose.connect(config.dbURL);
Plant.collection.drop();

var sage = new mongoose.Schema({
  /********* CLASSIFICATION *********/
  latinName: "Salvia Officinalis",
  commonName: "Sage",
  typeOfPlant: "Herbs",
  habitat: "gravel",
  evergreen: false,

  /********* ASPECT *********/
  description: "Aromatic plant, evergreen if in a hot zone.",
  height: 0.6,
  stem: "woody",

  /********* LEAVES *********/
  leafShape: "oblong",
  leafDescription: "rugose, green on top, hairy and white on the underside",
  leafMargin: "rough",
  leafLength: 2.5,

  /********* FLOWERS, optional *********/
  flowerColour: "violet",
  flowerDescription: "sage flower",
  bloomMonth: ["june"],

  /********* FRUIT, optional *********/
  fruitColour: null,
  fruitDescription: null,
  fruitSize: null, //cm

  /********* USES *********/
  uses: [
    {
      part: "leaves",
      //can be null
      edible: "eat raw",
      //can be null
      medicinalProperties: ["anesthetic", "diuretic"],
      medicinalPreparation: "apply locally or brew in a tea",
      //can be null
      material: null
    }
  ],

  /********* IMAGES *********/
  images: [
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/I/91ZTowZnVSL._SX425_.jpg",
      caption: "An overall view of the sage plant"
    },
    {
      url:
        "https://erboristeriadurga.it/wp-content/uploads/2014/06/salvia-officinalis.jpg",
      caption: "A detail view of the sage leaves"
    },
    {
      url:
        "https://previews.123rf.com/images/splinex/splinex1706/splinex170600016/81490038-salvia-officinalis-sage-also-called-garden-sage-or-common-sage-flower-isolated-.jpg",
      caption: "A detail on the flowers of sage"
    }
  ]
});

Plant.create(sage)
  .then(plant => {
    console.log(`plant created`);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
