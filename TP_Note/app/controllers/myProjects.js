/**
 * Created by Morine on 24/03/2017.
 */
angular.module("sampleApp").controller("myProjectController",[function(){
    this.content1="Contenu de myProjects";

//Je n'ai pas trouvé comment injecter daoService.js dans ce controller

    //variables publiques
    this.projectsOwner;
    this.projectsWorker;

    //méthode privée
    var initUser=function () {
        //
    }
}]);