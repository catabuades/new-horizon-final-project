const bikes = require(__base + '/data/bikes.mongo')

function handlerHome (req, res) {
  console.log(req.body)
  res.render()
}

module.exports = handlerHome
