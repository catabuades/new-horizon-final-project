const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesApp = require('./routes/root/')
const routesBooking = require('./routes/booking/')
const routesApi = require('./routes/api/')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.locals.pretty = true

app.use(express.static(path.join(__dirname, '../client')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routesApp)
app.use('/booking/', routesBooking)
app.use('/api/', routesApi)


module.exports = app
