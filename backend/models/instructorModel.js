const mongoose = require('mongoose')
const courseModel = require('./courseModel')

const instructorSchema = mongoose.Schema({
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
    biography: {
        type: String
    },
    moneyOwed: {
        type: Number
    },
    rating: {
        type: Number
    },
    reviews: [{
        type: String
    }],
    courses: [courseModel.schema]
})
module.exports = mongoose.model('instructor', instructorSchema)