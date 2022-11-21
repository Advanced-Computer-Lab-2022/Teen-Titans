const asyncHandler = require('express-async-handler')
const individualTraineeModel = require('../models/individualTraineeModel')
const instructorModel = require('../models/instructorModel')
const corporateTraineeModel = require('../models/corporateTraineeModel')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "knowledgeBoost@outlook.com",
        pass: "Ta3leemMshMagani"
    }
})

const forgotPassword = asyncHandler(async (req, res) => {
    const individualTrainee = await individualTraineeModel.exists({ email: req.body.email })
    const corporateTrainee = await corporateTraineeModel.exists({ email: req.body.email })
    const instructor = await instructorModel.exists({ email: req.body.email })
    let user;
    if (individualTrainee)
        user = await individualTraineeModel.findById(individualTrainee)
    else if (corporateTrainee)
        user = await corporateTraineeModel.findById(corporateTrainee)
    else if (instructor)
        user = await instructorModel.findById(instructor)
    else
        res.status(400).json({
            message: "No user with such email!"
        })
    const options = {
        from: "knowledgeBoost@outlook.com",
        to: req.body.email,
        subject: "Reset Password",
        text: `Please click on the link below to rest password.
                http://localhost:3000/resetpassword`
    }
    if (user) {
        transporter.sendMail(options, function (err, info) {
            if (err)
                res.status(400).json(err)
            else
                res.status(200).json(user)
        })
    }
})

const resetPassword = asyncHandler(async (req, res) => {
    let user;
    user = await individualTraineeModel.exists({ id: req.body.id })
    if (user) {
        const individualTrainee = await individualTraineeModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
        res.status(200).json({
            message: 'Password Reset!'
        })
    }
    else {
        user = await corporateTraineeModel.exists({ id: req.body.id })
        if (user) {
            const corporateTrainee = await corporateTraineeModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
            res.status(200).json({
                message: 'Password Reset!'
            })
        }
        else {
            user = await instructorModel.find({ id: req.body.id })
            const instructor = await instructorModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
            res.status(200).json({
                message: 'Password Reset!'
            })
        }
    }

})

module.exports = { forgotPassword, resetPassword }