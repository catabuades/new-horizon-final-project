const bikes = require(__base + '/data/bikes.json')

function showHome (req, res) {
  res.render('pages/home')
}

module.exports = showHome
