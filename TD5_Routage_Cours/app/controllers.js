/**
 * Created by Morine on 17/03/2017.
 */
angular.module("sampleApp").controller("RouteController",["$routeParams",function($routeParams){
    this.content1="Contenu du template de route1";
    this.params=$routeParams;
}]);