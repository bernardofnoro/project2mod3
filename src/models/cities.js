const mongoose = require("mongoose");

const citiesModel = new mongoose.Schema({
nome:{type:String, required:true},
bairros:{type:Number, required:true},
populacao: {type:Number, required:true},
aniversario:{type:Date, required:true}
});

const cities = mongoose.model("cities",citiesModel);

module.exports = cities;

