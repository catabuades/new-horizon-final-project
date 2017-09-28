/* global angular */

angular.module('admin')
  .factory('bookingService', function ($http) {
    const getBooks = () => {
      const url = '/api/getBooks'
      return $http.get(url)
    }
    return { getBooks }
  })
