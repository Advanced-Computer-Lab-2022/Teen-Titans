
const mongoose = require('mongoose')

const questionSchema = mongoose.Schema(
    {
        question: {type:String},

        options:[{id:0,Text:String,isCorrect:Boolean},
        {id:1,Text:String,isCorrect:Boolean},
        {id:2,Text:String,isCorrect:Boolean},
        {id:3,Text:String,isCorrect:Boolean},]
    }

)

module.exports = mongoose.model('question', questionSchema)



 