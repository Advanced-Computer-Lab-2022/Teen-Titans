const mongoose = require('mongoose')
const ratingsModel = require('./ratingsModel')
const courseSchema = mongoose.Schema({
    hours: {
        type: Number
    },
    rating: {
        type: Number
    },
   
    ratings: ratingsModel.schema,
    reviews: [{
        type: String
    }],
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
    subject: {
        type: String
    },
    instructorName: {
        type: String,
        required: true
    },
    instructorId: {
        type: String,
        required: true
    },
    subtitles: [{
        hours: {
            type: String,
            required: true
        }, 
        videos: [{
            url: {
                type: String,
                required: true
            },
            shortDescription: {
                type: String,
                required: true
            }
        }],
        exercises: [{
            type: String,
            required: true
        }]
    }],
    shortSummary:{
        type: String,
        required: true
    },
    previewVideo: {
        url: {
            type: String
        },
        shortDescription: {
            type: String
        }
    },
    courseOutline: {
        type: String
    }
    
},{
    timestamps: true
})

module.exports = mongoose.model('course', courseSchema)