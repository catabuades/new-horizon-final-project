const Bike = require(__base + '/models/Bike')

function addBike (req, res) {
  const { title, category, size } = req.body

  const bike = new Bike({ title, category, size })

  bike.save()
    .then(bike => res.json(bike))
}

module.exports = addBike
