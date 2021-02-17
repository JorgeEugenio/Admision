const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categoriaSchema = Schema({
    "_id": Number,
    "name": String,
    
},{
    timestamps: true
})


module.exports = mongoose.model('Categoria', categoriaSchema)