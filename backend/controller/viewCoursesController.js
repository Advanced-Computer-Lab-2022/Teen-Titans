const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')

const getCourses = async (req, res) => {
    const courses = await courseModel.find({}, { _id: 1, rating: 1, hours: 1, title: 1 })

    res.status(200).json(courses)
}

const getPrices = async (req, res) => {
    const prices = await courseModel.find({}, { _id: 1, title: 1, price: 1 })

    res.status(200).json(prices)
}

const viewCourseOnHover = asyncHandler(async (req, res) => {
    const viewCourse = await courseModel.findById(req.params['id'])
    let subtitles = []
    for (let subtitle of viewCourse.subtitles) {
        let videos = []
        for (let video of subtitle.videos) {
            videos.push(video.shortDescription)
        }
        subtitles.push({
            hours: subtitle.hours,
            videos: videos,
            exercises: subtitle.exercises
        })
    }
    const courseData = {
        title: viewCourse.title,
        totalHours: viewCourse.hours,
        price: viewCourse.price,
        discount: viewCourse.discount,
        subtitles: subtitles
    }
    res.json(courseData)
})


module.exports = { getCourses, getPrices, viewCourseOnHover }