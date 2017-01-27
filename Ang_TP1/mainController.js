/**
 * Created by Morine on 27/01/2017.
 */
//angular.module("FirstApp"); //fait appel/ accède à app car il n'y a pas []

angular.module("FirstApp").controller("MainController",function(){
    var self=this;
    this.bonjour="Hello ";
    this.msg="BOUM !!!";
    var message="World !"; //var pour une variable local, this. pour la variable html "... as var"
    this.getMsg=function(){
        return self.msg; //self à la place de this car this peut être
                         // associé à un objet non voulu
    };
    this.getMsg2=function(){
        return "Friends !";
    };
    this.getMsg3=function(){
        return message;
    };
});