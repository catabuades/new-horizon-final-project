/* global angular */

angular.module('admin')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/reservas', {
        templateUrl: '/admin/routes/reservas/template.html',
        controller: 'reservasController'
      })
  })
  