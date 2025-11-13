const express = require("express")
const router = express.Router()
const upload = require("../services/imageservices")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const RescueShelter = require("../models/rescueshelterschema")

router.post("/register",upload.fields([{name:"adhaar",maxCount:1},{name:"image",maxCount:1}]), async (req, res) => {
    const { name, userid, address, contact, password } = req.body
    const hashPassword = bcrypt.hashSync(password, 10)
    const newRescueShelter = new RescueShelter({
        name,
        userid,
        address,
        contact,
        password:hashPassword,
        adhaar: req.files?.adhaar && req.files.adhaar[0].filename,
        image: req.files?.image && req.files.image[0].filename
    })
    await newRescueShelter.save() 
    res.send({
        message: "RescueShelter registered successfully", newRescueShelter
    })
})

router.post("/login",async (req,res) => {
    const { username, password } =req.body
    const rescueshelter = await RescueShelter.findOne({ username })
    if (!rescueshelter){
        res.status(400).send({
            message:  "Invalid username or password"
        })
    }
    else {
        const iscorrectPassword = bcrypt.compareSync(password,rescueshelter.password)
        if (iscorrectPassword){
            const token = jwt.sign({ id: rescueshelter._id }, process.env.JWT_TOKEN)
            res.send({
                message: "Adopter Logined successfully", rescueshelter, token
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