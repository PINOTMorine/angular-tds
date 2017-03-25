/**
 * Created by Morine on 24/03/2017.
 */
angular.module("sampleApp").controller("storyController",["$routeParams",function($routeParams){
    this.content3="Contenu de story";
    this.id= $routeParams;

    //Variables privées
    var story;
    var devs;
    var tags;

    //Méthodes publiques
    this.toggleDone=function (task) {
        //
    }
    this.setDev=function (dev) {
        //
    }
    this.indexOfTag=function (tag) {
        //
    }
    this.toggleTag=function (tag) {
        //
    }
}]);