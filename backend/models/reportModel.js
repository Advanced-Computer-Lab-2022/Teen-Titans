const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
    userid: {
        type: Number
    },
    courseid: {
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