var Bike = require(__base + '/models/Bike')

function handlerBikeInfo (req, res) {
  var len = req.session.cart.length
  var { title } = req.params
  Bike.findOne({title: title})
    .then(bike => {
      res.render('pages/bike-info', { idPage: 'bike-info', bike, len })
    })
}

module.exports = handlerBikeInfo
