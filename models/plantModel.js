const mongoose = require("mongoose");
const definitions = require("../utility/definitions");
//takes all the arrays within the object and returns a single array
const medicinalProp = [].concat.apply(
  [],
  Object.keys(definitions.medicinalProperties).map(k => {
    return definitions.medicinalProperties[k];
  })
);

const Plant = new mongoose.Schema({
  /********* GENERAL INFO *********/
  latinName: {
    type: String,
    lowercase: true,
    required: true
  },
  commonName: {
    type: String,
    lowercase: true,
    required: true
  },
  typeOfPlant: {
    type: String,
    lowercase: true,
    required: true,
    enum: definitions.plantTypes
  },
  evergreen: {
    type: Boolean,
    required: true
  },
  description: {
    type: String,
    lowercase: true
  },
  zone: [
    {
      type: String,
      lowercase: true,
      required: true
    }
  ],
  habitat: {
    type: String,
    lowercase: true,
    required: true
  },
  height: {
    type: Number, //m
    required: true
  },

  /********* STEM *********/
  stemColour: {
    type: String,
    lowercase: true,
    required: true
  },
  stemTexture: {
    type: String,
    lowercase: true,
    required: true,
    enum: ["smooth", "hairy", "woody", "bark"]
  },
  stemDescription: {
    type: String,
    lowercase: true
  },

  /********* LEAVES *********/
  //https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Leaf_morphology.svg/1024px-Leaf_morphology.svg.png
  leafShape: {
    type: String,
    lowercase: true,
    required: true,
    enum: definitions.leafShape
  },
  leafDescription: {
    type: String,
    lowercase: true
  },
  leafMargin: {
    type: String,
    lowercase: true,
    required: true,
    enum: definitions.leafMargin
  },
  leafVenation: {
    type: String,
    lowercase: true,
    required: true,
    enum: definitions.leafVenation
  },
  leafLength: {
    type: Number,
    required: true
  },

  /********* FLOWERS, optional *********/
  flowerColour: {
    type: String,
    lowercase: true
  },
  flowerDescription: {
    type: String,
    lowercase: true
  },
  bloomMonth: [
    {
      type: String,
      lowercase: true,
      enum: definitions.months
    }
  ],
  /********* FRUIT, optional *********/
  fruitColour: {
    type: String,
    lowercase: true
  },
  fruitDescription: {
    type: String,
    lowercase: true
  },
  fruitSize: Number, //cm

  /********* USES *********/
  uses: [
    {
      part: {
        type: String,
        lowercase: true,
        required: true
      },
      //can be null
      edible: {
        type: String,
        lowercase: true
      },
      //can be null
      medicinalProperties: [
        {
          type: String,
          lowercase: true,
          enum: medicinalProp
        }
      ],
      medicinalPreparation: {
        type: String,
        lowercase: true
      },
      //can be null
      material: {
        type: String,
        lowercase: true
      }
    }
  ],

  /********* IMAGES *********/
  images: [
    {
      url: {
        type: String,
        lowercase: true,
        required: true
      },
      caption: {
        type: String,
        lowercase: true
      }
    }
  ],
  //cumulated properties in a single array, for queries. NECESSARY?
  medicinalProperties: [
    {
      type: String,
      lowercase: true
      //enum
    }
  ],
  //container for future keywords useful in queries. Probably necessary.
  keywords: [
    {
      type: String,
      lowercase: true
    }
  ]
});

module.exports = mongoose.model("Plant", Plant);
