const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
// const routesApp = require('./routes')

const PORT = process.env.PORT || 3001

// app.set('view engine', 'pug')
// app.locals.pretty = true

app.use(express.static(path.join(__dirname, 'client')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(routesApp)

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/pages/home.html'))
// })

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
