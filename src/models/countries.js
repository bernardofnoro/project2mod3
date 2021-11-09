const mongoose = require("mongoose");

const countriesModel = new mongoose.Schema({
nome:{type:String, required:true},
populacao:{type:Number, required:true},
lingua: {type:String, required:true},
pib:{type:Number, required:true}
});

const countries = mongoose.model("countries",countriesModel);

module.exports = countries;
