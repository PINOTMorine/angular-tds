/**
 * Created by Morine on 10/03/2017.
 */


angular.module("App", ['ngRoute',require("./app2")]);
angular.module("App").controller("App1Controller", ["$scope",require("./controller1")]);
angular.module("App").directive("dirClient",require("./directives"));
angular.module("App").config(["$routeProvider",require("./routes")]);
//ajout des lignes de code avec des "require" comme vu en cours




/*Sans browserify

angular.module("App", ['ngRoute','App2']);*/