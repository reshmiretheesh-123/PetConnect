const mongoose = require("mongoose")
const petownerfindpetschema = mongoose.Schema({
    petownerId: { type:mongoose.Schema.ObjectId, required: true, ref:"petowner"},
    petname: { type: String, required: true },
    species: { type: String, required: true },
    breed: { type: String, required: true },
    healthstatus: { type: String, required: true },
    lostdate: { type: String, required: true },
    petpicture: { type: String }
})
const findpet = mongoose.model("petownerfindpet",petownerfindpetschema)

module.exports = findpet;