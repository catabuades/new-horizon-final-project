const Bike = require(__base + '/models/Bike')

function handlerBikeInfo (req, res) {
  const { title } = req.params
  console.log(title)
  Bike.findOne({title: title})
    .then(bike => {
      res.render('pages/bike-info', { idPage: 'bike-info', bike })
    })
}

module.exports = handlerBikeInfo
