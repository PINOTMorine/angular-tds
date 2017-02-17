/**
 * Created by Morine on 17/02/2017.
 */
var app = angular.module('app',[]);
app.controller('MainController', function() {

    this.contacts=[
        {
            nom:"ZUCKERBERG",
            prenom:"Mark",
            mail:"mark@facebook.com",
            suppr:false
        },
        {
            nom:"GATES",
            prenom:"Bill",
            mail:"bill@microsoft.com",
            suppr:false
        },
        {
            nom:"JOBS",
            prenom:"Steeve",
            mail:"steeve@apple.com",
            suppr:false
        }
    ];

    var self=this;
    this.ajout=false;
    this.modif=false;
    this.nbCont=0;

    this.ajoutbout=function(){
        self.ajout=true;
        self.modif=false;
    }

    this.modifbout=function(){
        self.modif=true;
        self.ajout=false;
    }

    this.annulebout=function(){
        self.modif=false;
        self.ajout=false;
    }

    this.ajoutDiv=function(){
        return self.ajout;
    }

    this.modifDiv=function(){
        return self.modif;
    }

});
