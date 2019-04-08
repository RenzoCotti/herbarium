const mongoose = require("mongoose");
const config = require("../config/config");
const Plant = require("./plantModel");

mongoose.connect(config.dbURL, {
  auth: {
    user: config.uname,
    password: config.pword
  },
  useNewUrlParser: true
});
Plant.collection.drop();

let obj = {
  /********* GENERAL INFO *********/
  latinName: "Salvia Officinalis",
  commonName: "Sage",
  plantType: "bush",
  evergreen: "yes",
  height: 0.6,
  regions: ["europe"],
  habitat: "gravel",

  /********* STEM *********/
  stemColour: "green",
  stemTexture: "hairy",
  stemDescription: "woody at the base",

  /********* LEAVES *********/
  leafShape: "elliptical",
  leafDescription: "rugose, hairy and green on top, gray on the bottom",
  leafMargin: "crenate",
  leafVenation: "pinnate",
  leafArrangement: "opposite",
  leafLength: 6.5,

  /********* FLOWERS, optional *********/
  flowerColour: "purple",
  bloomMonth: ["june"],

  /********* USES *********/
  uses: [
    {
      part: "leaves",
      edible: true,
      medicinalProperties: ["antiseptic", "digestive", "relaxant", "aromatic"],
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
};

var sage = new Plant(obj);

var mint = new Plant({
  /********* GENERAL INFO *********/
  latinName: "Mentha Piperita",
  commonName: "Peppermint",
  plantType: "herb",
  evergreen: "no",
  height: 0.6,
  regions: ["europe", "middle-east"],
  habitat: "moist",

  /********* STEM *********/
  stemColour: "red",
  stemTexture: "smooth",
  stemDescription: "can have some hair",

  /********* LEAVES *********/
  leafShape: "elliptical",
  leafDescription: "green, with reddish veins",
  leafMargin: "serrate",
  leafVenation: "pinnate",
  leafArrangement: "opposite",
  leafLength: 6,

  /********* FLOWERS, optional *********/
  flowerColour: "purple",
  bloomMonth: ["july", "august"],

  /********* USES *********/
  uses: [
    {
      part: "leaves",
      edible: true,
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
        "https://www.victoriananursery.co.uk/images/250/sq_black_peppermint_002.jpg",
      caption: "An overall view of the peppermint herb."
    },
    {
      url:
        "https://thumbs.dreamstime.com/z/peppermint-flowers-leaves-isolated-white-20780064.jpg",
      caption: "A detail of the peppermint flowers"
    },
    {
      url:
        "https://cdn1.medicalnewstoday.com/content/images/articles/265/265214/peppermint.jpg",
      caption: "A picture of the peppermint leaves"
    }
  ]
});

let ssage = Object.assign({}, obj);
ssage.latinName = "Test";
ssage.commonName = "Sagus";

// console.log(ssage);

let sssage = new Plant(ssage);

Plant.create([sage, mint, sssage])
  .then(plant => {
    console.log(`${plant.length} plants created`);
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
  plantType: "",
  evergreen: "",
  description: "",
  height: 0,
  regions: [""],
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
  leafArrangement: "",
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
      title: "",
      edible: "",
      medicalCategory: "",
      medicinalProperties: [],
      comment: ""
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
