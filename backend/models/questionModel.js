
const mongoose = require('mongoose')

const questionSchema = mongoose.Schema(
    {
        question: { type: String },

        options: {
            optionOne: { id: 0, Text: String, isCorrect: Boolean },
            optionTwo: { id: 1, Text: String, isCorrect: Boolean },
            optionThree: { id: 2, Text: String, isCorrect: Boolean },
            optionFour: { id: 3, Text: String, isCorrect: Boolean }
        }
    }

)

module.exports = mongoose.model('question', questionSchema)



