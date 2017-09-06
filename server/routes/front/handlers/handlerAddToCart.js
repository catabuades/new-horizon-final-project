const Bike = require(__base + '/models/Bike')

function handlerAddToCart (req, res) {
  const { bikeId } = req.params
  const { pedals, size, insurance } = req.body

  req.session.cart.push({bikeId, pedals, size, insurance})
  res.send(req.session.cart)
}

module.exports = handlerAddToCart
