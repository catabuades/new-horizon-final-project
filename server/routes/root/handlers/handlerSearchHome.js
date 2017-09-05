const Bike = require(__base + '/models/Bike')

function handlerSearchHome (req, res) {
  console.log(req.query)

  const type = req.query.type
  const { dropdate, pickdate } = req.query
  // req.session.dates.push({ dropdate, pickdate })

// string date to time stamp
  const stampPickUp = Date.parse(pickdate)
  const stampDropOff = Date.parse(dropdate)

// // time stamp to human date
//   const date1 = (new Date(pickdate)).toUTCString()
//   const date2 = (new Date(dropdate)).toUTCString()

// https://stackoverflow.com/questions/2943222/find-objects-between-two-dates-mongodb
// items.save({
//     name: "example",
//     created_at: ISODate("2010-04-30T00:00:00.000Z")
// })
// items.find({
//     created_at: {
//         $gte: ISODate("2010-04-29T00:00:00.000Z"),
//         $lt: ISODate("2010-05-01T00:00:00.000Z")
//     }
// })
// => { "_id" : ObjectId("4c0791e2b9ec877893f3363b"), "name" : "example", "created_at" : "Sun May 30 2010 00:00:00 GMT+0300 (EEST)" }

// https://stackoverflow.com/questions/36552395/query-multiple-date-ranges-in-mongoose

// PRUEBAAA
  // if (type) {
  //   Bike.find({'category': type,
  //     'datesBooked': {'$lt': stampPickUp,
  //       '$gt': stampDropOff}})
  //       .then(bikes => {
  //         console.log(bikes)
  //         res.render('pages/search-results', { idPage: 'search-results', bikes })
  //         // res.json(bikes)
  //       })
  // } else {
  //   Bike.find({'datesBooked': {'$lt': stampPickUp,
  //     '$gt': stampDropOff}})
  //       .then(bikes => {
  //         res.render('pages/search-results', { idPage: 'search-results', bikes })
  //         // res.json(bikes)
  //       })
  // }

  if (type) {
    Bike.find({'available': true, 'category': type})
        .then(bikes => {
          console.log(bikes)
          res.render('pages/search-results', { idPage: 'search-results', bikes, dropdate, pickdate })
          // res.json(bikes)
        })
  } else {
    Bike.find({'available': true})
        .then(bikes => {
          res.render('pages/search-results', { idPage: 'search-results', bikes, dropdate, pickdate })
          // res.json(bikes)
        })
  }
}

module.exports = handlerSearchHome
