const express = require('express')
const { addPregunta, getPreguntas, getPregunta,updatePregunta,deletePregunta } = require('../controllers/preguntaController')
const api = express.Router()

//api.post('/categoria',categoriaController.addPregunta)
api.post('/preguntadetalle', addPregunta)
api.get('/preguntadetalle', getPreguntas)
api.get('/preguntadetalle/:id', getPregunta)
api.put('/preguntadetalle/:id', updatePregunta)
api.delete('/preguntadetalle/:id',deletePregunta)
module.exports = api