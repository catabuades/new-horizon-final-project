const Bike = require(__base + '/models/Bike')

function showStep1_BookingCustom (req, res) {
  const ids = req.session.cart.map((obj) => {
  	return obj.bikeID
  })

  const customBike = req.session.cart.reduce((acc, bike) => {
  	acc.push({ pedals: bike.pedals, size: bike.size, insaurance: bike.insurance })
  	return acc
  }, [])

  console.log('fuufufufufufufu', customBike)

  const promises = ids.map((id) => {
  	return Bike.find({ '_id': id })
  })

  Promise.all(promises)
  	.then((bikes) => {
  		console.log('------------------------------')
  		console.log(bikes)
  		console.log('-------------------------------')
  		res.render('pages/booking-step1', { idPage: 'booking1', bikes, customBike})
  	})
}

module.exports = showStep1_BookingCustom
