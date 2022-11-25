const mongoose = require('mongoose')
const subtitleModel = require('./subtitleModel')
const exerciseModel = require('./exerciseModel')
const { ObjectId } = mongoose.Schema;
const courseSchema = mongoose.Schema({
    hours: {
        type: Number
    },
    rating: {
        type: Number
    },
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
    subtitles: [subtitleModel.schema],
    shortSummary: {
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
    },
    exercise: exerciseModel.schema

}, {
    timestamps: true
})

module.exports = mongoose.model('course', courseSchema)