function showStep2_BookingPersonalInfo (req, res) {
  const len = req.session.cart.length
  res.render('pages/booking-step2', { idPage: 'booking2', len })
}

module.exports = showStep2_BookingPersonalInfo
