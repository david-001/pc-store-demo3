const mongoose = require("mongoose");

const pcPartSchema = mongoose.Schema({
    type: {type: String, required: true},
    brand: {type: String, required: true},
    spec: {type: String, required: true},
    quantity: {type: Number, required: true},
    unit_cost: {type: Number, required: true}
});

module.exports = mongoose.model("PcPart",pcPartSchema); //pcparts - collection name