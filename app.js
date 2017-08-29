const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const routesApp = require('./routes')

const PORT = process.env.PORT || 3001

app.set('view engine', 'pug')
app.locals.pretty = true

app.use(express.static(path.join(__dirname, 'client')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routesApp)

// PUG ROUTES
// app.get('/', (req, res) => {
//   res.render('pages/home')
// })

// app.post('/apiResults', (req, res) => {
//   console.log(req.body)
//   res.redirect('search-result')
// })

// app.get('/search-result', (req, res) => {
//   res.render('pages/search-result')
// })

// app.get('/contact', (req, res) => {
//   res.render('pages/contact')
// })

// app.get('/catalogue', (req, res) => {
//   res.render('pages/catalogue')
// })

// app.get('/booking-step1', (req, res) => {
//   res.render('pages/booking-step1')
// })

// app.get('/booking-step2', (req, res) => {
//   res.render('pages/booking-step2')
// })

// app.get('/booking-step3', (req, res) => {
//   res.render('pages/booking-step3')
// })

// app.get('/booking-step4', (req, res) => {
//   res.render('pages/booking-step4')
// })

// app.get('/bike-info', (req, res) => {
//   res.render('pages/bike-info')
// })

// ANGULAR ROUTES
// app.get('/admin', (req, res) => {
//   res.redirect('/#!/reservas')
// })

// app.get('/disponibilidad', (req, res) => {
//   res.redirect('/#!/disponibilidad')
// })

// app.get('/reserva-manual', (req, res) => {
//   res.redirect('/#!/reserva-manual')
// })

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
