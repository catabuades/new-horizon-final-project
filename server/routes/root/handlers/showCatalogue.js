const _ = require('lodash')
const Bike = require(__base + '/models/Bike')
// const translationService = require('../../../services/translationService')

function handlerCatalogue (req, res) {
  const { filters } = req.query
  const aFilters = filters.split(',').filter(filter => filter)
  let query = {}
  if (aFilters.length) {
    query = { category: { '$in': aFilters } }
  }

  Bike.find(query)
    .then(bikes => {
      const categorizedBikes = _.groupBy(bikes, bike => bike.category)

        // for (const key in Object.keys(categorizedBikes)) {
        // 	categorizedBikes[key].translation = translationService.get(key, 'en')
        // }

      res.render('pages/catalogue', { idPage: 'catalogue', categorizedBikes })
    })
}

module.exports = handlerCatalogue
