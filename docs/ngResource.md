# angular-resource

The `ngResource` provides interaction support with RESTful services via the $resource service. Most applications involve CRUD operations and if angularjs is used then we could leverage the power of `$resource`.  

`$http` is for general purpose AJAX. In most cases this is what you'll be using. With `$http` you're going to be making `GET`, `POST`, `DELETE` type calls manually and processing the objects they return on your own.

`$resource` wraps `$http` for use in RESTful web API scenarios.

To use it, download a separate file called `angular-resource.j` and include it in your HTML page. Also, your main app module should declare a dependency on the `ngResource module` in order to use `$resource`.
```
  angular.module('app',['ngResource']); //app is our main module
```

`$resource` expects a classic RESTful backend. For instance, following are the endpoints.
```
  http://domain/api/post
  http://domain/api/post/:id
```

### How Does `$resource` work?
To use `$resource` inside your controller/service you need to declare a dependency on `$resource`. The next step is calling the `$resource()` function with your REST endpoint.
```
  angular.module('app.services').factory('Post', function($resource) {
    return $resource('/api/post/:id'); 
  });
```
The result of the function call is a resource class object which has the following five methods by default:
* `get()`
* `query()`
* `save()`
* `remove()`
* `delete()`


``` 
 var post = Post.get({ id: $scope.id }, function() {
    console.log(entry); //returns a single post with id.
  });
  
  var posts = Post.query(function() {
    console.log(posts); //Queries all the posts
  });
```

The `get()` function in the above snippet issues a `GET` request to `/api/post/:id`. The parameter `:id` in the URL is replaced with `$scope.id`.
The function `query()` issues a `GET` request to `/api/post` (notice there is no :id) and returns an empty array. This array is populated when the data arrives from server.
The `save()` function issues a `POST` request to `/api/post` with the first argument as the post body. The second argument is a callback which is called when the data is saved. 

I will be using a [Restful API demo](https://github.com/SSiddavaram/RestfulWSExample) from my repository in order to demonstrate `$resource`.  
