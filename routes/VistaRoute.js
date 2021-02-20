const express = require('express')
const { getPregunta, getPreguntas, getVista2 } = require('../controllers/vista1Controller')
const api = express.Router()

api.get('/vista1', getVista2)
api.get('/pregunta', getPregunta)
api.get('/preguntas', getPreguntas)
module.exports = api