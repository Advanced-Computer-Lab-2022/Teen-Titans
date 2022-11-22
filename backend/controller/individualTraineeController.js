const asyncHandler = require('express-async-handler')
const individualTraineeModel = require('../models/individualTraineeModel')
const nodemailer = require('nodemailer')
// const course = require('../models/courseModel')

const changePassword = asyncHandler(async (req, res) => {
    const user = await individualTraineeModel.findById(req.body.id);
    if (user.password == req.body.oldPassword) {
        const individualTrainee = await individualTraineeModel.findByIdAndUpdate(req.body.id, { password: req.body.password })
        res.status(200).json({
            message: 'Password Updated!'
        })
    }
    else
        res.status(400).json({
            message: 'Old Password is incorrect!'
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

// const transporter = nodemailer.createTransport({
//     service: "hotmail",
//     auth: {
//         user: "knowledgeBoost@outlook.com",
//         pass: "Ta3leemMshMagani"
//     }
// })

// const forgotPassword = asyncHandler(async (req, res) => {
//     const user = await individualTraineeModel.find({ email: req.body.email })
//     const options = {
//         from: "knowledgeBoost@outlook.com",
//         to: req.body.email,
//         subject: "Reset Password",
//         text: "Please click on the link below to rest password."
//     }
//     if (user) {
//         transporter.sendMail(options, function (err, info) {
//             if (err)
//                 res.status(400).json(err)
//             else
//                 res.status(200).json(info)
//         })
//     }
//     else
//         res.status(400).json({
//             message: "No user with such email!"
//         })
// })

// const resetPassword = asyncHandler(async (req, res) => {
//     const individualTrainee = await individualTraineeModel.findByIdAndUpdate(req.params.id, { password: req.body.password })
//     res.status(200).json({
//         message: 'Password Reset!'
//     })

// })


//not working properly yet.................
const registerForCourse = asyncHandler(async (req, res) => {
    const findUser = await individualTraineeModel.findById(req.body.id);
    const courses = findUser.enrolledCourses
    courses.push(req.body.courseId)
    const user = await individualTraineeModel.findByIdAndUpdate(req.body.id, { enrolledCourses: courses })
    const populateCourse = await individualTraineeModel.findById(req.body.id).populate("course").exec((err, result) => {
        if (err) {
            return res.json({ error: err })
        }
        res.json({ result: result })
    });
})


module.exports = { changePassword, signUp, registerForCourse }