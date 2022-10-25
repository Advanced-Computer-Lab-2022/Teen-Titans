const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')

const course = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.send(400)
        throw new Error('Please enter a search keyword')
    }
    else {
        let finalSearchResults = []
        const searchResults = await courseModel.find({})
        for (let course of searchResults) {
            if (course.title == req.params['searchInput'] || course.instructorName == req.params['searchInput'] || course.subject == req.params['searchInput']) {
                finalSearchResults.push(course)
            }
        }
        console.log(req.params['searchInput']);
        res.json(finalSearchResults)
    }
})

module.exports = course