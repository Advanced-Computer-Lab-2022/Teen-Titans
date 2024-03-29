const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')
const individualTraineeModel = require('../models/individualTraineeModel')
const instructorModel = require('../models/instructorModel')
const getCourses = async (req, res) => {
    console.log("getcourses")
    const courses = await courseModel.find({}, { _id: 1, rating: 1, hours: 1, title: 1, instructorName: 1, subject: 1, price: 1, courseOutline: 1 })

    res.json(courses)
}

const getPrices = async (req, res) => {
    const prices = await courseModel.find({}, { _id: 1, title: 1, price: 1, rating: 1, hours: 1, instructorName: 1, subject: 1, courseOutline: 1, previewVideo: 1 })

    res.status(200).json(prices)
}

const viewCourseOnHover = asyncHandler(async (req, res) => {
    const viewCourse = await courseModel.findById(req.query.id)
    let subtitles = []
    for (let subtitle of viewCourse.subtitles) {
        // let videos = []
        // for (let video of subtitle.videos) {
        //     videos.push(video.shortDescription)
        // }
        subtitles.push({
            title: subtitle.title,
            hours: subtitle.subtitleHours,
            video: subtitle.video,
            exercise: subtitle.exercise
        })
    }
    const courseData = {
        id: viewCourse.id,
        title: viewCourse.title,
        totalHours: viewCourse.hours,
        price: viewCourse.price,
        discount: viewCourse.discount,
        courseOutline: viewCourse.courseOutline,
        previewVideo: viewCourse.previewVideo,
        subtitles: subtitles

    }
    res.json(courseData)
})

const opencourse = asyncHandler(async (req, res) => {
    const viewCourse = await courseModel.findById(req.query.courseId)
    res.status(200).json(viewCourse)
//     const instructor = await instructorModel.findById(req.query.id)
//     console.log("id  backend" ,req.query.id)
// console.log(instructor.courses)
//     let viewCourse;
//     for (let i = 0; i < instructor.courses.length; i++) {
//         console.log("course id " ,instructor.courses[i]._id)
//         if (instructor.courses[i]._id == req.query.courseId) {
//             console.log(courses[i].title)
//             viewCourse = instructor.courses[i]
//             res.status(200).json(viewCourse)
//         }
//     }
//     if (!viewCourse)
//         res.status(400).json({
//             message: "Course not found!"
//         })
    
})

const filterRating = asyncHandler(async (req, res) => {
    const rating = req.query.rating
    const x = await courseModel.find({ rating: rating })

    if (x.length > 0) {
        console.log("hello")
        res.status(200).json(x);
    }
    else {
        res.status(400).json({ error: "no results" })
    }
})

const filterPrice = asyncHandler(async (req, res) => {
    const price = req.query.price
    const y = await courseModel.find({ price: { $lte: price } })
    if (y.length > 0) {
        res.status(200).json(y);
    }
    else {
        res.status(400).json({ error: "no results" })
    }
})

const filterSubject = asyncHandler(async (req, res) => {
    const subject = req.query.subject
    const y = await courseModel.find({ subject: subject })
    if (y.length > 0) {
        res.status(200).json(y);
    }
    else {
        res.status(400).json({ error: "no results" })
    }
})

module.exports = { getCourses, getPrices, filterRating, filterPrice, filterSubject, viewCourseOnHover, opencourse }