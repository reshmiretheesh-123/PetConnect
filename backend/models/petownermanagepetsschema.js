const mongoose = require("mongoose")
const managepetschema = mongoose.Schema({
    petownerid: {type:mongoose.Schema.ObjectId,required: true,ref:"petowner"},
    name: { type: String, required: true },
    age: { type: String, required: true, },
    breed: { type: String, required: true },
    species: { type: String, required: true },
    health: { type: String, required: true },
    vaccinations: { type: String, required: true },
    image: { type: String }
})
const Managepets = mongoose.model("managepets", managepetschema)

module.exports = Managepets;