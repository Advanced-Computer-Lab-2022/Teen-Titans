
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
})

module.exports = mongoose.model('report', reportSchema)