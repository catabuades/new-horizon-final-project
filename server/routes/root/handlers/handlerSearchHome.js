const bikes = require(__base + '/data/bikes.json')

function handlerHome (req, res) {
  console.log(req.body)
  res.render()
}

module.exports = handlerHome
