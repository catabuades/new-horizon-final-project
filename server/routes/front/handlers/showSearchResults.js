const _ = require('lodash')
const Moment = require('moment')
const MomentRange = require('moment-range')

const moment = MomentRange.extendMoment(Moment)

const Bike = require(__base + '/models/Bike')

function showSearchResults (req, res) {
  var len = req.session.cart.length
  // console.log(req.query)
    // FILTERS CATEGORY

  const { pickdate, dropdate } = req.query
  req.session.dates = { pickdate, dropdate }

  const queryParameters = Object.keys(req.query)
  const aFilters = queryParameters.reduce((acc, param) => {
    if (param.includes('filter_')) {
      acc.push(param.replace('filter_', ''))
    }
    return acc
  }, [])

  // const stampPickUp = Date.parse(pickdate)
  // const stampDropOff = Date.parse(dropdate)

  // const aFilters = filters.split(',').filter(filter => filter)

  const mPickdate = moment(pickdate, 'YYYY-MM-DD')
  const mDropdate = moment(dropdate, 'YYYY-MM-DD')

  const mRangeRequestBooking = moment.range(mPickdate, mDropdate)

  // const parsedPickdate = (new Date(stampPickUp)).toUTCString()
  // const parsedDropdate = (new Date(stampDropOff)).toUTCString()

  // console.log('---------------------')
  // // console.log('pickdate -> ', pickdate)
  // // console.log('stampPickUp ->', stampPickUp)
  // console.log('parsedPickdate ->', parsedPickdate)
  // console.log('parsedDropdate ->', parsedDropdate)
  //
  // console.log('----------------------------------')

  let query = {}
  if (aFilters.length) {
    query = { category: { '$in': aFilters } }
  }

  // console.log(query)
  // console.log(req.body)

  Bike.find(query)
    .populate('bookings')
    .then(bikes => {
      // console.log('bikes....')
      // console.log(bikes.length)
      const filteredBikes = bikes.filter(function (bike) {
        console.log(bike._id)
        console.log(` ======================== ${bike.title.toUpperCase()} ======================== `)
        if (!bike.bookings.length) {
          console.log(`Bike w/ id: ${bike._id} has no bookings`)
          console.log('======>>>>> INCLUDED!!!')
          return true
        }
        console.log(`Bike w/ id: ${bike._id} HAS booking`)
        console.log('-'.repeat(30))

        let hasMatchBooking = booking => {
          const { startDate, endDate } = booking
          const mStartDate = moment(startDate, 'YYYY-MM-DD')
          const mEndDate = moment(endDate, 'YYYY-MM-DD')

          const mRangeBooking = moment.range(mStartDate, mEndDate)

          return mRangeRequestBooking.overlaps(mRangeBooking, { adjacent: true })
        }
        const hasMatchAnyBooking = bike.bookings.some(hasMatchBooking)
        console.log('...after matching bookings!!!')
        if (hasMatchAnyBooking) console.log('======>>>>> DISCARDED!!!')
        else console.log('======>>>>> INCLUDED!!!')
        return !hasMatchAnyBooking
      })
      console.log('filteredBikes....')
      console.log(filteredBikes.length)

      var categorizedBikes = _.groupBy(filteredBikes, bike => bike.category)

      res.render('pages/search-results', { idPage: 'search-results', categorizedBikes, pickdate, dropdate, len })
        // res.json(bikes)
    })
}

module.exports = showSearchResults
