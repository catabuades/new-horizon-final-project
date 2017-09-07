const Bike = require(__base + '/models/Bike')

function handlerAddToCart (req, res) {
  const { bikeId } = req.params
  const { pedals, size, insurance, title } = req.body

  req.session.cart.push({bikeId, pedals, size, insurance, title})
  res.send(req.session.cart)
}

module.exports = handlerAddToCart
