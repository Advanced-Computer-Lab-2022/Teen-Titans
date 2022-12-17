const asyncHandler = require('express-async-handler')
const corporateTraineeModel = require('../models/corporateTraineeModel')
const courseModel = require('../models/courseModel')
const videoModel = require('../models/videoModel')
const nodemailer = require('nodemailer')
const subtitleModel = require('../models/subtitleModel')
const requestModel = require('../models/requestModel')

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
    const courses = findUser.enrolledCourses
    courses.push(req.body.courseId)
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
            const courseDetails = await courseModel.findById(enrolledCourses[i].id)
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
            if (user.enrolledCourses[i].id == req.query.courseId) {
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



const checkAccess = asyncHandler(async (req, res) => {
    console.log("inside check access");
    const user = await corporateTraineeModel.findById(req
        .query.traineeId);
  
   if(user){
    // console.log(user);
    let enrolledCourses = user.enrolledCourses;
    for (let i = 0; i < user.enrolledCourses.length; i++) {
        if (user.enrolledCourses[i].id == req.query.courseId) {
          
            res.status(200).json(user)
        }
      
}

res.status(400).json({
    message: 'Unauthorized Access!'
})
}
console.log(res.status);
})


const requestAccess = asyncHandler(async (req, res) => {
    console.log("inside request access");
    const request = await requestModel.create({userid:req.query.traineeId,
        courseid:req.query.courseId,status:"pending",type:"corporate"});
    if(request){
        res.status(200).json({
            message: 'Request Sent!',request
        })
    }
    else
        res.status(400).json({
            message: 'Request Failed!'
        })
})



    

module.exports = { changePassword, myCourses, registerForCourse, watchVideoC, checkAccess, requestAccess }