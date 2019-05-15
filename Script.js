function Tempetature(doC){
    this.doC=doC;
    this.doF=function (doC){
    return  9/5*doC+32;
    };
    this.doKenvin=function (doC){
    return 273.25+doC;
    }
}
let doC=parseInt(prompt('nhap nhiet do:'));
let tempet= new Tempetature(doC);
let doF=tempet.doF(doC);
let doK=tempet.doKenvin(doC);
document.getElementById('doF').innerHTML=doF;
document.getElementById('doK').innerHTML=doK;