const mongoose = require('mongoose')
const courseModel = require('./courseModel')
const enrolledCourses = require('./enrolledCourses')
const videoModel = require('./videoModel')
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
    enrolledCourses: [{
        course: courseModel.schema,
        videosSeen: [{ type: String }],
        numberComplete: { type: Number },
        percentageComplete: { type: Number }
    }]
})

module.exports = mongoose.model('individualTrainee', individualTraineeSchema)