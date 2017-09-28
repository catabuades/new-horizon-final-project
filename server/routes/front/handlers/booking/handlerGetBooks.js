const Book = require(__base + '/models/Booking')

const handlerGetBooks = (req, res) => {
  Book.find()
    .then((books) => res.send(books))
    .catch((error) => console.log(error))
}

module.exports = handlerGetBooks
