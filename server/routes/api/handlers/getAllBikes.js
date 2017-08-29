const Bike = require( __base + '/models/Bike')

function getAllBikes(req, res) {
  Bike.find()
    .then( bikes => res.json(bikes))
}

module.exports = getAllBikes