function showStep3_BookingPayment (req, res) {
  const len = req.session.cart.length
  res.render('pages/booking-step3', { idPage: 'booking3', len })
}

module.exports = showStep3_BookingPayment
