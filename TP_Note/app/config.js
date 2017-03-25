/**
 * Created by Morine on 24/03/2017.
 */
angular.module("sampleApp").config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'app/views/myProjects.html',
            controller: 'myProjectController',
            controllerAs: 'rtCtrl1'
        }).
        when('/project', {
            templateUrl: 'app/views/projet.html',
            controller: 'projetController',
            controllerAs: 'rtCtrl2'
        }).
        when('/story', {
            templateUrl: 'app/views/story.html',
            controller: 'storyController',
            controllerAs: 'rtCtrl3'
        })/*.otherwise({
            redirectTo: '/home'
        })*/;
        if(window.history && window.history.pushState){
            $locationProvider.html5Mode(true);
        }
    }]);