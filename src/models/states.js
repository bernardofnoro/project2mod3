const mongoose = require("mongoose");

const statesModel = new mongoose.Schema({
    nome:{type:String, required:true},
    regiao:{type:String, required:true},
    populacao: {type:Number, required:true},
    salariominimo:{type:Number, required:true}
});

const states = mongoose.model("states",statesModel);

module.exports = states;

