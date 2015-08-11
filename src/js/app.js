var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(['$routeProvider',function($routeProvider) {

	var path = '/templates';
	$routeProvider.when('/',{
			templateUrl: path+'/home.html'
		})
		.when('/Home',{
			templateUrl: path+'/home.html'
		})
		.when('/Todo',{
			templateUrl: path+'/todo.html'
		})
		.otherwise({
        	redirectTo: '/'
      	}); 
}]);