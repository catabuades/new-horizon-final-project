var _ = require('lodash')
var Bike = require(__base + '/models/Bike')
// var translationService = require('../../../services/translationService')

function handlerCatalogue (req, res) {
  var len = req.session.cart.length
  var { filters } = req.query
  var aFilters = filters.split(',').filter(filter => filter)
  var query = {}
  if (aFilters.length) {
    query = { category: { '$in': aFilters } }
  }

  Bike.find(query)
    .then(bikes => {
      var categorizedBikes = _.groupBy(bikes, bike => bike.category)

        // for (var key in Object.keys(categorizedBikes)) {
        //  categorizedBikes[key].translation = translationService.get(key, 'en')
        // }

      res.render('pages/catalogue', { idPage: 'catalogue', categorizedBikes, len })
    })
}

module.exports = handlerCatalogue
