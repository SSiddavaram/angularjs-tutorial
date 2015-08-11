var app = angular.module('app');
app.controller('ListController', ['$scope', 'Person', 'Post',
	function($scope, Person, Post) {

	$scope.list= {};
  	$scope.list.todos = [{text:'learn angular', done:true},
      			  {text:'build an angular app', done:false}];

    $scope.roles = [
          {"id": 1, "name": "Manager", "assignable": true},
          {"id": 2, "name": "Developer", "assignable": true},
          {"id": 3, "name": "Reporter", "assignable": true}
    ];
    
    $scope.member = {roles: []};
    $scope.selected_items = [];

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

    $scope.getRole = function(id){
      var roleObj = _.find($scope.roles, function(role){return id===role.id;});
      return roleObj.name;
    };

    $scope.getPersons = function(){
        Person.getPersons().then(function(response){
            $scope.persons = response.data;
        });
    };

    $scope.getPosts = function(){
        var posts = Post.query(function(data){
            $scope.posts = data;
        });
    };

    $scope.getPostById = function(){
        var post = Post.get({id: 3}, function(response){
            $scope.post = post;
        });
    };
}]);