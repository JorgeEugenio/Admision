const express = require('express')
const { addCategoria, getCategorias, getCategoria,updateCategoria,deleteCategoria } = require('../controllers/categoriaController')
const api = express.Router()

//api.post('/categoria',categoriaController.addCategoria)
api.post('/categoria', addCategoria)
api.get('/categoria', getCategorias)
api.get('/categoria/:id', getCategoria)
api.put('/categoria/:id', updateCategoria)
api.delete('/categoria/:id',deleteCategoria)
module.exports = api