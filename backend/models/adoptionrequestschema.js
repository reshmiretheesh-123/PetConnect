const mongoose = require("mongoose")
const adoptionrequest = mongoose.Schema({
   petownerId: { type:mongoose.Schema.ObjectId, required: true, ref:"petowner"},
   petId: { type:mongoose.Schema.ObjectId, required: true, ref:"managepets"},
   requesterId: {type:mongoose.Schema.ObjectId,required: true, ref:"requester"},
   Approved: { type: Boolean}
    
},{timestamps:true})
const Application = mongoose.model("application", adoptionrequest)

module.exports = Application;