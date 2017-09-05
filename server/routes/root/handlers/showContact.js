function showContact (req, res) {
  var len = req.session.cart.length
  res.render('pages/contact', len)
}

module.exports = showContact
