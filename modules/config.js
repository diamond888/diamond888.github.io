(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCfmKn1t__51AxxRg2zq8Qrx07AnviVn8A",
        authDomain: "diamond888-7e31d.firebaseapp.com",
        databaseURL: "https://diamond888-7e31d.firebaseio.com",
        storageBucket: "diamond888-7e31d.appspot.com",
        messagingSenderId: "204012199323"
    };
    firebase.initializeApp(config);
    
    
    angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider){
        
        $mdThemingProvider
        .theme('default')
        .primaryPalette('cyan')
        .accentPalette('cyan');
        //.warnPalette('red');
        
        $urlRouterProvider.otherwise("/courses");
        
        $stateProvider
        .state('certified', {
            url: "/certified",
            templateUrl: 'modules/certified/views/certifiedList.html',
            controller: 'certifiedController'
        })
        .state('courses', {
            url: "/courses",
            templateUrl: 'modules/course/views/courseList.html',
            controller: 'courseController'
        })
        .state('about', {
            url: "/enroll",
            templateUrl: 'modules/about/views/about.html',
        })
        .state('contactus', {
            url: "/contactus",
            templateUrl: 'modules/contactus/views/contactUs.html',
            controller: 'certifiedController'
        })
        
    });
    
    
})();