const mongoose = require('mongoose')
const subtitleModel = require('./subtitleModel')
const exerciseModel = require('./exerciseModel')
const videoModel = require('./videoModel')
const ratingsModel = require('./ratingsModel')
// const { ObjectId } = mongoose.Schema;

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
        amount: {
            type: Number,

        },
        duration: {
            type: String
        }
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
        subtitleId: {
            type: String
        },
        subtitleHours: {
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
    shortSummary: {
        type: String,
        required: true
    },
    previewVideo: videoModel.schema,
    courseOutline: {
        type: String
    },
    exercise: exerciseModel.schema

}, {
    timestamps: true
})

module.exports = mongoose.model('course', courseSchema)