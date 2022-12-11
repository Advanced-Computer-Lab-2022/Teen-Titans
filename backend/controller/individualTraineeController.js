const asyncHandler = require('express-async-handler')
const individualTraineeModel = require('../models/individualTraineeModel')
const courseModel = require('../models/courseModel')
const videoModel = require('../models/videoModel');

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



//not working properly yet.................

const registerForCourse = asyncHandler(async (req, res) => {
    const findUser = await individualTraineeModel.findById(req.body.id);
    const course = await courseModel.findById(req.body.courseId);
    const courses = findUser.enrolledCourses
    courses.push({
        course: course,
        videosSeen: [],
        numberComplete: 0,
        percentageComplete: 0
    })
    // console.log(courses);
    const user = await individualTraineeModel.findByIdAndUpdate(req.body.id, { enrolledCourses: courses })
    if (user)
        res.status(200).json({
            message: 'Registration Successful!'
        })
    else
        res.status(400).json({
            message: 'Registration Unsuccessful!'
        })
})

const viewMyCourses = asyncHandler(async (req, res) => {
    const user = await individualTraineeModel.findById(req.query.id);
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

const recursiveFunction = function (arr, x, start, end) {

    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x
    if (arr[mid] === x) return true;

    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x)
        return recursiveFunction(arr, x, start, mid - 1);
    else

        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid + 1, end);
}

const watchVideo = asyncHandler(async (req, res) => {
    const user = await individualTraineeModel.findById(req.query.id);
    // let enrolledCourses = user.enrolledCourses;
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

const videoSeen = asyncHandler(async (req, res) => {
    const trainee = await individualTraineeModel.findById(req.query.id)
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
            const updatedTrainee = await individualTraineeModel.findByIdAndUpdate(req.query.id, { enrolledCourses: enrolledCourses })
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

module.exports = { changePassword, signUp, registerForCourse, viewMyCourses, watchVideo, videoSeen }