const express = require('express')
const { getVista1 } = require('../controllers/vista1Controller')
const api = express.Router()

api.get('/vista1', getVista1)
module.exports = api