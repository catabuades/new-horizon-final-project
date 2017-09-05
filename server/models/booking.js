const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collection = 'books'

var BookingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  hotel: {
    type: String,
    required: false
  },
  comments: {
    type: String,
    required: false
  },
  bikesBooked: [{
    type: String
  }],
  datesBooked: [{
    type: Number
  }]
}, { collection })

module.exports = mongoose.model('Book', BookingSchema)
