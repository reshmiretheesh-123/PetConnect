const mongoose = require("mongoose")
const adopterschema = mongoose.Schema({
    adoptername: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    password: { type: String, required: true },
    adhaar: { type: String, required: true },
    image: { type: String }
})
const Adopter = mongoose.model("adopter", adopterschema)

module.exports = Adopter;