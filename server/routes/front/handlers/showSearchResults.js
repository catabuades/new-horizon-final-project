const _ = require('lodash')
const moment = require('moment')
const Bike = require(__base + '/models/Bike')

function showSearchResults (req, res) {
  var len = req.session.cart.length
  console.log(req.query)
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

  //const aFilters = filters.split(',').filter(filter => filter)
  console.log(aFilters)
  console.log(pickdate, dropdate)
  console.log(stampPickUp, stampDropOff)

  const parsedPickdate = moment(stampPickUp).format('DD/MM/YYYY')
  const parsedDropdate = moment(stampDropOff).format('DD/MM/YYYY')

  let query = {}
  if (aFilters.length) {
    query = { category: { '$in': aFilters } }
  }

  console.log(query)
  console.log(req.body)

  Bike.find(query)
    .populate('bookings')
    .then(bikes => {
      console.log( JSON.stringify(bikes, null, 2))
      var categorizedBikes = _.groupBy(bikes, bike => bike.category)

      res.render('pages/search-results', { idPage: 'search-results', categorizedBikes, parsedPickdate, parsedDropdate })
        // res.json(bikes)
    })

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
