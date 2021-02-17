const express = require('express')
const { addPregunta, getPreguntas, getPregunta,updatePregunta,deletePregunta } = require('../controllers/preguntaController')
const api = express.Router()

//api.post('/categoria',categoriaController.addPregunta)
api.post('/pregunta', addPregunta)
api.get('/pregunta', getPreguntas)
api.get('/pregunta/:id', getPregunta)
api.put('/pregunta/:id', updatePregunta)
api.delete('/pregunta/:id',deletePregunta)
module.exports = api