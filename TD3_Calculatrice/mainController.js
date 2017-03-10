/**
 * Created by Morine on 03/03/2017.
 */

angular.module("TD3").controller("MainController", function(){

    this.ops=[
        {value:'('},
        {value:')'},
        {value:'M'},
        {value:' '},
        {value:'RM'},
        {value:'Off'},
        {value:'\n'},
        {value:"⇤"},
        {value:"CE"},
        {value:"C"},
        {value:' '},
        {value:"±"},
        {value:"√x"},
        {value:"\n"},
        {value:7},
        {value:8},
        {value:9},
        {value:' '},
        {value:'/'},
        {value:'%'},
        {value:'\n'},
        {value:4},
        {value:5},
        {value:6},
        {value:' '},
        {value:'*'},
        {value:'1/x'},
        {value:'\n'},
        {value:1},
        {value:2},
        {value:3},
        {value:' '},
        {value:'-'},
        {value:'\n'},
        {value:'0'},
        {value:'.'},
        {value:' '},
        {value:'+'},
        {value:'='}
    ];

    var self=this;
    this.chaine='';
    this.view=true;

    this.chaineTotal = function () {
        if(self.chaine==''){
            return '0';
        }else{
            return self.chaine;
        }
    }
    this.dernier = function() {
        return self.chaine.charAt(self.chaine.length - 1);
    }
    this.totalFinal = function () {
        var total;
        for(i=0;i<self.chaine.length - 1;i++){
            if(self.chaine.charAt(i)=='+'){

            }
            //total=total+''+parseInt(self.chaine.charAt(i));
        }
    }

    this.addChaine = function(op) {
        if(op.value=='C' || op.value=='CE' || op.value=='M' || op.value=='RM'){
            self.chaine='0';
        }else {
            if(op.value=='⇤'){
                self.chaine=self.chaine.slice(0,-1);
            }else {
                if(op.value=='='){
                    //fonction totalFinal
                }else {
                    if(op.value=='±'){
                        //négatif ou positif
                    }else {
                        if(op.value=='√x'){
                            self.chaine='√'+self.chaine+' ';
                        }else {
                            if(op.value=='Off'){
                                self.view=false;
                            }else {
                                self.chaine=self.chaine+op.value;
                            }
                        }
                    }
                }
            }
        }
    }
    this.connexion = function() {
        self.view = true;
    }
});

















