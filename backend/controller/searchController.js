const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')

const courses = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.send(400)
        throw new Error('Please enter a search keyword')
    }
    else {
        const searchResults = await courseModel.find({
            $or: [{ title: { $regex: req.query.searchInput } },
            { instructorName: { $regex: req.query.searchInput } }, { subject: { $regex: req.query.searchInput } }]
        })
        if (searchResults) {
            res.status(200).json(searchResults)
        }

    }
})

module.exports = courses