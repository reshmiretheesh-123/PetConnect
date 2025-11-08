const mongoose = require("mongoose")
const petownerschema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    password: { type: String, required: true },
    adhaar: { type: String, required: true },
    image: { type: String }
})
const Petowner = mongoose.model("petowner", petownerschema)

module.exports = Petowner;