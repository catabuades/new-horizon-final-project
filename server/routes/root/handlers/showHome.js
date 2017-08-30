const bikes = require(__base + '/data/bikes.mongo')

function showHome (req, res) {
  res.render('pages/home')
}

module.exports = showHome
