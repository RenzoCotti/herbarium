const mongoose = require("mongoose");
const config = require("../config/config");
const Plant = require("../models/plantModel");

mongoose.connect(
  config.dbURL,
  { useNewUrlParser: true }
);

Plant.collection.drop();

var sage = new Plant({
  /********* GENERAL INFO *********/
  latinName: "Salvia Officinalis",
  commonName: "Sage",
  typeOfPlant: "bush",
  evergreen: true,
  description: "",
  height: 0.6,
  zone: ["mediterranean"],
  habitat: "gravel",

  /********* STEM *********/
  stemColour: "green",
  stemTexture: "hairy",
  stemDescription: "woody at the base",

  /********* LEAVES *********/
  leafShape: "elliptic",
  leafDescription: "rugose, hairy and green on top, gray on the bottom",
  leafMargin: "ciliate",
  leafVenation: "alternate",
  leafLength: 6.5,

  /********* FLOWERS, optional *********/
  flowerColour: "lavender",
  bloomMonth: ["jun"],

  /********* USES *********/
  uses: [
    {
      part: "leaves",
      edible: "eat raw",
      medicinalProperties: ["antiseptic", "digestive", "relaxant"],
      medicinalPreparation: "brew or apply locally."
    }
  ],

  /********* IMAGES *********/
  images: [
    {
      url:
        "https://www.gardeningknowhow.com/wp-content/uploads/2016/09/sage-type-398x600.jpg",
      caption: "An overall view of the sage bush"
    },
    {
      url:
        "https://erboristeriadurga.it/wp-content/uploads/2014/06/salvia-officinalis.jpg",
      caption: "a detail of the sage leaf"
    },
    {
      url:
        "https://previews.123rf.com/images/splinex/splinex1706/splinex170600016/81490038-salvia-officinalis-sage-also-called-garden-sage-or-common-sage-flower-isolated-.jpg",
      caption: "A picture of the sage flowers"
    }
  ]
});

var mint = new Plant({
  /********* GENERAL INFO *********/
  latinName: "Mentha Piperita",
  commonName: "Peppermint",
  typeOfPlant: "herb",
  evergreen: false,
  description: "",
  height: 0.6,
  zone: ["europe", "middle-east"],
  habitat: "moist",

  /********* STEM *********/
  stemColour: "dark red",
  stemTexture: "smooth",
  stemDescription: "can have some hair",

  /********* LEAVES *********/
  leafShape: "lanceolate",
  leafDescription: "green, with reddish veins",
  leafMargin: "dentate",
  leafVenation: "alternate",
  leafLength: 6,

  /********* FLOWERS, optional *********/
  flowerColour: "purple",
  bloomMonth: ["jul", "aug"],

  /********* USES *********/
  uses: [
    {
      part: "leaves",
      edible: "eat raw",
      medicinalProperties: [
        "refreshing",
        "tonic",
        "digestive",
        "analgesic",
        "aromatic"
      ],
      medicinalPreparation: "brew, ingest or apply locally."
    }
  ],

  /********* IMAGES *********/
  images: [
    {
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Mentha-piperita.JPG/330px-Mentha-piperita.JPG",
      caption: "An overall view of the peppermint herb."
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/1766/2959/products/Peppermint_4_400x400.jpg?v=1535245781",
      caption: "A detail of the peppermint flowers"
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/51TeuM4HqJL.jpg",
      caption: "A picture of the peppermint's leaves"
    }
  ]
});

Plant.create([sage, mint])
  .then(plant => {
    console.log(`plant created`);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });

var plantPlaceholder = new Plant({
  /********* GENERAL INFO *********/
  latinName: "",
  commonName: "",
  typeOfPlant: "",
  evergreen: false,
  description: "",
  height: 0,
  zone: [""],
  habitat: "",

  /********* STEM *********/
  stemColour: "",
  stemTexture: "",
  stemDescription: "",

  /********* LEAVES *********/
  leafShape: "",
  leafDescription: "",
  leafMargin: "",
  leafVenation: "",
  leafLength: 0,

  /********* FLOWERS, optional *********/
  flowerColour: "",
  flowerDescription: "",
  bloomMonth: [""],

  /********* FRUIT, optional *********/
  fruitColour: "",
  fruitDescription: "",
  fruitSize: 0, //cm

  /********* USES *********/
  uses: [
    {
      part: "",
      edible: "",
      medicinalProperties: [""],
      medicinalPreparation: "",
      material: ""
    }
  ],

  /********* IMAGES *********/
  images: [
    {
      url: "",
      caption: ""
    }
  ]
});
