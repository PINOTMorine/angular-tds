/**
 * Created by Morine on 03/02/2017.
 */


var app = angular.module('app',[]);
app.controller('MainController', function() {

    this.products=[
        {
            services: [
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
            ],
            promos: [
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
        }

    ]
    var info = "";
    this.value = "";
    var self=this;

    this.count = function() {
        return self.value.length;
    };

    this.save = function(){
        info="Message sauvegardé";
        if (self.value != "") {
            cookies.put('messageNote', self.value);
        }
    };
});
