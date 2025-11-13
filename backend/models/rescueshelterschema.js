const mongoose = require("mongoose")
const rescueshelterschema = mongoose.Schema({
    name: { type: String, required: true },
    userid : { type: String, required: true, unique: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    password: { type: String, required: true },
    adhaar: { type: String, required: true },
    image: { type: String }
})
const RescueShelter = mongoose.model("rescueshelter", rescueshelterschema)

module.exports = RescueShelter;