/**
 * Created by Morine on 24/03/2017.
 */
angular.module("sampleApp").controller("projetController",["$routeParams",function($routeParams){
    this.content2="Contenu de project";
    this.id= $routeParams;

//Je n'ai pas trouvé comment injecter daoService.js dans ce controller

    //variables publiques
    this.project;
    this.dev;

    //méthode publique
    this.Dev=function (dev,story) {
        //
    }
}]);