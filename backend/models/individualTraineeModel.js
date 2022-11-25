const mongoose = require('mongoose')
const courseModel = require('./courseModel')
const Schema = mongoose.Schema

const individualTraineeSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    wallet: {
        type: Number,
        required: true
    },
    enrolledCourses: [courseModel.schema]
})

module.exports = mongoose.model('individualTrainee', individualTraineeSchema)