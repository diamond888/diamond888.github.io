(function(){
    
    angular
    .module('app')
    .factory('courseService', courseService);

    function courseService($firebaseArray) {
        var ref = firebase.database().ref().child('courses');
        return $firebaseArray(ref);
    }
})();