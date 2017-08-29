/* global angular */

angular.module('admin')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/reserva-manual', {
        templateUrl: '/admin/routes/reserva-manual/template.html',
        controller: 'reservaManualController'
      })
  })
  