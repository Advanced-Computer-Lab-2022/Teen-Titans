const mongoose = require('mongoose')
const ratingsModel = require('./ratingsModel')
const instructorSchema = mongoose.Schema({
    username: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    ratings: ratingsModel.schema,
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
    courses: [{
        id: {
            type: String
        },
        title: {
            type: String
        }
    }]
})
module.exports = mongoose.model('instructor', instructorSchema)