var growlApp = angular.module('growlApp', []);
growlApp.directive('growl', function(){
	return {
		restrict: 'AE',
		scope: {
			message: '=',
			severity: '@severity',
			timeoutLimit: '='
		},	
		templateUrl: 'js/directives/growlTemplate.html',
		link: function(scope, elem, attrs){},
		controller: ['$scope', '$timeout', function($scope, $timeout){
			$scope.message = '';
			$scope.timeoutLimit = 2000;

			$scope.showMessage = function(message){
				$scope.message = message;
				$timeout(function () {
					$scope.deleteMessage();
				}, $scope.timeoutLimit);
			};

			$scope.deleteMessage = function() {
				$scope.message = '';
			};

			$scope.addClass = function(message){
				return {
					'alert-success': $scope.severity === "success",
					'alert-error': $scope.severity === "error", 
					'alert-danger': $scope.severity === "error", 
					'alert-info': $scope.severity === "info",
					'alert-warning': $scope.severity === "warn" 
				};
			};

			$rootScope.$on("growlMessage", function (event, message) {
				$scope.showMessage(message);
			});
		}]
	};
});