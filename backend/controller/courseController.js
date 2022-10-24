const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')

const viewCourseOnHover = asyncHandler(async (req, res) => {
    const viewCourse = await courseModel.find({id: req.params['id']})
    let videos = []
    for(let subtitle of viewCourse[0].subtitles){
        for(let video of subtitle.videos){
            videos.push(video.shortDescription)
        }
    }
    const courseData = {
        title: viewCourse[0].title,
        totalHours: viewCourse[0].hours,
        price: viewCourse[0].price,
        discount: 0,
        subtitles: videos,
        exercises: viewCourse[0].exercises
    }
    res.json(courseData)
})

module.exports = viewCourseOnHover