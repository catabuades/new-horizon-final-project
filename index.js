const path = require('path')

global.__base = path.join(__dirname, 'server')

// require('./server/models/Bike')
// require('./server/models/Booking')

const app = require('./server/app')
const db = require('./server/config/db')

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/newHorizon'
const PORT = process.env.PORT || 3000

console.log(`Connecting to ${DB_URI}...`)

db.openUri(DB_URI)
app.listen(PORT)

console.log(`Listening on port ${PORT}...`)
