const mongoose = require('mongoose')

const Schema = mongoose.Schema

const torreSchema = Schema({
    TipoTorre: String, //Torre o MT001
    nombreTorre: String,//Rimac001, Tienda Delia
    descripcionTorre: String,
    direccionTorre: {
        departamento: String,
        provincia: String,
        distrito: String,
        programa: String,
        mzlt: String,
    },
    statusTorre: String
},{
    timestamps: true
})


module.exports = mongoose.model('Torre', torreSchema)