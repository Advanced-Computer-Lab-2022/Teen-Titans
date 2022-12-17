const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const instructorModel = require('../models/instructorModel.js')
const corporateTraineeModel = require('../models/corporateTraineeModel.js')
const requestModel = require('../models/requestModel.js')


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
                password: req.body.password,
                email: '',
                firstName: '',
                lastName: '',
                gender: '',
                country: '',
                biography: '',
                moneyOwed: 0,
                rating: 0,
                ratings: {
                    oneStar: 0,
                    twoStar: 0,
                    threeStar: 0,
                    fourStar: 0,
                    fiveStar: 0,
                },
                reviews: [],
                courses: []
            })
            res.status(200).json(instructor)
        }
        else {
            const corporateTrainee = await corporateTraineeModel.create({
                username: req.body.username,
                password: req.body.password,
                email: '',
                firstName: '',
                lastName: '',
                gender: '',
                country: '',
                enrolledCourses: []
            })
            res.status(200).json(corporateTrainee)
        }
    }
})

const getRequests = asyncHandler(async (req, res) => {
    const requests = await requestModel.find({})
    res.status(200).json(requests)
})


const getTrainee = asyncHandler(async (req, res) => {
    const user = await corporateTraineeModel.findById(req.query.traineeid);
    if (user)
    res.status(200).json(user)
else
    res.status(400).json({
        message: 'user not found!'
    })

  
   
})
module.exports = { selectedUser,getRequests ,getTrainee}