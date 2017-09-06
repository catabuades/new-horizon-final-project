/* global __base */
const Booking = require(__base + '/models/Booking')
const Bike = require(__base + '/models/Bike')

function bookBikes (req, res) {
  const {bikes: sBikes, startDate, endDate} = req.body
  const bikes = sBikes.split(',')
  const booking = new Booking({bikes, startDate, endDate})

  booking.save()
    .then(() => {
      const query = { _id: { $in: bikes } }
      const updateCommand = { $push: { 'bookings': booking._id } }
      const configCommand = { multi: true }
      return Bike.update(query, updateCommand, configCommand)
    })
    .then(response => res.json(response))
}

module.exports = bookBikes
