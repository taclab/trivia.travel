'use strict';

/**
 * @ngdoc function
 * @name triviatravelApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the triviatravelApp
 */
angular.module('triviatravelApp')
  .controller('AdminCtrl', ['$scope', 'cityFactory', function ($scope, cityFactory) {
  	$scope.resetAll = function() {
  		cityFactory.resetStatutAll();
  	};
}]);