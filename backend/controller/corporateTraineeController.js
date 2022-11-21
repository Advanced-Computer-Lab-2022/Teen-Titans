const asyncHandler = require('express-async-handler')
const corporateTraineeModel = require('../models/corporateTraineeModel')
const nodemailer = require('nodemailer')

const changePassword = asyncHandler(async (req, res) => {
    const user = await corporateTraineeModel.findById(req.params.id);
    if (user.password == req.body.oldPassword) {
        const corporateTrainee = await corporateTraineeModel.findByIdAndUpdate(req.params.id, { password: req.body.password })
        res.status(200).json({
            message: 'Password Updated!'
        })
    }
    else
        res.status(400).json({
            message: 'Old Password is incorrect!'
        })
})

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "knowledgeBoost@outlook.com",
        pass: "Ta3leemMshMagani"
    }
})

const forgotPassword = asyncHandler(async (req, res) => {
    const user = await corporateTraineeModel.find({ email: req.body.email })
    const options = {
        from: "knowledgeBoost@outlook.com",
        to: req.body.email,
        subject: "Reset Password",
        text: "Please click on the link below to rest password."
    }
    if (user) {
        transporter.sendMail(options, function (err, info) {
            if (err)
                res.status(400).json(err)
            else
                res.status(200).json(info)
        })
    }
    else
        res.status(400).json({
            message: "No user with such email!"
        })
})

const resetPassword = asyncHandler(async (req, res) => {
    const individualTrainee = await corporateTraineeModel.findByIdAndUpdate(req.params.id, { password: req.body.password })
    res.status(200).json({
        message: 'Password Reset!'
    })

})
module.exports = { changePassword, forgotPassword, resetPassword }