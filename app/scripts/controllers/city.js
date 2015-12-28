'use strict';

/**
 * @ngdoc function
 * @name triviatravelApp.controller:CityCtrl
 * @description
 * # CityCtrl
 * Controller of the triviatravelApp
 */
angular.module('triviatravelApp')
  .controller('CityCtrl', ['$scope', 'cityFactory', '$routeParams',
  	function ($scope, cityFactory, $routeParams) {
  	
  	// GET ALL CITY
  	cityFactory.get().success(function(response){
        $scope.allCities = response;
    });

    // GET ID CITY
  	$scope.idCity = $routeParams.cityID;

  	// Travel
  	$scope.travel = function() {
  		cityFactory.saveTravel($scope.idCity);
  	};
}]);
