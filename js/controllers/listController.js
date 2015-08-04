var app = angular.module('app');
app.controller('ListController', ['$scope',
	function($scope) {

	$scope.list= {};
  	$scope.list.todos = [{text:'learn angular', done:true},
      			  {text:'build an angular app', done:false}];

    $scope.addTodo = function() {
        $scope.list.todos.push({text:$scope.todoText, done:false});
        $scope.todoText = '';
    };

    $scope.remaining = function() {
	    var count = 0;
	    angular.forEach($scope.list.todos, function(todo) {
	        count += todo.done ? 0 : 1;
	    });
	    return count;
    };

    $scope.archive = function() {
	    var oldTodos = $scope.list.todos;
	    list.todos = [];
	    angular.forEach(oldTodos, function(todo) {
	        if (!todo.done) $scope.list.todos.push(todo);
	    });
    };

}]);