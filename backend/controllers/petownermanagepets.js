const express = require("express")
const router = express.Router()
const upload = require("../services/imageservices")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Managepets = require("../models/petownermanagepetsschema")

router.post("/addpets", upload.fields([{ name: "image", maxCount: 1 }]), async (req, res) => {
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    const { name, age, breed, species, health, vaccinations } = req.body
    
    const newManagepets = new Managepets({
        petownerid:decoded.id,
        name,
        age,
        breed,
        species,
        health,
        vaccinations,
        // adhaar: req.files?.adhaar && req.files.adhaar[0].filename,
        image: req.files?.image && req.files.image[0].filename
    })
    await newManagepets.save()
    res.send({
        message: "Pet Added successfully", newManagepets
    })
})

router.get("/viewpets", async(req,res)=> {
    const token = req.headers.authorization.slice(7)
    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const managepets = await Managepets.find({ petownerid: decoded.id })
    res.send(managepets)
})

module.exports = router