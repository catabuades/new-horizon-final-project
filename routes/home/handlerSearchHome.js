function handlerHome (req, res) {
  console.log(req.body)
  res.redirect('/search-results')
}

module.exports = handlerHome
