/**
 * Created by Morine on 10/03/2017.
 */
angular.module("App").config(["$routeProvider",function($routeProvider) {
    $routeProvider.when('/page1', {
        controller: 'AppController',
        templateUrl: 'templates/main.html'
    }).when('/page2', {
        controller: 'App2Controller',
        templateUrl: 'templates/main.html'
    }).otherwise({
        redirectTo: '/page1'
    });
}]);
// permet de savoir quel lien a été cliqué et ainsi permettre la modification de la variable client et de l'afficher