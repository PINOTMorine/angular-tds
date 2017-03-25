/**
 * Created by Morine on 24/03/2017.
 */
angular.module("sampleApp").controller("projetController",["$routeParams",function($routeParams){
    this.content2="Contenu de project";
    this.params=$routeParams;
}]);