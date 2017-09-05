var bikes = require(__base + '/data/bikes.json')

function showHome (req, res) {
  var len = req.session.cart.length
  if (req.session.cart.length === 0) res.render('pages/home')
  else res.render('pages/home', {len})
}

module.exports = showHome
