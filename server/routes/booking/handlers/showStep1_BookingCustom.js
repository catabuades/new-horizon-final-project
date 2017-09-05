var Bike = require(__base + '/models/Bike')

function showStep1_BookingCustom (req, res) {
  var ids = req.session.cart.map((obj) => {
    return obj.bikeId
  })

  var customBike = req.session.cart.reduce((acc, bike) => {
    console.log('ppppppppp', bike.insurance)
    acc.push({ pedals: bike.pedals, size: bike.size, insurance: bike.insurance })
    return acc
  }, [])

  var promises = ids.map((id) => {
    return Bike.find({ '_id': id })
  })

  var dates = req.session.dates
  console.log('dates req session', dates)

  var len = req.session.cart.length

  Promise.all(promises)
        .then((bikes) => {
          res.render('pages/booking-step1', { idPage: 'booking1', bikes, customBike, dates, len })
        })
}

module.exports = showStep1_BookingCustom
