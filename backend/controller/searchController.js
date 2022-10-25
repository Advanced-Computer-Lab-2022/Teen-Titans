const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')

const course = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.send(400)
        throw new Error('Please enter a search keyword')
    }
    else {
        const searchResults = await courseModel.find({title: req.params['searchInput']} || {instructorName: req.params['searchInput']} || {subject: req.params['searchInput']})
        console.log(req.params['searchInput']);
        res.json(searchResults)
    }
})

module.exports = course