(function(){
    'use strict';
    
    angular
    .module('app')
    .controller('certifiedController', certifiedController);
                    
                    
    function certifiedController($scope, $rootScope, $mdDialog){
        
        $scope.add = function(){
            $mdDialog.show({
              controller: addCertifiedController,
              templateUrl: 'modules/certified/views/addCertified.html',
              parent: angular.element(document.getElementById('main-container')),
              clickOutsideToClose: true,
              fullscreen: false // Only for -xs, -sm breakpoints.
            })
            
            function addCertifiedController($scope, $rootScope) {
                $scope.save = function() {
                    var newCertified = {
                        fullname: $scope.fullname,
                        title: $scope.title,
                        certificationDate: moment($scope.certificationDate).format('YYYY-MM-DD'),
                        user: $scope.user,
                    }

                    console.log(newCertified);
                    
                    $rootScope.certifiedPros
                    .$add(newCertified).then(function(ref) {
                        var id = ref.key;
                        console.log("added record with id " + id);
                        //list.$indexFor(id); // returns location in the array
                    });
                }
            }
        }
        
        
        $scope.view = function(certified){
            console.log(certified);
            
            $mdDialog.show({
                locals: {certified:certified},
                controller: viewCertifiedController,
                templateUrl: 'modules/certified/views/viewCertified.html',
                parent: angular.element(document.getElementById('main-container')),
                clickOutsideToClose:true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            })
            
            function viewCertifiedController($scope, certified) {
                $scope.certified = certified;
                
                $scope.close = function(){
                    $mdDialog.hide();
                }
                
                $scope.dateToText = function(date) {
                    return moment(date, 'YYYY-MM-DD').format('MMM D, YYYY');
                }
                
                $scope.dateValid = function(date) {
                    return moment(date, 'YYYY-MM-DD').add(3,'years').format('MMM D, YYYY');
                }
            }
        }
        
        $scope.shortId = function (id) {
            return  id.substring(id.length-6);
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