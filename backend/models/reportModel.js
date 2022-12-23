
const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
    userId: {
        type: Number
    },
    user:{
    type: String
    },
    courseId: {
        type: Number
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
})

module.exports = mongoose.model('report', reportSchema)