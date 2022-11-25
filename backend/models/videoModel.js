const mongoose = require('mongoose')

const videoSchema = mongoose.Schema(
    {
        url: {
            type: String,
            required: true
        },
        shortDescription: {
            type: String,
            required: true
        }
    }

)

module.exports = mongoose.model('video', videoSchema)