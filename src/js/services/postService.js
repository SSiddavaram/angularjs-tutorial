var app = angular.module('app');
app.factory('Post', ['$resource',
	function($resource) {
		return $resource('/RestfulWS/rest/post/:id');
	}
]);