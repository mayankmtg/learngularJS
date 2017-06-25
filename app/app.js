var LearngularJS=angular.module('LearngularJS', ['ngRoute', 'ngAnimate']);

LearngularJS.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl : 'views/home.html'
		})
		.when('/list', {
			templateUrl : 'views/list.html',
			controller: 'myController'
		}).otherwise({
			redirectTo: '/home'
		});
}]);

LearngularJS.controller('myController', ['$scope','$http', function($scope, $http){
	$scope.Heading="Udar-List";
	$scope.Secondary="List Maintainer";

	$scope.removeMessage = function(message){
		var removedMessage = $scope.messages.indexOf(message);
		$scope.messages.splice(removedMessage, 1);

	}
	$scope.addMessage= function(){
		$scope.messages.push({
			title: $scope.newMessage.title,
			message: $scope.newMessage.message
		});
		$scope.newMessage.title ="";
		$scope.newMessage.message="";

	};
	$scope.messages=[];
	$http.get("server/content.json").then(function(response){
		$scope.messages=response.data;
	});

}]);
