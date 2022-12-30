
const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
    userId: {
        type: String
    },
    user:{
    type: String
    },
    courseId: {
        type: String
    },
    type: {
        type: String
    },
   problem: {
        type: String
    },
    status: {
        type: String
    },
    username: {
        type: String
    }
    ,
    courseTitle: {
        type: String
    }
    ,
    new:
    {   type: Boolean

    }
})

module.exports = mongoose.model('report', reportSchema)