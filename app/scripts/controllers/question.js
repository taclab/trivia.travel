'use strict';

/**
 * @ngdoc function
 * @name triviatravelApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the triviatravelApp
 */
angular.module('triviatravelApp')
  .controller('QuestionCtrl', ['$scope', 'cityFactory', '$routeParams', '$filter',
  	function ($scope, cityFactory, $routeParams, $filter) {


    // GET ID CITY
  	$scope.idVille = $routeParams.villeID;

  	// GET ALL QUESTION
  	cityFactory.getQuestions().success(function(response){
        $scope.question = $filter('filter')(response, function (d) { if (d.id === $scope.idVille) { return d;}})[0];
    });

  	// Validate 
  	$scope.validateAnswer = function (ans) {
  		if(ans === $scope.question.answer) {
        $scope.$broadcast('timer-stop');
  			$scope.successAnswer = true;
  			cityFactory.changeStatut($scope.idVille, 'success');
  		} else {
        $scope.$broadcast('timer-stop');
  			$scope.failAnswer = true;
  			cityFactory.changeStatut($scope.idVille, 'fail');
  		}
  	};

  	// TIME OUT
  	$scope.timeOut = function () {
  		cityFactory.changeStatut($scope.idVille, 'fail');
  		$scope.timeAnswer = true;
  		$scope.$apply();
  	};

}]);