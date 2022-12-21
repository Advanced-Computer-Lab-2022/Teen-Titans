
const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({
    oneStar: {
        type: Number
    },
    twoStar: {
        type: Number
    },
    threeStar: {
        type: Number
    },
    fourStar: {
        type: Number
    },
    fiveStar: {
        type: Number
    },
})

module.exports = mongoose.model('rating', ratingSchema)