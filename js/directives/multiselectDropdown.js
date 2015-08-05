var app = angular.module('app');
app.directive('dropdownMultiselect', function(){
   return {
       restrict: 'E',
       scope:{           
            model: '=',
            options: '=',
            pre_selected: '=preSelected'
       },
       templateUrl: 'js/directives/multiselectDropdownTemplate.html' ,
       controller: function($scope){
           
           $scope.openDropdown = function(){        
                $scope.selected_items = [];
                for(var i=0; i<$scope.pre_selected.length; i++){                        
                	$scope.selected_items.push($scope.pre_selected[i].id);
                }                                        
            };
           
            $scope.selectAll = function () {
                $scope.model = _.pluck($scope.options, 'id');
            };            
            $scope.deselectAll = function() {
                $scope.model=[];
            };
            $scope.setSelectedItem = function(){
                var id = this.option.id;
                if (_.contains($scope.model, id)) {
                    $scope.model = _.without($scope.model, id);
                } else {
                    $scope.model.push(id);
                }
                return false;
            };
            $scope.isChecked = function (id) {                 
                if (_.contains($scope.model, id)) {
                    return 'fa fa-icon-ok pull-right';
                }
                return false;
            };                                 
       }
   }; 
});
