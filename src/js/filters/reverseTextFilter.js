//Initialize your ng-app
var app = angular.module('app');

//Create a Filter
app.filter("reversetext", function() {

        //Defining the filter function
         return function(input) {
 
                 var result = "";
                 input = input || "";

                for (var i=0; i<input.length; i++) {
                       result = input.charAt(i) + result;
                 }
    
                return result;
         };
});