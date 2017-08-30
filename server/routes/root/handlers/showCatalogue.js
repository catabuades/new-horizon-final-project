const _ = require('lodash')
const Bike = require(__base + '/models/Bike')
// const translationService = require('../../../services/translationService')

function handlerCatalogue (req, res) {
  Bike.find()
        .then(bikes => {
          const categorizedBikes = _.groupBy(bikes, bike => bike.category)

            // for (const key in Object.keys(categorizedBikes)) {
            // 	categorizedBikes[key].translation = translationService.get(key, 'en')
            // }
          console.log('aaaaa', categorizedBikes)
          res.render('pages/catalogue', { idPage: 'catalogue', categorizedBikes })
        })
}

module.exports = handlerCatalogue
