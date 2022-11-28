const asyncHandler = require('express-async-handler')
const corporateTraineeModel = require('../models/corporateTraineeModel')
const nodemailer = require('nodemailer')

const changePassword = asyncHandler(async (req, res) => {
    const user = await corporateTraineeModel.findById(req.body.id);
    if (user.password == req.body.oldPassword) {
        const corporateTrainee = await corporateTraineeModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
        res.status(200).json({
            message: 'Password Updated!'
        })
    }
    else
        res.status(400).json({
            message: 'Old Password is incorrect!'
        })
})

const getRatingCourse= async (req, res) => {
    const rating = await courseModel.findByIdAndUpdate(req.body.id, { rating: req.body.rating})

    res.status(200).json(rating)
}
const getRatingInstructor= async (req, res) => {
    const rating = await instructorModel.findByIdAndUpdate(req.body.id, { rating: req.body.rating })

    res.status(200).json(rating)
}




module.exports = { changePassword,getRatingCourse,getRatingInstructor }