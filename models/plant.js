var mongoose = require("mongoose");
const config = require("../config/config");

mongoose.connect(config.dbURL);

var Plant = new mongoose.Schema({
  /********* CLASSIFICATION *********/
  latinName: {
    type: String,
    required: true
  },
  commonName: {
    type: String,
    required: true
  },
  typeOfPlant: {
    type: String,
    required: true
    //trees, herbs, bushes, grasses, vines, ferns, mosses, and green algae, NEED TO INVESTIGATE
    // enum: ["trees", "bush", ]
  },
  evergreen: {
    type: Boolean,
    required: true
  },

  /********* ASPECT *********/
  description: String,
  height: {
    type: Number, //m
    required: true
  },
  stem: {
    //maybe more in detail here?
    type: String,
    required: true
  },

  /********* LEAVES *********/
  leafShape: {
    type: String,
    required: true
    //enum
  },
  leafDescription: {
    type: String
  },
  leafMargin: {
    type: String,
    required: true
    //enum
  },
  leafLength: {
    type: Number,
    required: true
  },

  /********* FLOWERS, optional *********/
  flowerColour: String,
  flowerDescription: String,
  bloomMonth: [
    {
      type: String,
      enum: [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec"
      ]
    }
  ],
  /********* FRUIT, optional *********/
  fruitColour: String,
  fruitDescription: String,
  fruitSize: Number, //cm

  /********* USES *********/
  uses: [
    {
      part: {
        type: String,
        required: true
      },
      //can be null
      edible: String,
      //can be null
      medicinalProperties: [
        {
          type: String
        }
      ],
      medicinalPreparation: {
        type: String
      },
      //can be null
      material: String
    }
  ],

  /********* IMAGES *********/
  images: [
    {
      url: {
        type: String,
        required: true
      },
      caption: String
    }
  ],
  //cumulated properties in a single array, for queries. NECESSARY?
  medicinalProperties: [
    {
      type: String
    }
  ],
  //container for future keywords useful in queries. Probably necessary.
  keywords: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model("Plant", Plant);
/*
permitted types
Array
Boolean
Buffer
Date
Mixed (A generic / flexible data type)
Number
ObjectId
String 

mixed, object ID under require(‘mongoose’).Schema.Types

then
let EmailModel = require('./email')
let msg = new EmailModel({
  email: 'ada.lovelace@gmail.com'
})
also possible to declare functions of the schema, eg. model.methods.getName = function()...

... rest will follow
*/
