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
        endDate: {
            type: Date
        }
        // duration: {
        //     type: String
        // }
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
    previewVideo: videoModel.schema,
    courseOutline: {
        type: String
    },
    exercise: exerciseModel.schema,
    
    numberOfEnrolledStudents:{
        type: Number
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('course', courseSchema)