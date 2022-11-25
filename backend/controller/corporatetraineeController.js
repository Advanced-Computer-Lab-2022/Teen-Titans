const asyncHandler = require('express-async-handler')
const courseModel = require('../models/courseModel')



const course = asyncHandler(async (req, res) => {
    let filterResults
    if (!req.body) {
        res.send(400)
        throw new Error('Please enter course title and course subttitle')
    }
    else {
        filterResults = await courseModel.find({
         
                  title: { $regex: req.params['title'] }             
          
        })
        res.json(filterResults)
    }
})


module.exports = {course}