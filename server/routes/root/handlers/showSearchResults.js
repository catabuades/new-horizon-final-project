const _ = require('lodash')
const Bike = require(__base + '/models/Bike')

function showSearchResults (req, res) {
  var len = req.session.cart.length
  // console.log(req.query)
    // FILTERS CATEGORY
  const { filters } = req.query
  const aFilters = filters.split(',').filter(filter => filter)
  let query = {}
  if (aFilters.length) {
    query = { category: { '$in': aFilters } }
  }

  console.log(req.body)
  if (req.body.type) {
    Bike.find({ 'available': true, 'category': req.body.type })
            .then(bikes => {
              res.render('pages/search-results', { idPage: 'search-results', bikes })
                // res.json(bikes)
            })
  } else {
    Bike.find({ 'available': true })
            .then(bikes => {
              res.render('pages/search-results', { idPage: 'search-results', bikes })
                // res.json(bikes)
            })
  }
}

module.exports = showSearchResults
