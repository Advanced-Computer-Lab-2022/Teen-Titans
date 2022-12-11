const asyncHandler = require('express-async-handler')
const corporateTraineeModel = require('../models/corporateTraineeModel')
const courseModel = require('../models/courseModel')
const videoModel = require('../models/videoModel')
const nodemailer = require('nodemailer')
const subtitleModel = require('../models/subtitleModel')

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

const registerForCourse = asyncHandler(async (req, res) => {
    const findUser = await corporateTraineeModel.findById(req.body.id);
    const course = await courseModel.findById(req.body.courseId);
    const courses = findUser.enrolledCourses
    courses.push({
        course: course,
        videosSeen: [],
        numberComplete: 0,
        percentageComplete: 0
    })
    const user = await corporateTraineeModel.findByIdAndUpdate(req.body.id, { enrolledCourses: courses })
    if (user)
        res.status(200).json({
            message: 'Registration Successful!'
        })
    else
        res.status(400).json({
            message: 'Registration Unsuccessful!'
        })
})

const myCourses = asyncHandler(async (req, res) => {
    const user = await corporateTraineeModel.findById(req.query.id);
    let enrolledCourses = user.enrolledCourses;
    let result = []
    if (user) {
        for (let i = 0; i < enrolledCourses.length; i++) {
            const courseDetails = await courseModel.findById(enrolledCourses[i].course.id)
            result.push(courseDetails)
        }
        res.status(200).json(result)
    }
    else
        res.status(400).json({
            message: 'User not found'
        })
})


const watchVideoC = asyncHandler(async (req, res) => {
    const user = await corporateTraineeModel.findById(req.query.id);
    let videoUrl = ''
    if (user) {
        for (let i = 0; i < user.enrolledCourses.length; i++) {
            if (user.enrolledCourses[i].course.id == req.query.courseId) {
                const video = await videoModel.findById(req.query.videoId)
                videoUrl = video.url
                res.status(200).json(video)
            }
        }
    }
    if (user && videoUrl == '')
        res.status(400).json({
            message: 'Unauthorized Access!'
        })

})

const videoSeenC = asyncHandler(async (req, res) => {
    const trainee = await corporateTraineeModel.findById(req.query.id)
    let enrolledCourses = trainee.enrolledCourses
    for (let i = 0; i < enrolledCourses.length; i++) {
        if (enrolledCourses[i].course.id == req.body.courseId && enrolledCourses[i].videosSeen.includes(req.body.videoId))
            res.status(200).json({
                message: "Video already seen!"
            })
        else if (enrolledCourses[i].course.id == req.body.courseId && !enrolledCourses[i].videosSeen.includes(req.body.videoId)) {
            const numberOfSubtitles = enrolledCourses[i].course.subtitles.length
            const numberComplete = enrolledCourses[i].numberComplete + 1
            const percentageComplete = (numberComplete * 100) / numberOfSubtitles
            enrolledCourses[i].percentageComplete = percentageComplete
            enrolledCourses[i].numberComplete = numberComplete
            enrolledCourses[i].videosSeen.push(req.body.videoId)
            const updatedTrainee = await corporateTraineeModel.findByIdAndUpdate(req.query.id, { enrolledCourses: enrolledCourses })
            if (updatedTrainee)
                res.status(200).json({
                    message: "Video seen!"
                })
            else
                res.status(400).json({
                    message: "Something went wrong!"
                })
        }
    }

})

module.exports = { changePassword, myCourses, registerForCourse, watchVideoC, videoSeenC }