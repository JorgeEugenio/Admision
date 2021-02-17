const mongoose = require('mongoose')

const Schema = mongoose.Schema

const preguntaSchema = Schema({
    "_id": Number,
    "answer": String,
    "category": String,
    "difficulty": String,
    "question": String,
    
},{
    timestamps: true
})


module.exports = mongoose.model('Pregunta', preguntaSchema)