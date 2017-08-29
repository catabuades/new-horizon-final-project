const detailsBike = require('../../details.json')
console.log(detailsBike)

function handlerHome (req, res) {
  res.render('pages/home')
}

module.exports = handlerHome
