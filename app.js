const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')
//const productsRoutes = require('./routes/product')
const Categoria = require('./routes/CategoriaRoute')//const puntuacionesRoute = require('./routes/puntuaciones2Route')
const Pregunta = require('./routes/PreguntaRoute')//const puntuacionesRoute = require('./routes/puntuaciones2Route')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// middlewares
app.use(morgan('dev'));
app.use(express.json());

//app.use('/v1',productsRoutes)
app.use('/v1',Categoria)
app.use('/v1',Pregunta)
//app.use('/v1',puntuacionesRoute)
//app.use('/public', express.static(`${__dirname}/storage/imgs`))
app.use(express.static(`${__dirname}/public`))
module.exports = app