/* global angular */

angular.module('admin')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/disponibilidad', {
        templateUrl: '/admin/routes/disponibilidad/template.html',
        controller: 'disponibilidadController'
      })
  })
  