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
            valid:true,
            suppr:false
        },
        {
            nom:"GATES",
            prenom:"Bill",
            mail:"bill@microsoft.com",
            valid:true,
            suppr:false
        },
        {
            nom:"JOBS",
            prenom:"Steeve",
            mail:"steeve@apple.com",
            valid:true,
            suppr:false
        }
    ];

    var self=this;

});
