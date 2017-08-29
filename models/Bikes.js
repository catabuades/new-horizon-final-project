const mongoose = require('mongoose')
const Schema = mongoose.Schema
const strftime = require('strftime')

const collection = 'bikes'

var BikeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  size: {
    type: String,
    required: true
  },
  details: {
    type: Object
  },
  available: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: String,
    default: strftime('%Y-%m-%d %H:%M:%S', new Date())
  }
}, { collection })

module.exports = mongoose.model('Bike', BikeSchema)
