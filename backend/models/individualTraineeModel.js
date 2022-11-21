const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
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
        type: ObjectId,
        ref: "course"
    }]
})

module.exports = mongoose.model('individualTrainee', individualTraineeSchema)