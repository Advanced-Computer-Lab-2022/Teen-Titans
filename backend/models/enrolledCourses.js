const mongoose = require('mongoose')
const courseModel = require('./courseModel')

const enrolledCoursesSchema = mongoose.Schema({
    course: courseModel.schema,
    percentageComplete: {
        type: Number
    }
})

module.exports = mongoose.model('enrolledCourses', enrolledCoursesSchema)