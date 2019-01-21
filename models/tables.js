var mongoose = require("mongoose");

var classificationSchema = new mongoose.Schema({
  latin: { type: String, required: true },
  common: { type: String, required: true },
  type: { type: String, required: true },
  evergreen: { type: Boolean, required: true }
});

var appearanceSchema = new mongoose.Schema({
  height: { type: Number, required: true },
  stem: { type: String, required: true }
  //... todo, refactor, maybe useless wrappings?
});

var Plant = new mongoose.Schema({
  classification: { type: classificationSchema, required: true },
  appearance: appearanceSchema,
  uses: usesSchema,
  images: imagesSchema,
  description: String
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


... rest will follow
*/
