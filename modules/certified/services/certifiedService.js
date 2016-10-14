(function(){
    
    angular
    .module('app')
    .factory('certifiedService', certifiedService);

    function certifiedService($firebaseArray) {
        var ref = firebase.database().ref().child('certified');
        return $firebaseArray(ref);
    }
})();