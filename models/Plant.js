'use strict';
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

//id auto added by mongoose
const PlantSchema = exports.PlantSchema = new mongoose.Schema({
	//scientific name of the plant, String
	s_name : {type: String, required: true, unique: true},
	//common name of the plant
	name : {type: String},
	//medicinal properties of the Plant
	properties : [{ type: String }],
	//path to image of the plant
	image : {type: String},
});

PlantSchema.pre('save', function (next) {
	next();
});

//register model for schema
mongoose.model('Plant', PlantSchema);
