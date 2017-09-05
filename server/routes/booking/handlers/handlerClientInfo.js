const Book = require('../../../models/booking')

function handlerClientInfo (req, res) {
  const { name, surname, phoneNumber, email, country, hotel, comments } = req.body
  const book = new Book({ name, surname, phoneNumber, email, country, hotel, comments })

  book.save()
    .then((books) => res.redirect('/step_3'))
}

module.exports = handlerClientInfo
