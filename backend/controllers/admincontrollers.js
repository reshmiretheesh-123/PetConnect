const express = require("express")
const router = express.Router()
const upload = require("../services/imageservices")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const adminVerify= require("../middlewares/adminmiddleware")
const Petowner= require("../models/petownerschema")

router.post("/login", async (req, res) => {
    const { username, password } = req.body
    if (username == "admin@admin.com" && password == "admin") {
        const token = jwt.sign({ admin: true }, process.env.JWT_TOKEN)
        res.send({
            message: "Login Successfully", token
        })
    }
    else {
        res.status(404).send({
            message: "Login Failed"
        })
    }
})


router.get("/petownerview", adminVerify, async (req, res) => {
    const petowner= await Petowner.find()
    res.send({
        message: "Petowners", petowner
    })
})






module.exports = router