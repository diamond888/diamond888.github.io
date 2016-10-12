(function(){
    
    angular
    .module('app')
    .factory('employeeService', employeeService);

    function employeeService($firebaseArray) {
        var ref = firebase.database().ref().child('employees');
        return $firebaseArray(ref);
    }
})();