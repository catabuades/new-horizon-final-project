const Bike = require(__base + '/models/Bike')

function handlerAddToCard (req, res) {
  console.log(req.params)
  const { bikeID } = req.params
  const { pedals, size, insurance } = req.body

  req.session.cart.push({bikeID, pedals, size, insurance})
  res.send(req.session.cart)
}

module.exports = handlerAddToCard
