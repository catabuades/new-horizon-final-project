const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    type: String,
    default: ''
  },
  size: {
    type: String,
    required: true
  },
  image: String,
  details: [{
    frame: {
      frame: String,
      fork: String
    },
    wheels: {
      frontHub: String,
      rearHub: String,
      covers: String,
      tires: String
    },
    drive: {
      frontShift: String,
      rearShift: String,
      frontBrake: String,
      rearBrake: String,
      brakeLevers: String,
      handles: String,
      plate: String,
      chain: String,
      casette: String
    },
    components: {
      handlebar: String,
      power: String,
      seatPost: String,
      direction: String,
      seatBelt: String,
      fists: String
    }
  }],
  available: {
    type: Boolean,
    default: true
  },
  datesBooked: [{
    pickUp: {
      type: Number
    },
    dropOff: {
      type: Number
    }
  }],
  createdAt: {
    type: Number,
    default: +new Date()
  }
}, { collection })

module.exports = mongoose.model('Bike', BikeSchema)
