const mongoose = require("mongoose");
const stopword = require("stopword");
const definitions = require("../../utility/definitions");
const { medicalProperties } = definitions;

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
  plantType: {
    type: String,
    lowercase: true,
    required: true,
    enum: definitions.plantTypes
  },
  evergreen: {
    type: String,
    required: true
  },
  description: {
    type: String,
    lowercase: true
  },
  regions: [
    {
      type: String,
      lowercase: true,
      required: true,
      enum: definitions.regions
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
    required: true,
    enum: definitions.colours
  },
  stemTexture: {
    type: String,
    lowercase: true,
    required: true,
    enum: definitions.stemTexture
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
  leafArrangement: {
    type: String,
    lowercase: true,
    required: true,
    enum: definitions.leafArrangement
  },
  leafVenation: {
    type: String,
    lowercase: true,
    enum: definitions.leafVenation
  },
  leafLength: {
    type: Number,
    required: true
  },

  /********* FLOWERS, optional *********/
  flowerColour: {
    type: String,
    lowercase: true,
    enum: definitions.colours
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
    lowercase: true,
    enum: definitions.colours
  },
  fruitDescription: {
    type: String,
    lowercase: true
  },
  harvestMonth: [
    {
      type: String,
      lowercase: true,
      enum: definitions.months
    }
  ],
  fruitSize: Number, //cm

  /********* USES *********/
  uses: [
    {
      part: {
        type: String,
        lowercase: true,
        required: true
      },
      title: {
        type: String,
        lowercase: true,
        required: true
      },
      //can be null
      edibility: {
        type: String,
        lowercase: true,
        enum: ["yes", "no", "toxic"]
      },
      //can be null
      medicalProperties: [
        {
          type: String,
          lowercase: true,
          enum: medicalProperties,
        }
      ],
      comment: {
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
  //container for future keywords useful in queries. Probably necessary.
  keywords: [
    {
      type: String,
      lowercase: true
    }
  ],
  //stores frequency of words
  frequency: {
    type: Map,
    of: Number
  }
});

Plant.pre("save", function (next) {
  if (!this.keywords) {
    let tempArr = [];

    //iterate over all keys of the document
    for (let key of Object.keys(this.toObject())) {
      tempArr = tempArr.concat(extractKeywords(key, this));
    }

    this.keywords = tempArr;

    this.frequency = {};

    for (let str of tempArr) {
      let res = this.frequency.get(str);
      if (res) {
        this.frequency.set(str, res + 1);
      } else {
        this.frequency.set(str, 1);
      }
    }
  }

  next();
});

//this function extracts all non-stopwords from the current key of object
//in case of an array, it recurses on its length
function extractKeywords(key, obj) {
  //skips mongoose id and urls
  if (key === "_id" || key === "url") return [];

  let type = typeof obj[key];
  if (type === "string") {
    //removes all punctuation
    let str = obj[key].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");

    //removes stopwords and symbols
    str = stopword.removeStopwords(str);

    return str;
  } else if (type === "boolean") {
    //ex. "edible" will be added if true
    if (obj[key]) return [key];
    return [];
  } else if (type === "number") {
    //not adding numbers
    return [];
  } else {
    //if it's an array and it has at least one element, recurse
    if (
      Array.isArray(obj[key]) &&
      obj[key].length > 0 &&
      typeof obj[key][0] === "object"
    ) {
      let temp = [];

      for (let a of Object.keys(obj[key][0].toObject())) {
        temp = temp.concat(extractKeywords(a, obj[key][0]));
      }

      return temp;
    } else {
      return obj[key];
    }
  }
}

module.exports = mongoose.model("Plant", Plant);
