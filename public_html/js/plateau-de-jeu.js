/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var maximumAngle = 50;
var cartes = $('.carte-joueur img').length;

var i = -(Math.floor(cartes/2));

var angle = maximumAngle/cartes ;
var rad = 16.65;

$('.carte-joueur img').each(function(){
    
    posX = Math.round((Math.cos(rad)*300)+700);
    posY = Math.round((Math.sin(rad)*300)+770);
    $(this).css("transform","rotate("+angle*i+"deg)");
    $(this).css("top",posY+"px");
    $(this).css("left",posX+"px");
    i++;
    
    if(cartes < 5){
        rad = rad +(1/cartes);
    }else{
         rad = rad + (1.5/cartes);
    }
   
//    console.log("Pos x : "+posX);
//    console.log("Pos y : "+posY);

});

$('.carte-joueur img').hover(function(){
    console.log("Hello");
    var posY =  $(this).position();
    console.log(posY.top+20);
    $(this).css("top",posY.top+20);
});

$('.carte-joueur img').mouseout(function(){
    console.log("Hello");
    var posY =  $(this).position();
    console.log(posY.top-20);
    $(this).css("top",posY.top-20);
});
