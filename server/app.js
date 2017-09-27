const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

const app = express()

const routesApp = require('./routes/front/')
// const routesBooking = require('./routes/booking/')
const routesApi = require('./routes/api/')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.locals.pretty = true

app.use(express.static(path.join(__dirname, '../client')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'ThisIsNewHorizonCookie',
  keys: ['jksjlfskjfeoiwjl'],
  maxAge: 24 * 60 * 60 * 1000
}))

app.use((req, res, next) => {
	// ESTO ES MI CARRO
  req.session.cart = req.session.cart || []
  req.session.dates = req.session.dates || {}
  next()
})

app.use(routesApp)
// app.use('/booking/', routesBooking)
app.use('/api/', routesApi)

module.exports = app
