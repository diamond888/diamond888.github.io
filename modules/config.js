(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDHCFYaGkhxEwIcjmQ2Dy4NkZniSndEnGM",
        authDomain: "hrmismirdc.firebaseapp.com",
        databaseURL: "https://hrmismirdc.firebaseio.com",
        storageBucket: "hrmismirdc.appspot.com",
        messagingSenderId: "117799100638"
    };
    firebase.initializeApp(config);
    
    
    angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider){
        
        $mdThemingProvider
        .theme('default')
        .primaryPalette('blue')
        .accentPalette('blue');
        //.warnPalette('red');
        
        //$urlRouterProvider.otherwise("/employees");
        
        $stateProvider
        .state('employees', {
            url: "/employees",
            templateUrl: 'modules/employees/views/employeeList.html',
            controller: 'employeeController'
        })
        
    });
    
    
})();