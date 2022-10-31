const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')

const createCourse = asyncHandler(async (req,res) => {
    if(!req.body) {
        res.status(400)
        throw new Error("Please fill in all fields!")
    } 
    else {
        const course = await courseModel.create({
            hours: 0,
            rating: 0,
            reviews: [],
            title: req.body.title,
            price: req.body.price,
            discount: 0,
            subject: '',
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
        res.status(200).json(course)
    
}
})

module.exports = {createCourse}