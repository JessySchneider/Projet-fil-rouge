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
   

});


$('.carte-joueur img').on("click",function(){
//    if($(this).attr("data-is-hover") === undefined || $(this).attr("data-is-hover") === "false" ){
//        var originalPosY =  $(this).position();
//        $(this).css("top",originalPosY.top-20);
//        $(this).attr("data-is-hover", true);
//    }
        if($(this).hasClass("clicked-card") === false){
            $(this).addClass("clicked-card");
        }else{
            $(this).removeClass("clicked-card");
        }
    
});

//$('.carte-joueur img').mouseout(function(){
//    var posY =  $(this).position();
//    $(this).stop().css("top",posY.top+20);
//    $(this).attr("data-is-hover",false);
//});
