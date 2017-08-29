const express = require('express')
const router = express.Router()

// handlers for home
const showHome = require('./handlers/showHome')
const handlerSearchHome = require('./handlers/handlerSearchHome')
const showSearchResults = require('./handlers/showSearchResults')
const showContact = require('./handlers/showContact')
const showCatalogue = require('./handlers/showCatalogue')
const showBikeInfo = require('./handlers/showBikeInfo')

// const handlerAdminReservas = require('./a-admin-reservas/handlerAdminReservas')
// const handlerAdminDispo = require('./a-admin-dispo/handlerAdminDispo')
// const handlerAdminManual = require('./a-admin-manual/handlerAdminManual')

router.get('/', showHome)
router.get('/search-results', showSearchResults)
router.get('/contact', showContact)
router.get('/catalogue', showCatalogue)
router.get('/bike-info', showBikeInfo)

// !!!!!!!!!!!!!!!!!!
router.post('/apiResults', handlerSearchHome)



// router for Admin Reservas (ANGULAR)
// router.get('/admin', handlerAdminReservas)
// router.get('/disponibilidad', handlerAdminDispo)
// router.get('/reserva-manual', handlerAdminManual)

module.exports = router
