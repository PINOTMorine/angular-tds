/**
 * Created by Morine on 03/02/2017.
 */


var app = angular.module('app',[]);
app.controller('MainController', function() {

    this.services= [
                {
                    name: "Web Development",
                    price: 300,
                    active:true
                },{
                    name: "Design",
                    price: 400,
                    active:false
                },{
                    name: "Integration",
                    price: 250,
                    active:false
                },{
                    name: "Formation",
                    price: 220,
                    active:false
                }
            ]
     this.promos= [
                {
                    code: "B22",
                    reduc: 0.05
                },{
                    code: "AZ",
                    reduc: 0.01
                },{
                    code: "UBOAT",
                    reduc: 0.02
                }
            ]


    var info = "";
    this.value = 1;
    this.codePromo = "";
    this.boutC=false
    this.valuePromo = 0;
    this.coefPromo = 0;
    this.prix = 300.00;
    this.Final = 300.00;
    var self=this;

    this.count = function() {
        return self.value;
    };
    this.countPrix = function() {
        return self.prix;
    };

    this.activer = function(service){
        service.active=!service.active;
        if(service.active==true) {
            self.value = self.value + 1;
            self.prix= self.prix + service.price;
        }else{
            self.value = self.value - 1;
            self.prix= self.prix - service.price;
        }
    };
    this.chek=function () {
        self.boutC=!self.boutC;
    }

    this.remisePrix = function() {
        if(self.codePromo=="B22"){
            self.coefPromo=0.05;
            self.Final=self.prix*self.coefPromo;
            return self.Final + " €";
        }else{
            if(self.codePromo=="AZ"){
                self.coefPromo=0.01;
                self.Final=self.prix*self.coefPromo;
                return self.Final + " €";
            }else{
                if(self.codePromo=="UBOAT"){
                    self.coefPromo=0.02;
                    self.Final=self.prix*self.coefPromo;
                    return self.Final + " €";
                }else{
                    self.Final=self.prix;
                    return "Aucun code promo";
                }
            }

        }
    };
    this.totalPrix = function() {
        var i = self.prix-self.Final;
    };
});
