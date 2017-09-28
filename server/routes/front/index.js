const express = require('express')
const router = express.Router()

// handlers for home
const showHome = require('./handlers/showHome')
// const handlerSearchHome = require('./handlers/handlerSearchHome')
const showSearchResults = require('./handlers/showSearchResults')
const showContact = require('./handlers/showContact')
const showCatalogue = require('./handlers/showCatalogue')
const showBikeInfo = require('./handlers/showBikeInfo')
const handlerAddToCart = require('./handlers/handlerAddToCart')

const showStep1BookingCustom = require('./handlers/booking/showStep1_BookingCustom')
const showStep2BookingPersonalInfo = require('./handlers/booking/showStep2_BookingPersonalInfo')
const showStep3BookingPayment = require('./handlers/booking/showStep3_BookingPayment')
const showStep4BookingConfirmation = require('./handlers/booking/showStep4_BookingConfirmation')

const handlerClientInfo = require('./handlers/booking/handlerClientInfo')
const deleteBike = require('./handlers/booking/handlerDelete')

const handlerSendBookings = require('./handlers/booking/handlerGetBooks')

router.get('/', showHome)
router.get('/search-results', showSearchResults)
router.get('/contact', showContact)
router.get('/catalogue', showCatalogue)
router.get('/bike-info/:title', showBikeInfo)
router.post('/cart/:bikeId', handlerAddToCart)

// router.get('/apiResults', handlerSearchHome)

router.get('/step_1', showStep1BookingCustom)
router.get('/step_2', showStep2BookingPersonalInfo)
router.get('/step_3', showStep3BookingPayment)
router.get('/step_4', showStep4BookingConfirmation)

router.post('/clientInfo', handlerClientInfo)
router.delete('/cart/:bikeId', deleteBike)

router.get('/api/getBooks', handlerSendBookings)

module.exports = router
