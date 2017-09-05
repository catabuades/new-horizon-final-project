console.log('Javascript ready to go...')

var filterApplied = getFiltersApplied()

filterApplied.forEach(filter => {
  $(`[data-on="${filter}"]`)
        .bootstrapToggle('on')
})

$('#road, #mountain, #trekking, #city, #e-bike').change(function () {
  var filterApplied = getFiltersApplied()
  var thisFilter = this.value
  var isChecked = $(this).prop('checked')
  console.log(isChecked)
  if (isChecked) filterApplied.push(thisFilter)
  else filterApplied = filterApplied.filter(filter => filter !== thisFilter)
  var urlWithNewFilters = createQueryFilters(filterApplied)
  window.location.href = urlWithNewFilters
})

function createQueryFilters (filters) {
  var tplQueryFilters = '?filters='
//  var tplQueryFiltersSearch = '?filters='
  var { search, origin, pathname } = window.location
  if (pathname === '/catalogue') {
    var newQuery = tplQueryFilters + filters.join(',')
    return origin + pathname + newQuery
  }
  if (pathname === '/apiResults') {
    var newQuerySearch = tplQueryFiltersSearch + filters.join(',')
    console.log(filters.join(','))
        // console.log(newQuerySearch)
        // return origin + pathname + newQuerySearch
  }
}

function getFiltersApplied () {
  var { search, origin, pathname } = window.location
  var tplQueryFilters = '?filters='
  var aFilters = search.replace(tplQueryFilters, '').split(',')
  return aFilters
}

$('.add-to-cart-form').submit(function (e) {
  e.preventDefault()

  var self = $(this)

  var bikeId = self.find('#bikeid').val()
  console.log(bikeId)

  var size = self.find('.size').val()

  var pedals = self.find('.pedals').val()

  var insurance = self.find('.insurance').is(':checked')
  console.log(insurance)

    //
    // var size = $('.sizeToCard option:selected').text();
    // console.log(size);
    // var pedals = $('.pedalsToCard option:selected').text();
    // console.log(pedals);
    // var insurance = $('insuranceToCard').val();
    // console.log(insurance);

  var url = `/cart/${bikeId}`
  var method = 'POST'
  var data = { size, pedals, insurance }

  $.ajax({ url, method, data })
        .then(msg => {
          console.log(msg)
          window.location.reload()
        })
})

$('.contain-bike-resume a').on('click', function (e) {
  e.preventDefault(e)
  // $(this).parent().remove()

  var bikeId = $(this).find($('button'))[0].dataset.id

  // var bikeId = $(this).find('data-id')
  var url = `/cart/${bikeId}`
  var method = 'DELETE'

  $.ajax({ url, method })
        .then(msg => {
          console.log(msg)
          window.location.reload()
        })
})
