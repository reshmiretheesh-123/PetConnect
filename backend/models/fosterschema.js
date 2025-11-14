const mongoose = require("mongoose")
const fosterschema = mongoose.Schema({
    fostername: { type: String, required: true },
    emailid: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    password: { type: String, required: true },
    adhaar: { type: String, required: true },
    image: { type: String }
})
const Foster = mongoose.model("foster", fosterschema)

module.exports = Foster;