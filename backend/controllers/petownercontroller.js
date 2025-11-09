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
        password:hashPassword,
        adhaar: req.files?.adhaar && req.files.adhaar[0].filename,
        image: req.files?.image && req.files.image[0].filename
    })
    await newPetowner.save()
    res.send({
        message: "Petowner registered successfully", newPetowner
    })
})

router.post("/login",async (req,res) => {
    const { username, password } =req.body
    const petowner = await Petowner.findOne({ username })
    if (!petowner){
        res.status(400).send({
            message:  "Invalid username or password"
        })
    }
    else {
        const iscorrectPassword = bcrypt.compareSync(password,petowner.password)
        if (iscorrectPassword){
            const token = jwt.sign({ id: petowner._id }, process.env.JWT_TOKEN)
            res.send({
                message: "PetOwner registered successfully", petowner, token
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