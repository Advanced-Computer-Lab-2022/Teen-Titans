const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    hours: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviews: [{
        type: String
    }],
    title: {
        type: String,
        required: type
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
    subject: {
        type: String,
        required: true
    },
    instructor: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    subtitle:
    
     [{
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
            type: String,
            required: true
        },
        shortDescription: {
            type: String,
            required: true
        }
    },
    courseOutline: {
        type: String,
        required: true
    }
    
},{
    timestamps: true
})

module.exports = mongoose.model('course', courseSchema)