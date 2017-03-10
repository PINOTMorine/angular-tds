/**
 * Created by Morine on 10/03/2017.
 */
angular.module("App").directive("dirClient", function() {
    return {
        template : "<div>Client : {{client}}</div>"
    };
})
// permet d'afficher la dernière ligne avec le nom du client