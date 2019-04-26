const mongoose = require("mongoose");
const config = require("../config/config");
const Plant = require("./plantModel");
const arr = require("./data");

mongoose.connect(config.dbURL, {
  auth: {
    user: config.uname,
    password: config.pword
  },
  useNewUrlParser: true
});
Plant.collection.drop();


Plant.create(arr)
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
      partOfPlant: "",
      title: "",
      edible: "",
      medicalProperties: [],
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
