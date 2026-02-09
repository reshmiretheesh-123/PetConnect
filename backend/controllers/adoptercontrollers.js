const express = require("express")
const router = express.Router()
const upload = require("../services/imageservices")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Adopter = require("../models/adopterschema")
const Managepets = require("../models/petownermanagepetsschema")
const AdoptionRequest = require("../models/adoptionrequestschema")
const findpet = require("../models/petownerfindpetschema")


router.post("/register", upload.fields([{ name: "adhaar", maxCount: 1 }, { name: "image", maxCount: 1 }]), async (req, res) => {
    const { adoptername, username, address, contact, password } = req.body
    const hashPassword = bcrypt.hashSync(password, 10)
    const newAdopter = new Adopter({
        adoptername,
        username,
        address,
        contact,
        password: hashPassword,
        adhaar: req.files?.adhaar && req.files.adhaar[0].filename,
        image: req.files?.image && req.files.image[0].filename
    })
    await newAdopter.save()
    res.send({
        message: "Adopter registered successfully", newAdopter
    })
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body
    const adopter = await Adopter.findOne({ username })
    if (!adopter) {
        res.status(400).send({
            message: "Invalid username or password"
        })
    }
    else {
        const iscorrectPassword = bcrypt.compareSync(password, adopter.password)
        if (iscorrectPassword) {
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

router.get("/profile", async (req, res) => {
    const token = req.headers.authorization.slice(7)
    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const adopter = await Adopter.findOne({ "_id": decoded.id })
    res.send({ message: "Adopter Profile", adopter })
})

router.put("/updateprofile", upload.fields([{ name: "adhaar", maxCount: 1 }, { name: "image", maxCount: 1 }]), async (req, res) => {
    try {
        const token = req.headers.authorization.slice(7)
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        const { adoptername, username, address, contact } = req.body
        await Adopter.findByIdAndUpdate(decoded.id, {
            adoptername,
            username,
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

router.get("/viewadoptpets", async (req, res) => {
    const token = req.headers.authorization.slice(7)
    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const managepets = await Managepets.find()
    res.send(managepets)
})

router.post("/adoptionrequest", async (req, res) => {

    const token = req.headers.authorization.slice(7)
    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const { petId } = req.body
    const pet = await Managepets.findById(petId)
    const newAdoptionRequest = new AdoptionRequest({
        petownerId: pet.petownerid,
        petId,
        requesterId: decoded.id
    })
    console.log(pet);
    

    await newAdoptionRequest.save()
    res.send({
        message: "Adoption Request", newAdoptionRequest
    })
})

module.exports = router 
