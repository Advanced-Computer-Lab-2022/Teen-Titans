const asyncHandler = require('express-async-handler')
const corporateTraineeModel = require('../models/corporateTraineeModel')
const courseModel = require('../models/courseModel')
const videoModel = require('../models/videoModel')
const nodemailer = require('nodemailer')
const subtitleModel = require('../models/subtitleModel')


const watchPreviewVideo = asyncHandler(async (req, res) => {
    //const user = await individualTraineeModel.findById(req.query.id);
    // let enrolledCourses = user.enrolledCourses;
    let videoUrl = ''
    const course = await courseModel.findById(req.query.courseId)
        const video =course.previewVideo
        videoUrl = video.url
        VideoShortDescription = video.shortDescription
        res.status(200).json(video)
    
    

})
const viewMostPopularCourses = asyncHandler(async(req,res)=>{
    const popularCourses = await courseModel.find({}, { _id: 1, rating: 1, hours: 1, title: 1 ,price:1,numberOfEnrolledStudents:1}).sort({numberOfEnrolledStudents:-1}).limit(5)
    res.status(200).json(popularCourses)
})


module.exports= {watchPreviewVideo,viewMostPopularCourses}