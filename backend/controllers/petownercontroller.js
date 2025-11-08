const express = require("express")
const router = express.Router()
const upload = require("../services/imageservices")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Petowner = require("../models/petownerschema")

router.post("/register",upload.fields([{name:"adhaar",maxCount:1},{name:"image",maxCount:1}]), async (req, res) => {
    const { name, username, address, contact, password } = req.body
    const hashPassword = bcrypt.hashSync(password, 10)
    const newPetowner = new Petowner({
        name,
        username,
        address,
        contact,
        password,
        adhaar: req.files?.adhaar && req.files.adhaar[0].filename,
        image: req.files?.image && req.files.image[0].filename
    })
    await newPetowner.save()
    res.send({
        message: "Petowner registered successfully", newPetowner
    })
})

module.exports=router