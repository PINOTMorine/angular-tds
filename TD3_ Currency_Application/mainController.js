/**
 * Created by Morine on 03/03/2017.
 */

angular.module("TD3").controller("MainController",['$http', function($http) {
    var self=this;
    var from="";
    var to="";

    $http.get('app/data/currencymap.json').
    then(function(response) {
            self.currencies = response.data;
            self.from=self.currencies["EUR"];
            self.to=self.currencies["USD"];

        },
        function(response) {
            console.log("Erreur avec le statut Http : "+response.status);
        });

    this.convertir=function(){
        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+from.code+'_'+to.code, {jsonpCallbackParam: 'callback'})
            .then(function(response) {
                self.result=response.data[self.from.code+'_'+self.to.code].val;

            });
    }
    this.swap=function(){
        var inter=self.from;
        self.from=self.to;
        self.to=inter;
    }
}]);