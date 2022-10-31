const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')
const instructorModel = require('../models/instructorModel')
const course = require('./searchController')

const createCourse = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error("Please fill in all fields!")
    }
    else {
        let totalHours = 0;
        for (let subtitle of req.body.subtitles) {
            totalHours += subtitle.hours
        }
        const course = await courseModel.create({
            hours: totalHours,
            rating: 0,
            reviews: [],
            title: req.body.title,
            price: req.body.price,
            discount: 0,
            subject: req.body.subject,
            instructorId: req.body.instructorId,
            instructorName: req.body.instructorName,
            subtitles: req.body.subtitles,
            shortSummary: req.body.shortSummary,
            previewVideo: {
                url: '',
                shortDescription: ''
            },
            courseOutline: ''
        })
        const instructor = await instructorModel.findById(req.body.instructorId)
        const instructorCourses = instructor.courses
        instructorCourses.push({
            id: course._id,
            title: req.body.title
        })
        const updatedInstructor = await instructorModel.findByIdAndUpdate(req.body.instructorId, { courses: instructorCourses })
        const instructor = await instructorModel.findById(req.body.instructorId)
        const instructorCourses = instructor.courses
        instructorCourses.push({
            id: course._id,
            title: req.body.title,
            subject: req.body.subject
        })
        const updatedInstructor = await instructorModel.findByIdAndUpdate(req.body.instructorId, { courses: instructorCourses })
        res.status(200).json(course)

    }
})

module.exports = { createCourse }