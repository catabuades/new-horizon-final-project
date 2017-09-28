function showStep3_BookingPayment (req, res) {
  const len = req.session.cart.length
  const { pickdate, dropdate } = req.session.dates

  res.render('pages/booking-step3', { idPage: 'booking3', len, pickdate, dropdate })
}

module.exports = showStep3_BookingPayment
