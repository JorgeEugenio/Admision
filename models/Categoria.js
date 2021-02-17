const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categoriaSchema = Schema({
    _1: String, //Categoria o MT001
    _2: String,//Rimac001, Tienda Delia
    _3: String,
    _4: String,
    _5: String,
},{
    timestamps: true
})


module.exports = mongoose.model('Categoria', categoriaSchema)