(function(){
    'use strict';
    
    angular
    .module('app')
    .controller('partnerController', partnerController);
                    
                    
    function partnerController($scope, $rootScope, $mdDialog){
        
        $scope.add = function(){
            $mdDialog.show({
              controller: addPartnerController,
              templateUrl: 'modules/partner/views/addPartner.html',
              parent: angular.element(document.getElementById('main-container')),
              clickOutsideToClose: true,
              fullscreen: false // Only for -xs, -sm breakpoints.
            })
            
            function addPartnerController($scope, $rootScope, storageService) {


                $scope.save = function() {
                    
                    var newPartner = {
                        title: $scope.name,
                        image: ''
                    };
                    
                    console.log(newPartner);
                    
                    var uploadTask = storageService.child('partners/' + $scope.image.name ).put($scope.image);
                
                    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                    function(snapshot) {
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    }, function(error) {
                        console.log(error);
                    }, function() {
                        // Upload completed successfully, now we can get the download URL
                        newPartner.image = uploadTask.snapshot.downloadURL;
                        
                        console.log(newPartner);
                        
                        $rootScope.partners
                        .$add(newPartner).then(function(ref) {
                            var id = ref.key;
                            console.log("added record with id " + id);
                            $mdDialog.hide();
                            //list.$indexFor(id); // returns location in the array
                        });
                    });
                }
                
            }
        }
        
        
        $scope.view = function(course){
            
            $mdDialog.show({
                locals: {course:course},
                controller: viewCourseController,
                templateUrl: 'modules/course/views/viewCourse.html',
                parent: angular.element(document.getElementById('main-container')),
                clickOutsideToClose:true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            })
            
            function viewCourseController($scope, course) {
                $scope.course = course;
                
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