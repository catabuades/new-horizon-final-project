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
  let { search, origin, pathname } = window.location
  const newQuery = tplQueryFilters + filters.join(',')
  return origin + pathname + newQuery
}

function getFiltersApplied () {
  let { search, origin, pathname } = window.location
  const tplQueryFilters = '?filters='
  const aFilters = search.replace(tplQueryFilters, '').split(',')
  return aFilters
}
