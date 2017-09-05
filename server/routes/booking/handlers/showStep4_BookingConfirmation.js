function showStep4_BookingConfirmation (req, res) {
  req.session.cart = []
  res.render('pages/booking-step4', { idPage: 'booking4' })
}

module.exports = showStep4_BookingConfirmation
