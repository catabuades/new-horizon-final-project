var Bike = require(__base + '/models/Bike')

function deleteBike (req, res) {
  const { bikeId } = req.params

  req.session.cart = req.session.cart.filter((obj) => obj.bikeId !== bikeId)
  res.send(req.session)
}

module.exports = deleteBike
