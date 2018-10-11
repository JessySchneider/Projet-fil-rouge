/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$('.creer-une-partie').on("click",createGame);


$(document).on("click",".icone-message",removeMessageFromDOM);



function createGame(event){
    event.preventDefault();
    var nomPartie = $("input[name=nomPartie]").val();      
    if(nomPartie.length > 0 ){
        $("#message").html("<div class='message-succes'>Votre partie : "+nomPartie+" a bien été créée <i class='fas fa-times-circle icone-message'></i></div>");
        $("#message").animate({'opacity': 1, 'height':'show'}, 400);
    }else{
        $("#message").html("<div class='message-error'>Veuillez renseigner un nom de partie <i class='fas fa-times-circle icone-message'></i></div>");
        $("#message").animate({'opacity': 1,' height':'show'}, 400);
    }
}

function removeMessageFromDOM(){
    $('#message').animate({'opacity' :0, 'height':'hide'},400);
    $('[class^="message"]').animate({'opacity' :0, 'height':'hide'},400).html("");
    
    
}

