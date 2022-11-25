const mongoose = require('mongoose')
const courseModel = require('./courseModel')
const Schema = mongoose.Schema
const corporateTraineeSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    country: {
        type: String
    },
    enrolledCourses: [courseModel.schema]
})

module.exports = mongoose.model('corporateTrainee', corporateTraineeSchema)