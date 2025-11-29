const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const adminVerify= require("../middlewares/adminmiddleware")
const Petowner= require("../models/petownerschema")
const Adopter= require("../models/adopterschema")
const Foster= require('../models/fosterschema')
const Rescueshelter= require('../models/rescueshelterschema')

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

router.get("/adopterview", adminVerify, async (req, res) => {
    const adopter= await Adopter.find()
    res.send({
        message: "Adopters", adopter
    })
})

router.get("/fosterview", adminVerify, async (req, res) => {
    const foster= await Foster.find()
    res.send({
        message: "Foster", foster
    })
})

router.get("/rescueshelterview", adminVerify, async (req, res) => {
    const rescueshelter= await Rescueshelter.find()
    res.send({
        message: "RescueShelter", rescueshelter
    })
})

router.patch("/activate",adminVerify,async(req,res) => {
    const adopterid = req.body.adopterid
    const adopter = await Adopter.findByIdAndUpdate(adopterid, { Approved: true})
    res.send({
        message: "Adopter Activated", adopter
    })
})
router.patch("/deactivate",adminVerify,async(req,res) => {
    const adopterid = req.body.adopterid
    const adopter = await Adopter.findByIdAndUpdate(adopterid, { Approved: false})
    res.send({
        message: "Adopter Rejected", adopter
    })
})

router.patch("/approve",adminVerify,async(req,res) => {
    const rescueshelterid = req.body.rescueshelterid
    const rescueshelter = await Rescueshelter.findByIdAndUpdate(rescueshelterid, { Approved: true})
    res.send({
        message: "RescueShelter Activated", rescueshelter
    })
})

router.patch("/reject",adminVerify,async(req,res) => {
    const rescueshelterid = req.body.rescueshelterid
    const rescueshelter = await Rescueshelter.findByIdAndUpdate(rescueshelterid, { Approved: false})
    res.send({
        message: "RescueShelter Rejected", rescueshelter
    })
})

 








module.exports = router