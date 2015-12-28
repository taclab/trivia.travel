'use strict';

/**
 * @ngdoc service
 * @name triviatravelApp.cityFactory
 * @description
 * # cityFactory
 * Factory in the triviatravelApp.
 */
angular.module('triviatravelApp')
  .factory('cityFactory', ['$http', 'config', '$filter', function($http, config, $filter) {
    var cities = {};

    cities.get = function() {
      return $http.get('api/cities.json');
    };

    cities.save = function(_cities){
      $http.post(config.apiUrl+'api/saveCities.php', _cities).then(function() {
        // log success
      });
    };

    cities.changeStatut = function(_id, _statut) {
      $http.get('api/cities.json').then(function(response) {
        var citiesUpdate = $filter('filter')(response.data, function (d) { 
          if (d.id === _id) {
           d.statut = _statut;
          }
          return d;
        });
        cities.save(citiesUpdate);
        });
    };

    cities.resetStatut = function(_id) {
      $http.get('api/cities.json').then(function(response) {
        var citiesUpdate = $filter('filter')(response.data, function (d) { 
          if (d.id === _id) {
           d.statut = 'active';
          }
          return d;
        });
        cities.save(citiesUpdate);
        });
    };

    cities.resetStatutAll = function() {
      $http.get('api/cities.json').then(function(response) {
        var citiesUpdate = $filter('filter')(response.data, function (d) { 
           d.statut = 'active';
          return d;
        });
        cities.save(citiesUpdate);
        });
    };

    cities.getQuestions = function() {
      return $http.get('api/questions.json');
    };
    
    cities.saveTravel = function(_id) {
      $http.post(config.apiUrl+'api/saveTravel.php', _id).then(function() {});
    };

    return cities;
  }]);