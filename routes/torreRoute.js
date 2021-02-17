const express = require('express')
const { addTorre, getTorres, getTorre,updateTorre,deleteTorre } = require('../controllers/torreController')
const api = express.Router()

//api.post('/torre',torreController.addTorre)
api.post('/torre', addTorre)
api.get('/torre', getTorres)
api.get('/torre/:id', getTorre)
api.put('/torre/:id', updateTorre)
api.delete('/torre/:id',deleteTorre)
module.exports = api