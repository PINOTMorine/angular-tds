/**
 * Created by Morine on 27/01/2017.
 */

var app = angular.module('app',["ngCookies"]);
app.controller('MainController', ["$cookies",function(cookies) {

    var info = " ";
    this.value = cookies.get('messageNote')||"";
    var self=this;

    this.count = function() {
        if(self.value != "" && self.value!=cookies.get('messageNote') )
            info = "Message modifié";
        return self.value.length;
    };

    this.clear = function(){
        info = "";
        self.value="";
    };

    this.save = function(){
        info="Message sauvegardé";
        if (self.value != "") {
            cookies.put('messageNote', self.value);
        }
    };

    this.show = function(){

        return info;
    };
    this.takee = function(){

        return 'ok';
    };

}]);
