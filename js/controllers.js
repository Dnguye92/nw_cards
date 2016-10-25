var cardControllers = angular.module('cardControllers', ['ngAnimate'])

cardControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.cardName = data
		$scope.cardOrder = "name"
	})
}])