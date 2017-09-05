var Bike = require(__base + '/models/Bike')

function deleteBike (req, res) {
  const { bikeId } = req.params

  req.session.cart = req.session.cart.filter((obj) => obj.bikeId !== bikeId)
  console.log('fuuuuuuuuu', req.session.cart)
  res.send(req.session)
}

module.exports = deleteBike
