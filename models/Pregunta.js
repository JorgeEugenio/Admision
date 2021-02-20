const mongoose = require('mongoose')
const { appConfig} = require('../config')

const Schema = mongoose.Schema

const preguntaSchema = Schema({
    "_id": Number,
    "answer": String,
    "category": String,
    "difficulty": String,
    "question": String,
    "imgUrl": String
    
},{
    timestamps: true
})

preguntaSchema.methods.setImgUrl = function setImgUrl(filename){
    const { host, port} = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Pregunta', preguntaSchema)