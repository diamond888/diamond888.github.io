(function(){
    'use strict';
    
    angular
    .module('app')
    .controller('courseController', courseController);
                    
                    
    function courseController($scope, $rootScope, $mdDialog){
        
        $scope.add = function(){
            $mdDialog.show({
              controller: addCourseController,
              templateUrl: 'modules/course/views/addCourse.html',
              parent: angular.element(document.getElementById('main-container')),
              clickOutsideToClose: true,
              fullscreen: false // Only for -xs, -sm breakpoints.
            })
            
            function addCourseController($scope, $rootScope, storageService) {
                $scope.topics = [];
                
                
                
                $scope.save = function() {
                    
                    var newCourse = {
                        title: $scope.title,
                        image: '',
                        description: $scope.description,
                        audience: $scope.audience,
                        prerequisites: $scope.prerequisites,
                        topics: $scope.topics,
                    };
                    
                    var uploadTask = storageService.child('courses/' + $scope.image.name ).put($scope.image);
                
                    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                    function(snapshot) {
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    }, function(error) {
                        console.log(error);
                    }, function() {
                        // Upload completed successfully, now we can get the download URL
                        newCourse.image = uploadTask.snapshot.downloadURL;
                        
                        console.log(newCourse);
                        
                        $rootScope.courses
                        .$add(newCourse).then(function(ref) {
                            var id = ref.key;
                            console.log("added record with id " + id);
                            $mdDialog.hide();
                            //list.$indexFor(id); // returns location in the array
                        });
                    });
                }
                
                $scope.addTopic = function(){
                    $scope.topics.push({topic: $scope.topic});
                    $scope.topic = "";
                }
                
                $scope.removeTopic = function(index){
                    $scope.topics.splice(index, 1);
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