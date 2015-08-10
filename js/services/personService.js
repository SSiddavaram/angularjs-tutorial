var app = angular.module('app');
app.factory('Person', ['$http',
	function($http) {
		//var person = [{'name': 'Jim', 'age': 25}, {'name': 'John', 'age': 35}, {'name': 'Sarah', 'age': 18}];
		
		var Person = {
			getPersons: function(){
				var url = 'js/person.json';
				return $http({
					method: 'GET',
					url: url,
					contentType: 'application/json'
				});
			}
		};
		return Person;
	}
]);