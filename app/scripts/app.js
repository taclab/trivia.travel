'use strict';

/**
 * @ngdoc overview
 * @name triviatravelApp
 * @description
 * # triviatravelApp
 *
 * Main module of the application.
 */
angular
  .module('triviatravelApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
