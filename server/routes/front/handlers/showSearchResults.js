const _ = require('lodash')
const moment = require('moment')
const Bike = require(__base + '/models/Bike')

function showSearchResults (req, res) {
  var len = req.session.cart.length
  // console.log(req.query)
    // FILTERS CATEGORY

  const { pickdate, dropdate } = req.query
  const queryParameters = Object.keys(req.query)
  const aFilters = queryParameters.reduce((acc, param) => {
    if (param.includes('filter_')) {
      acc.push(param.replace('filter_', ''))
    }
    return acc
  }, [])

  const stampPickUp = Date.parse(pickdate)
  const stampDropOff = Date.parse(dropdate)

  // const aFilters = filters.split(',').filter(filter => filter)

  const parsedPickdate = moment(stampPickUp).format('DD/MM/YYYY')
  const parsedDropdate = moment(stampDropOff).format('DD/MM/YYYY')

  // const parsedPickdate = (new Date(stampPickUp)).toUTCString()
  // const parsedDropdate = (new Date(stampDropOff)).toUTCString()

  console.log('---------------------')
  // console.log('pickdate -> ', pickdate)
  // console.log('stampPickUp ->', stampPickUp)
  console.log('parsedPickdate ->', parsedPickdate)
  console.log('parsedPickdate ->', parsedDropdate)

  console.log('----------------------------------')

  let query = {}
  if (aFilters.length) {
    query = { category: { '$in': aFilters } }
  }

  // console.log(query)
  // console.log(req.body)

  Bike.find(query)
    .populate('bookings')
    .then(bikes => {
      console.log('bikes....')
      console.log(bikes.length)
      const filteredBikes = bikes.filter(function (bike) {
        console.log(bike.title)
        console.log(bike.bookings, 'hiugyg')
        const { startDate, endDate } = bike.bookings[0]
        const pickupIsInBookingRange = ((stampPickUp >= startDate) && (stampPickUp <= endDate))
        const dropOffIsInBookingRange = ((stampDropOff >= startDate) && (stampDropOff <= endDate))
        console.log(`range booking between ${startDate} AND ${endDate}`)
        console.log(`request booking between ${stampPickUp} AND ${stampDropOff}`)
        console.log(pickupIsInBookingRange)
        console.log(dropOffIsInBookingRange)
        console.log(pickupIsInBookingRange || dropOffIsInBookingRange)
        return !(pickupIsInBookingRange || dropOffIsInBookingRange)
        // return (((stampPickUp && stampDropOff) < bike.bookings[0].startDate) || ((stampPickUp && stampDropOff) > bike.bookings[0].endDate))
      })
      console.log('filteredBikes....')
      console.log(filteredBikes.length)
      // console.log('aaaaa', filteredBikes.length)
      // bikes.find({
      //   'bookings': {'$lt': 'startDate', '$gte': 'endDate'}
      // })
      // console.log(JSON.stringify(bikes, null, 2))
      var categorizedBikes = _.groupBy(filteredBikes, bike => bike.category)

      res.render('pages/search-results', { idPage: 'search-results', categorizedBikes, parsedPickdate, parsedDropdate })
        // res.json(bikes)
    })

  // db.posts.find( // query today up to tonight
  // {'created_on': {'$gte': new Date(2012, 7, 14), '$lt': new Date(2012, 7, 15)}})

  // if (req.body.type) {
  //   Bike.find({ 'available': true, 'category': req.body.type })
  //           .then(bikes => {
  //             res.render('pages/search-results', { idPage: 'search-results', bikes })
  //               // res.json(bikes)
  //           })
  // } else {
  //   Bike.find({ 'available': true })
  //           .then(bikes => {
  //             res.render('pages/search-results', { idPage: 'search-results', bikes })
  //               // res.json(bikes)
  //           })
  // }
}

module.exports = showSearchResults
