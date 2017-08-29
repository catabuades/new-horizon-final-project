const express = require('express')
const router = express.Router()

// handlers for home
const handlerHome = require('./home/handlerHome')
const handlerSearchHome = require('./home/handlerSearchHome')

// handlers for search-result
const handlerSearchResult = require('./search-results/handlerSearchResult')

// handlers for contact
const handlerContact = require('./contact/handlerContact')

// handlers for catalogue
const handlerCatalogue = require('./catalogue/handlerCatalogue')

// handlers for booking
const handlerBookingCustom = require('./booking/handlerBookingCustom')
const handlerBookingPersonalInfo = require('./booking/handlerBookingPersonalInfo')
const handlerBookingPayment = require('./booking/handlerBookingPayment')
const handlerBookingConfirmation = require('./booking/handlerBookingConfirmation')

// handlers for bike-info
const handlerBikeInfo = require('./bike-info/handlerBikeInfo')

// handlers for Admin Reservas (ANGULAR)
const handlerAdminReservas = require('./a-admin-reservas/handlerAdminReservas')

// handlers for Admin Disponibilidad (ANGULAR)
const handlerAdminDispo = require('./a-admin-dispo/handlerAdminDispo')

// handlers for Admin Reserva Manual (ANGULAR)
const handlerAdminManual = require('./a-admin-manual/handlerAdminManual')

// router for home
router.get('/', handlerHome)
router.post('/apiResults', handlerSearchHome)

// router for search-result
router.get('/search-results', handlerSearchResult)

// router for contact
router.get('/contact', handlerContact)

// router for catalogue
router.get('/catalogue', handlerCatalogue)

// router for booking
router.get('/booking-step1', handlerBookingCustom)
router.get('/booking-setp2', handlerBookingPersonalInfo)
router.get('/booking-setp3', handlerBookingPayment)
router.get('/booking-setp4', handlerBookingConfirmation)

// router for bike-info
router.get('/bike-info', handlerBikeInfo)

// router for Admin Reservas (ANGULAR)
router.get('/admin', handlerAdminReservas)

// router for Admin Disponibilidad (ANGULAR)
router.get('/disponibilidad', handlerAdminDispo)

// router for Admin Reserva Manual (ANGULAR)
router.get('/reserva-manual', handlerAdminManual)

module.exports = router
