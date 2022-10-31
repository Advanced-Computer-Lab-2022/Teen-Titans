const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const instructorModel = require('../models/instructorModel.js')
const corporateTraineeModel = require('../models/corporateTraineeModel.js')


//This is to know which user is chosen by the admin

const selectedUser = asyncHandler(async (req, res) => {
    const selectedElement = req.body.selectedElement
    const admins = await Admin.find({ username: req.body.username })
    const instructors = await instructorModel.find({ username: req.body.username })
    const trainees = await corporateTraineeModel.find({ username: req.body.username })

    if (!req.body) {
        res.status(400)
        throw new Error("Please enter username and password")
    }
    else if (admins.length != 0 || instructors.length != 0 || trainees.length != 0) {
        res.status(400)
        throw new Error('username exists')
    }
    else {
        if (selectedElement == 'Admin') {
            const admin = await Admin.create({
                username: req.body.username,
                password: req.body.password
            })
            res.status(200).json(admin)
        }
        else if (selectedElement == 'Instructor') {
            const instructor = await instructorModel.create({
                username: req.body.username,
                password: req.body.password
            })
            res.status(200).json(instructor)
        }
        else {
            const corporateTrainee = await corporateTraineeModel.create({
                username: req.body.username,
                password: req.body.password
            })
            res.status(200).json(corporateTrainee)
        }
    }
})

module.exports = { selectedUser }