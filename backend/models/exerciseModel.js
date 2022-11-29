const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema({
    questionOne: {
        question: { type: String },
        answer: {
            type: String
        },
        options: [{ id: 0, Text: String, isCorrect: Boolean },
        { id: 1, Text: String, isCorrect: Boolean },
        { id: 2, Text: String, isCorrect: Boolean },
        { id: 3, Text: String, isCorrect: Boolean },]


    },
    questionTwo: {
        question: { type: String },
        answer: {
            type: String
        },
        options: [{ id: 0, Text: String, isCorrect: Boolean },
        { id: 1, Text: String, isCorrect: Boolean },
        { id: 2, Text: String, isCorrect: Boolean },
        { id: 3, Text: String, isCorrect: Boolean },]
    },
})
module.exports = mongoose.model('exercise', exerciseSchema)