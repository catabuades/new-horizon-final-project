const express = require('express')
const router = express.Router()

const addBike = require('./handlers/addBike')
const getAllBikes = require('./handlers/getAllBikes')

router.get('/bikes', getAllBikes)
router.post('/bikes', addBike)

module.exports = router
