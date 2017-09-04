const express = require('express')
const router = express.Router()

// handlers for home
const showHome = require('./handlers/showHome')
const handlerSearchHome = require('./handlers/handlerSearchHome')
const showSearchResults = require('./handlers/showSearchResults')
const showContact = require('./handlers/showContact')
const showCatalogue = require('./handlers/showCatalogue')
const showBikeInfo = require('./handlers/showBikeInfo')
const handlerAddToCard = require('./handlers/handlerAddToCard')

// handlers for booking
const showStep1 = require('../booking/handlers/showStep1_BookingCustom')
const showStep2 = require('../booking/handlers/showStep2_BookingPersonalInfo')
const showStep3 = require('../booking/handlers/showStep3_BookingPayment')
const showStep4 = require('../booking/handlers/showStep4_BookingConfirmation')
const handlerClientInfo = require('../booking/handlers/handlerClientInfo')
// const handlerAdminReservas = require('./a-admin-reservas/handlerAdminReservas')
// const handlerAdminDispo = require('./a-admin-dispo/handlerAdminDispo')
// const handlerAdminManual = require('./a-admin-manual/handlerAdminManual')

router.get('/', showHome)
router.get('/search-results', showSearchResults)
router.get('/contact', showContact)
router.get('/catalogue', showCatalogue)
router.get('/bike-info/:title', showBikeInfo)

// !!!!!!!!!!!!!!!!!!
router.get('/apiResults', handlerSearchHome)

router.get('/step_1', showStep1)
router.get('/step_2', showStep2)
router.post('/clientInfo', handlerClientInfo)
router.get('/step_3', showStep3)
router.get('/step_4', showStep4)
router.post('/card/:bikeID', handlerAddToCard)

// router for Admin Reservas (ANGULAR)
// router.get('/admin', handlerAdminReservas)
// router.get('/disponibilidad', handlerAdminDispo)
// router.get('/reserva-manual', handlerAdminManual)

module.exports = router
