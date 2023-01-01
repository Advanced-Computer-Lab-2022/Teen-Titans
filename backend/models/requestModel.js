const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    userId: {
        type: String
    },
    courseId: {
        type: String
    },
    status: {
        type: String
    },
    type: {
        type: String
    }
    ,
    username: {
        type: String
    }
    ,
    courseTitle: {
        type: String
    }
    ,
    coursePrice: {
        type: Number
    }
})

module.exports = mongoose.model('request', requestSchema)