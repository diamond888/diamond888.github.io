(function(){
    'use strict';
    
    angular
    .module('app')
    .controller('employeeController', employeeController);
                    
                    
    function employeeController($scope, $mdDialog){
        
        $scope.add = function(){
            $mdDialog.show({
              //controller: 'addEmployeeController',
              templateUrl: 'modules/employees/views/addEmployee.html',
              parent: angular.element(document.getElementById('main-container')),
              clickOutsideToClose:true,
              fullscreen: false // Only for -xs, -sm breakpoints.
            })
        }
        
        
        $scope.view = function(employee){
            $mdDialog.show({
                locals: {employee: employee},
                controller: viewEmployeeController,
                templateUrl: 'modules/employees/views/viewEmployee.html',
                parent: angular.element(document.getElementById('main-container')),
                clickOutsideToClose:true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            })
            
            function viewEmployeeController($scope, employee) {
                $scope.employee = employee;
                
                $scope.close = function(){
                    $mdDialog.hide();
                }
            }
        }
        
        /*$scope.add = function(){
            
            var todo = {
                task: $scope.task,
                dueDate: $scope.dueDate.toString(),
            };
            
            console.log(todo);
            
            $scope.tasks
            .$add(todo);
        }
        
        $scope.delete = function(todo){
           $scope.tasks.$remove(todo);
        }*/
    }
})();