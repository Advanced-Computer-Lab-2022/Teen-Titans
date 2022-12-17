
const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    userid: {
        type: String
    },
    courseid: {
        type: String
    },
    status: {
        type: String
    },
})

module.exports = mongoose.model('request', requestSchema)