const express = require('express')
const router = express.Router()

const addBike = require('./handlers/addBike')
const getAllBikes = require('./handlers/getAllBikes')
const bookBikes = require('./handlers/bookBikes')

router.get('/bikes', getAllBikes)
router.post('/bikes', addBike)
router.post('/book-bikes', bookBikes)

module.exports = router
