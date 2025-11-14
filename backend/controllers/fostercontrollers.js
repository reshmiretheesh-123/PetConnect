const express = require("express")
const router = express.Router()
const upload = require("../services/imageservices")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Foster = require("../models/fosterschema")

router.post("/register",upload.fields([{name:"adhaar",maxCount:1},{name:"image",maxCount:1}]), async (req, res) => {
    const { fostername, emailid, address, contact, password } = req.body
    const hashPassword = bcrypt.hashSync(password, 10)
    const newFoster = new Foster({
        fostername,
        emailid,
        address,
        contact,
        password:hashPassword,
        adhaar: req.files?.adhaar && req.files.adhaar[0].filename,
        image: req.files?.image && req.files.image[0].filename
    })
    await newFoster.save() 
    res.send({
        message: "Foster registered successfully", newFoster
    })
})

router.post("/login",async (req,res) => {
    const { emailid, password } =req.body
    const foster = await Foster.findOne({ emailid })
    if (!foster){
        res.status(400).send({
            message:  "Invalid username or password"
        })
    }
    else {
        const iscorrectPassword = bcrypt.compareSync(password,foster.password)
        if (iscorrectPassword){
            const token = jwt.sign({ id: foster._id }, process.env.JWT_TOKEN)
            res.send({
                message: "Foster Logined successfully", foster, token
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