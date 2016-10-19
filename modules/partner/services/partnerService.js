(function(){
    
    angular
    .module('app')
    .factory('partnerService', partnerService);

    function partnerService($firebaseArray) {
        var ref = firebase.database().ref().child('partners');
        return $firebaseArray(ref);
    }
})();