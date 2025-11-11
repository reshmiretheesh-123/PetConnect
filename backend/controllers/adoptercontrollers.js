const express = require("express")
const router = express.Router()
const upload = require("../services/imageservices")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Adopter = require("../models/adopterschema")

router.post("/register",upload.fields([{name:"adhaar",maxCount:1},{name:"image",maxCount:1}]), async (req, res) => {
    const { adoptername, username, address, contact, password } = req.body
    const hashPassword = bcrypt.hashSync(password, 10)
    const newAdopter = new Adopter({
        adoptername,
        username,
        address,
        contact,
        password:hashPassword,
        adhaar: req.files?.adhaar && req.files.adhaar[0].filename,
        image: req.files?.image && req.files.image[0].filename
    })
    await newAdopter.save() 
    res.send({
        message: "Adopter registered successfully", newAdopter
    })
})

router.post("/login",async (req,res) => {
    const { username, password } =req.body
    const adopter = await Adopter.findOne({ username })
    if (!adopter){
        res.status(400).send({
            message:  "Invalid username or password"
        })
    }
    else {
        const iscorrectPassword = bcrypt.compareSync(password,adopter.password)
        if (iscorrectPassword){
            const token = jwt.sign({ id: adopter._id }, process.env.JWT_TOKEN)
            res.send({
                message: "Adopter Logined successfully", adopter, token
            })
        }
        else {
            res.status(400).send({
                message: "Incorrect Password"
            })
        }
    }
})
module.exports=router