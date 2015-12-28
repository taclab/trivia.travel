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
    'ngRoute',
    'timer'
  ])
  .constant('config', {
      appName: 'Trivia.travel',
      apiUrl: 'http://localhost:8888/trivia.travel/app/'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cities', {
        templateUrl: 'views/cities.html',
        controller: 'CitiesCtrl',
        controllerAs: 'cities'
      })
      .when('/city/:cityID', {
        templateUrl: 'views/city.html',
        controller: 'CityCtrl',
        controllerAs: 'city'
      })
      .when('/question/:cityID', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl',
        controllerAs: 'question'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
