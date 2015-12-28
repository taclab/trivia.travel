'use strict';

/**
 * @ngdoc function
 * @name triviatravelApp.controller:CitiesCtrl
 * @description
 * # CitiesCtrl
 * Controller of the triviatravelApp
 */
angular.module('triviatravelApp')
  .controller('CitiesCtrl', ['$scope', 'cityFactory', function ($scope, cityFactory) {

  	cityFactory.get().success(function(response){
        var allCities = response;
        $scope.allCities = allCities;
    });

	$scope.loopNumber = function(num) {
    	return new Array(num);   
	};
    //cityFactory.save($scope.allCities)

}]);
