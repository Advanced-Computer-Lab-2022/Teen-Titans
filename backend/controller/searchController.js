const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')

const courses = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.send(400)
        throw new Error('Please enter a search keyword')
    }
    else {
        const searchResults = await courseModel.find({
            $or: [{ title: { $regex: req.params['searchInput'] } },
            { instructorName: { $regex: req.params['searchInput'] } }, { subject: { $regex: req.params['searchInput'] } }]
        })
        res.json(searchResults)

    }
})

module.exports = courses