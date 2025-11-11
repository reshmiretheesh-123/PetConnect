const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()
app.use(express.json())
app.use(cors())
require("./db.js")

app.use("/uploads", express.static("uploads/"))
const petownerController=require("./controllers/petownercontroller.js")
app.use("/petowner",petownerController)
const adopterController=require("./controllers/adoptercontrollers.js")
app.use("/adopter",adopterController)

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})