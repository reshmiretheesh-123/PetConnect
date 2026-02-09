const express = require("express")
const router = express.Router()
const upload = require("../services/imageservices")
const jwt = require("jsonwebtoken")
const Findpet = require("../models/petownerfindpetschema")



router.post("/find", upload.single("petpicture"), async (req, res) => {
    const token = req.headers.authorization.slice(7)
    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const { petname, species, breed, healthstatus, lostdate, } = req.body
 
    const newFindpet = new Findpet({
        petownerId: decoded.id,
        petname,
        species,
        breed,
        healthstatus,
        lostdate,
        petpicture: req.file && req.file.filename
    })
    await newFindpet.save()
    res.send({
        message: " Lost Pet Added successfully", newFindpet
    })
})

router.get("/view", upload.single("petpicture"), async (req, res) => {
    const token = req.headers.authorization.slice(7)
    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const findpet = await Findpet.find({ "petownerId": decoded.id }).populate("petownerId")
    if (findpet) {
        res.send(findpet)
    }
    else {
        res.status(404).send({
            message: "No Data"

        })
    }

})

module.exports = router