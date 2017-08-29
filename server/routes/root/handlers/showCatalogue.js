const Bike = require( __base + '/models/Bike')

function handlerCatalogue (req, res) {
  Bike.find()
    .then(bikes => res.render('pages/catalogue', { bikes }) )
}

module.exports = handlerCatalogue
