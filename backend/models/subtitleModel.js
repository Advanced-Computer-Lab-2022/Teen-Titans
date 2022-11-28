const mongoose = require('mongoose')
const videoModel = require('./videoModel')
const exerciseModel = require('./exerciseModel')
const subtitleSchema = mongoose.Schema(
    {  
        title: {
            type: String, 
            required: true
        },

        subtitleHours: {
            type: String,
        },
        videos: [videoModel.schema],
        exercise: exerciseModel.schema
    }

)

module.exports = mongoose.model('subtitle', subtitleSchema)