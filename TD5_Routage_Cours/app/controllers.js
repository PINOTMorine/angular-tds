/**
 * Created by Morine on 17/03/2017.
 */
angular.module("sampleApp").controller("RouteController",["$routeParams","code",function($routeParams,code){
    this.content1="Contenu du template de route1";
    this.params=$routeParams;
    this.code=code;
}]);
angular.module("sampleApp").factory("code", function() {
    return {
        value:"noCode"
    }
});