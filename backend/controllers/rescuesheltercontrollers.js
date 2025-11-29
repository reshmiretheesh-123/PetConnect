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
    const { userid, password } =req.body
    const rescueshelter = await RescueShelter.findOne({ userid })
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
                message: "RescueShelter Logined successfully", rescueshelter, token
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
    const rescueshelter = await RescueShelter.findOne({ "_id": decoded.id })
    res.send({ message: "Rescueshelter Profile", rescueshelter })
})

router.put("/updateprofile", upload.fields([{ name: "adhaar", maxCount: 1 }, { name: "image", maxCount: 1 }]), async (req, res) => {
    try {
        const token = req.headers.authorization.slice(7)
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        const { name, userid,address, contact } = req.body
        await RescueShelter.findByIdAndUpdate(decoded.id, {
            name,
            userid,
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