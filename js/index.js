    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutCtrl'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactCtrl'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutCtrl', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactCtrl', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });