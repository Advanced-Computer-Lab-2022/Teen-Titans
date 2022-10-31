const mongoose = require('mongoose')

const individualTraineeSchema = mongoose.Schema({
    username: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    email: {
        type: String,
        required:true
    }, 
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required:true
    },
    country: {
        type: String,
        required:true
    },
    wallet: {
        type: Number,
        required: true
    },
    enrolledCourses: [{
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }]
})

module.exports = mongoose.model('individualTrainee', individualTraineeSchema)