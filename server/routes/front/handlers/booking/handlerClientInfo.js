const Book = require(__base + '/models/Booking')
const Bike = require(__base + '/models/Bike')

function handlerClientInfo (req, res) {
  const { name, surname, phoneNumber, email, country, hotel, comments} = req.body
  console.log(req.session.dates)
  const { pickdate, dropdate } = req.session.dates[0]

  const customBike = req.session.cart.map((bike) => {
    return `Bike:${bike.title}, Size:${bike.size}, Pedals:${bike.pedals}, Insurance: ${bike.insurance}, ID:${bike.bikeId}`
  })

  const bikes = req.session.cart.map((bike) => {
    return bike.bikeId
  })

  console.log(bikes)

  console.log(customBike)

  const book = new Book({ name, surname, phoneNumber, email, country, hotel, comments, customBike, bikes, startDate: pickdate, endDate: dropdate })

  book.save()
    .then((book) => {
      const query = { _id: { $in: bikes } }
      const updateCommand = { $push: { 'bookings': book._id } }
      const configCommand = { multi: true }
      Bike.update(query, updateCommand, configCommand)
        .then(() => res.redirect('/step_3'))
    })
}

module.exports = handlerClientInfo
