/* global angular */

angular.module('admin')
  .controller('reservasController', function ($scope, $rootScope, bookingService) {
    bookingService.getBooks()
        .then((info) => {
          $scope.books = info.data
          console.log(info.data)
        })
        .catch((error) => console.log(error))
  })
