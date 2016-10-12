(function(){
    'use strict';
    
    angular
    .module('app')
    .controller('viewEmployeeController', viewEmployeeController);
                    
                    
    function viewEmployeeController($scope, $mdDialog, employee){
        $scope.student = employee;
    }
})();