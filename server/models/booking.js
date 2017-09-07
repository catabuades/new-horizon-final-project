const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const collection = 'books'

var BookingSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  surname: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  hotel: {
    type: String,
    required: false
  },
  comments: {
    type: String,
    required: false
  },
  bikes: [{
    type: ObjectId,
    ref: 'Bike'
  }],
  startDate: String, // 'YYYY-MM-DD'
  endDate: String // 'YYYY-MM-DD'
}, { collection })

module.exports = mongoose.model('Booking', BookingSchema)
