console.log('Javascript ready to go...')

const filterApplied = getFiltersApplied()
filterApplied.forEach(filter => {
  $(`[data-on="${filter}"]`)
        .bootstrapToggle('on')
})

$('#road, #mountain, #trekking, #city, #e-bike').change(function () {
  let filterApplied = getFiltersApplied()
  const thisFilter = this.value
  const isChecked = $(this).prop('checked')
  console.log(isChecked)
  if (isChecked) filterApplied.push(thisFilter)
  else filterApplied = filterApplied.filter(filter => filter !== thisFilter)
  const urlWithNewFilters = createQueryFilters(filterApplied)
  window.location.href = urlWithNewFilters
})

function createQueryFilters (filters) {
  const tplQueryFilters = '?filters='
  const tplQueryFiltersSearch = '?filters='
  let { search, origin, pathname } = window.location
  if (pathname === '/catalogue') {
    const newQuery = tplQueryFilters + filters.join(',')
    return origin + pathname + newQuery
  }
  if (pathname === '/apiResults') {
    const newQuerySearch = tplQueryFiltersSearch + filters.join(',')
    console.log(filters.join(','))
    // console.log(newQuerySearch)
    // return origin + pathname + newQuerySearch
  }
}

function getFiltersApplied () {
  let { search, origin, pathname } = window.location
  const tplQueryFilters = '?filters='
  const aFilters = search.replace(tplQueryFilters, '').split(',')
  return aFilters
}

$('.addCard').on('click', function (e) {
  const bikeID = $(this).data('id')
  const size = $('select[name=size]').val()
  console.log(size)
  const pedals = $('select[name=pedals]').val()
  console.log(pedals)
  const insurance = $("input.insuranceToCard[type='checkbox']").val()
  console.log(insurance)
  const url = `/card/${bikeID}`
  const method = 'POST'
  const data = {size, pedals, insurance}

  $.ajax({ url, method, data })
        .then(msg => {
          window.location.reload()
        })
})
