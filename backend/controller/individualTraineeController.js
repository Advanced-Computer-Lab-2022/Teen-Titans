const asyncHandler = require('express-async-handler')
const individualTraineeModel = require('../models/individualTraineeModel')


const changePassword = asyncHandler(async (req, res) => {
    const individualTrainee = await individualTraineeModel.findByIdAndUpdate(req.params.id, { password: req.body.password })
    res.status(200).json({
        message: 'Password Updated!'
    })
})

const signUp = asyncHandler(async (req, res) => {
    const individualTrainee = await individualTraineeModel.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.wallet,
        country: req.body.country,
        wallet: req.body.wallet,
        enrolledCourses: req.body.enrolledCourses
    })

    res.status(200).json(individualTrainee)
})
module.exports = { changePassword, signUp }