const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')

const getCourses = async (req, res) => {
    const courses = await courseModel.find({}, { _id: 1, rating: 1, hours: 1, title: 1 })

    res.status(200).json(courses)
}

const getPrices = async (req, res) => {
    const prices = await courseModel.find({}, { _id: 0, title: 1, price: 1 })

    res.status(200).json(prices)
}

const viewCourseOnHover = asyncHandler(async (req, res) => {
    const viewCourse = await courseModel.find({ id: req.params['id'] })
    let subtitles = []
    for (let subtitle of viewCourse[0].subtitles) {
        subtitles.push(subtitle)
    }
    const courseData = {
        title: viewCourse[0].title,
        totalHours: viewCourse[0].hours,
        price: viewCourse[0].price,
        discount: 0,
        subtitles: subtitles,
        exercises: viewCourse[0].exercises
    }
    res.json(courseData)
})


module.exports = { getCourses, getPrices, viewCourseOnHover }