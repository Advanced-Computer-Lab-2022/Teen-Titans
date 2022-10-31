const mongoose = require('mongoose')

const corporateTraineeSchema = mongoose.Schema({
    username: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
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
    enrolledCourses: [{
        id: {
            type: String
        },
        title: {
            type: String
        }
    }]
})

module.exports = mongoose.model('corporateTrainee', corporateTraineeSchema)