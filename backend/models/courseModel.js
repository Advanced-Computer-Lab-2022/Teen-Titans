const mongoose = require('mongoose')
const subtitleModel = require('./subtitleModel');
const {objectId} = mongoose.Schema;

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
    discount:  {
        amount:{
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
    subtitles: [subtitleModel.schema]
    ,
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
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('course', courseSchema)