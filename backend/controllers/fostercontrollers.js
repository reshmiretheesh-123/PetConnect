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

router.get("/profile", async (req, res) => {
    const token = req.headers.authorization.slice(7)
    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const foster = await Foster.findOne({ "_id": decoded.id })
    res.send({ message: "Foster Profile", foster })
})

router.put("/updateprofile", upload.fields([{ name: "adhaar", maxCount: 1 }, { name: "image", maxCount: 1 }]), async (req, res) => {
    try {
        const token = req.headers.authorization.slice(7)
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        const { fostername, emailid,address, contact } = req.body
        await Foster.findByIdAndUpdate(decoded.id, {
            fostername,
            emailid,
            address,
            contact,
            adhaar: req.files?.adhaar && req.files.adhaar[0].filename,
            image: req.files?.image && req.files.image[0].filename,
        })
        res.send({ message: "Updated Successfully" })
    }
    catch (e) {
        res.status(403).send({ message: "Not Authorised" })
    }
})
module.exports=router